import {Component, OnInit} from '@angular/core';
import {Observation} from '../model/observation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ObservationService} from '../../services/observation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../model/animal';
import {Lieu} from '../model/lieu';
import {User} from '../model/user';
import {AnimalService} from '../../services/animal.service';
import {LieuService} from '../../services/lieu.service';
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

  private _animalId: number;
  private _animalOrdreCtrl: FormControl;
  private _animalNomCourantCtrl: FormControl;
  private _animalNomScientifiqueCtrl: FormControl;
  private _animalEmplacementImageCtrl: FormControl;
  private _animalDescriptionCtrl: FormControl;

  private _localisationId: number;
  private _localisationPaysCtrl: FormControl;
  private _localisationRegionCtrl: FormControl;
  private _localisationLocaliteCtrl: FormControl;

  private _userId: number;
  private _userPseudoCtrl: FormControl;
  private _userPrenomCtrl: FormControl;
  private _userNomCtrl: FormControl;
  private _userImageProfilCtrl: FormControl;


  constructor(private fb: FormBuilder,
              private observationService: ObservationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this._dateObservationCtrl = fb.control('', EditObservationsComponent.checkDate);
    this._descriptionCtrl = fb.control('', Validators.required);
    this._nombreObservationCtrl = fb.control('', Validators.required);

    this._animalNomCourantCtrl = fb.control('', Validators.required);
    this._animalOrdreCtrl = fb.control('', Validators.required);
    this._animalEmplacementImageCtrl = fb.control('', Validators.required);

    this._localisationPaysCtrl = fb.control('', Validators.required);
    this._localisationRegionCtrl = fb.control('', Validators.required);
    this._localisationLocaliteCtrl = fb.control('', Validators.required);




    this._observationForm = fb.group({

      dateObservation: this.dateObservationCtrl,
      nombreObservation: this.nombreObservationCtrl,
      description: this.descriptionCtrl,

      animalNomCourant: this.animalNomCourantCtrl,
      animalNomScientifique: this.animalNomScientifiqueCtrl,
      animalEmplacementImage: this.animalEmplacementImageCtrl,
      animalDescription: this.animalDescriptionCtrl,
      animalOrdre: this.animalOrdreCtrl,

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
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.observationService.findById(params.id).subscribe(data => {
          this.observation = data;
          if (!this.observation.animal) {
            this.observation.animal = new Animal(this.observation.animal.id = 1,
              this.observation.animal.ordre = 'Oiseaux',
              this.observation.animal.nomCourant = 'non defini',
              this.observation.animal.description = 'non definie',
              this.observation.animal.emplacementImage = 'non definie');
          }
          if (!this.observation.user) {
            this.observation.user = new User();
          }
          if (!this.observation.localisation) {
            this.observation.localisation = new Lieu();
          }
        });
      }
    });
  }

  public save() {
    if (this._observation.id) {
      console.log('update');
      console.log(this.observation);
      this.observationService.update(this._observation).subscribe(res => {
        this.router.navigate(['/observation']);
      }, err => {
        this._erreur = true;
      });
    } else {
      console.log('create');
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
 /*   return this._observationForm.untouched || (this.dateObservationCtrl.dirty && this.dateObservationCtrl.invalid)
      || (this.nombreObservationCtrl.dirty && this.nombreObservationCtrl.invalid)
      || (this.descriptionCtrl.dirty && this.descriptionCtrl.invalid);*/
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

  set id(value: number) {
    this._id = value;
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


  get animalId(): number {
    return this._animalId;
  }

  set animalId(value: number) {
    this._animalId = value;
  }

  get animalOrdreCtrl(): FormControl {
    return this._animalOrdreCtrl;
  }

  set animalOrdreCtrl(value: FormControl) {
    this._animalOrdreCtrl = value;
  }

  get animalNomCourantCtrl(): FormControl {
    return this._animalNomCourantCtrl;
  }

  set animalNomCourantCtrl(value: FormControl) {
    this._animalNomCourantCtrl = value;
  }

  get animalNomScientifiqueCtrl(): FormControl {
    return this._animalNomScientifiqueCtrl;
  }

  set animalNomScientifiqueCtrl(value: FormControl) {
    this._animalNomScientifiqueCtrl = value;
  }

  get animalEmplacementImageCtrl(): FormControl {
    return this._animalEmplacementImageCtrl;
  }

  set animalEmplacementImageCtrl(value: FormControl) {
    this._animalEmplacementImageCtrl = value;
  }

  get animalDescriptionCtrl(): FormControl {
    return this._animalDescriptionCtrl;
  }

  set animalDescriptionCtrl(value: FormControl) {
    this._animalDescriptionCtrl = value;
  }

  get localisationId(): number {
    return this._localisationId;
  }

  set localisationId(value: number) {
    this._localisationId = value;
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

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get userPseudoCtrl(): FormControl {
    return this._userPseudoCtrl;
  }

  set userPseudoCtrl(value: FormControl) {
    this._userPseudoCtrl = value;
  }

  get userPrenomCtrl(): FormControl {
    return this._userPrenomCtrl;
  }

  set userPrenomCtrl(value: FormControl) {
    this._userPrenomCtrl = value;
  }

  get userNomCtrl(): FormControl {
    return this._userNomCtrl;
  }

  set userNomCtrl(value: FormControl) {
    this._userNomCtrl = value;
  }

  get userImageProfilCtrl(): FormControl {
    return this._userImageProfilCtrl;
  }

  set userImageProfilCtrl(value: FormControl) {
    this._userImageProfilCtrl = value;
  }

  set dateObservationCtrl(value: FormControl) {
    this._dateObservationCtrl = value;
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
}
