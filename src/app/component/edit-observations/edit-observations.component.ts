import {Component, OnInit} from '@angular/core';
import {Observation} from '../model/observation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ObservationService} from '../../services/observation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../model/animal';
import {Lieu} from '../model/lieu';
import {User} from '../model/user';
import {AnimalService} from '../../services/animal.service';

import {UserService} from '../../services/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-edit-observations',
  templateUrl: './edit-observations.component.html',
  styleUrls: ['./edit-observations.component.css']
})
export class EditObservationsComponent implements OnInit {

  private _observation: Observation = new Observation();

  private _observationForm: FormGroup;
  private _id: number;
  private _erreur: boolean = false;
  private _dateObservationCtrl: FormControl;
  private _nombreObservationCtrl: FormControl;
  private _descriptionCtrl: FormControl;

  private _animaux: Animal[];

  private _animaux2: Animal[];
  private _animal: Animal;
  private _nouvelAnimal: Animal;

  private _animalNomCourantCtrl: FormControl;

  private _lieu: Lieu = new Lieu;

  private _localisationPaysCtrl: FormControl;
  private _localisationRegionCtrl: FormControl;
  private _localisationLocaliteCtrl: FormControl;

  private _user: User = new User;


  constructor(private httpClient: HttpClient, private animalService: AnimalService,
              private userService: UserService,
              private fb: FormBuilder,
              private observationService: ObservationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this._dateObservationCtrl = fb.control('', EditObservationsComponent.checkDate);
    this._descriptionCtrl = fb.control('', Validators.required);
    this._nombreObservationCtrl = fb.control('', Validators.required);

    this._animalNomCourantCtrl = fb.control('', Validators.required);

    this._localisationPaysCtrl = fb.control('', Validators.required);
    this._localisationRegionCtrl = fb.control('', Validators.required);
    this._localisationLocaliteCtrl = fb.control('', Validators.required);


    this._observationForm = fb.group({

      dateObservation: this.dateObservationCtrl,
      nombreObservation: this.nombreObservationCtrl,
      description: this.descriptionCtrl,

      animalNomCourant: this.animalNomCourantCtrl,

      localisationPays: this.localisationPaysCtrl,
      localisationRegion: this.localisationRegionCtrl,
      localisationLocalite: this.localisationLocaliteCtrl,

    });
  }

  // Partie implémentation image

  private _selectedFile;
  private _event1;
  private _imgURL: any;
  private _receivedImageData: any = {};
  private _base64Data: any;
  private _convertedImage: any;

  public onFileChanged(event) {
    console.log(event);
    this._selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this._imgURL = reader.result;
    };

  }


  onUpload() {

    const uploadData = new FormData();
    uploadData.append('myFile', this._selectedFile, this._selectedFile.name);
    console.log(uploadData);
    console.log(this.observation.id);

    this.httpClient.post('http://localhost:8080/web/rest/observation/edit/upload/' + this.observation.id, uploadData)
      .subscribe(
        res => {
          console.log(res);
          this._receivedImageData = res;
          this._base64Data = this._receivedImageData.pic;
          this._convertedImage = 'data:image/jpeg;base64,' + this._base64Data;
          this.observation.emplacementImage = this.receivedImageData.id;
        },
        err => console.log('Error Occured during saving: ' + err)
      );


  }


  static checkDate(control: FormControl) {
    if (new Date(control.value) < new Date()) {
      return null;
    }
    return {dateInvalid: true};
  }

  ngOnInit(): void {
    this.initAnimaux(); // on recupere la liste des animaux
    this.initUser();
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.observationService.findById(params.id).subscribe(data => {
          this.observation = data;
        });
      }
    });
  }

  private initAnimaux() {
    this.animalService.findAll().subscribe(result => {
      this._animaux = result;
    });

  }

  private initUser() {
    console.log(this.login.valueOf());
    this.userService.findByPseudo(this.login.valueOf()).subscribe(resultUser => {
      this._user = resultUser;
      console.log(resultUser);
    });
  }


  public save() {
    if (this._observation.id) {
      console.log('update');
      // RECUPERATION DE L ANIMAL A PARTIR DU NOM

      console.log(this.observationForm.value);
      console.log('trouver animal from son nom');
      this._animaux2 = this._animaux.filter(
        animal => animal.nomCourant === this.observationForm.value.animalNomCourant);
      this._nouvelAnimal = this._animaux2[0];
      this._observation.animal = this._nouvelAnimal;


      // FIN RECUP ANIMAL

      // ATTRIBUTION DES PARAM LIEU AU LIEU DE OBSERVATION

      console.log(this._lieu);
      this._observation.localisation = this._lieu;
      this._observation.user = this._user;
      this._observation.nombreObservations = +this._observation.nombreObservations;
      console.log('infos transmises');
      console.log(this._observation);
      this.observationService.update(this._observation).subscribe(res => {
        this.router.navigate(['/observation']);
      }, err => {
        this._erreur = true;
      });


    } else {
      console.log('create');

      // RECUPERATION DE L ANIMAL A PARTIR DU NOM

      console.log(this.observationForm.value);
      console.log('trouver animal from son nom');
      this._animaux2 = this._animaux.filter(
        animal => animal.nomCourant === this.observationForm.value.animalNomCourant);
      this._nouvelAnimal = this._animaux2[0];
      this._observation.animal = this._nouvelAnimal;

      // FIN RECUP ANIMAL

      // ATTRIBUTION DES PARAM LIEU AU LIEU DE OBSERVATION

      console.log(this._lieu);
      this._observation.localisation = new Lieu();

      this.observation.localisation.pays = this.observationForm.value.localisationPays;
      this._observation.localisation.region = this.observationForm.value.localisationRegion;
      this._observation.localisation.localite = this.observationForm.value.localisationLocalite;
      this._observation.user = this._user;
      this._observation.nombreObservations = +this._observation.nombreObservations;

      console.log('infos transmises');
      console.log(this._observation);

      this.observationService.create(this._observation).subscribe(res => {
        this.router.navigate(['observation']);
      }, err => {
        this._erreur = true;
      });
    }
  }

  public disable(): boolean {
    if (this._observation.id) {
      return this._observationForm.dirty && this._observationForm.invalid;
    }
    return this._observationForm.dirty && this._observationForm.invalid;
  }


  get animaux2(): Animal[] {
    return this._animaux2;
  }

  set animaux2(value: Animal[]) {
    this._animaux2 = value;
  }

  get nouvelAnimal(): Animal {
    return this._nouvelAnimal;
  }

  set nouvelAnimal(value: Animal) {
    this._nouvelAnimal = value;
  }

  get selectedFile() {
    return this._selectedFile;
  }

  set selectedFile(value) {
    this._selectedFile = value;
  }

  get event1() {
    return this._event1;
  }

  set event1(value) {
    this._event1 = value;
  }

  get imgURL(): any {
    return this._imgURL;
  }

  set imgURL(value: any) {
    this._imgURL = value;
  }

  get receivedImageData(): any {
    return this._receivedImageData;
  }

  set receivedImageData(value: any) {
    this._receivedImageData = value;
  }

  get base64Data(): any {
    return this._base64Data;
  }

  set base64Data(value: any) {
    this._base64Data = value;
  }

  get convertedImage(): any {
    return this._convertedImage;
  }

  set convertedImage(value: any) {
    this._convertedImage = value;
  }

  get observation(): Observation {
    return this._observation;
  }

  set observation(value: Observation) {
    this._observation = value;
  }

  get id(): number {
    return this._id;
  }

  get lieu(): Lieu {
    return this._lieu;
  }

  set lieu(value: Lieu) {
    this._lieu = value;
  }

  set id(value: number) {
    this._id = value;
  }

  get animaux(): Animal[] {
    return this._animaux;
  }

  set animaux(value: Animal[]) {
    this._animaux = value;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get animal(): Animal {
    return this._animal;
  }

  set animal(value: Animal) {
    this._animal = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }

  get observationForm(): FormGroup {
    return this._observationForm;
  }

  set observationForm(value: FormGroup) {
    this._observationForm = value;
  }

  get dateObservationCtrl(): FormControl {
    return this._dateObservationCtrl;
  }

  get animalNomCourantCtrl(): FormControl {
    return this._animalNomCourantCtrl;
  }

  set animalNomCourantCtrl(value: FormControl) {
    this._animalNomCourantCtrl = value;
  }

  get localisationPaysCtrl(): FormControl {
    return this._localisationPaysCtrl;
  }

  set localisationPaysCtrl(value: FormControl) {
    this._localisationPaysCtrl = value;
  }

  get localisationRegionCtrl(): FormControl {
    return this._localisationRegionCtrl;
  }

  set localisationRegionCtrl(value: FormControl) {
    this._localisationRegionCtrl = value;
  }

  get localisationLocaliteCtrl(): FormControl {
    return this._localisationLocaliteCtrl;
  }

  set localisationLocaliteCtrl(value: FormControl) {
    this._localisationLocaliteCtrl = value;
  }

  get nombreObservationCtrl(): FormControl {
    return this._nombreObservationCtrl;
  }

  set nombreObservationCtrl(value: FormControl) {
    this._nombreObservationCtrl = value;
  }

  get descriptionCtrl(): FormControl {
    return this._descriptionCtrl;
  }

  set descriptionCtrl(value: FormControl) {
    this._descriptionCtrl = value;
  }

  public get login() {
    return sessionStorage.getItem('login');
  }
}
