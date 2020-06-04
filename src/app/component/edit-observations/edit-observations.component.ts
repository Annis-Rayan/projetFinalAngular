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


  constructor(private animalService: AnimalService,
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

  private initUser(){
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
  public get login(){
    return sessionStorage.getItem('login');
  }
}
