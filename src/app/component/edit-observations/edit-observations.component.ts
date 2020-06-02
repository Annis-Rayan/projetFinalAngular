import {Component, OnInit} from '@angular/core';
import {Observation} from '../model/observation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ObservationService} from '../../services/observation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../model/animal';
import {Lieu} from '../model/lieu';
import {User} from '../model/user';

@Component({
  selector: 'app-edit-observations',
  templateUrl: './edit-observations.component.html',
  styleUrls: ['./edit-observations.component.css']
})
export class EditObservationsComponent implements OnInit {

  private _observation: Observation = new Observation();
  private _animal: Animal = new Animal();
  private _localisation: Lieu = new Lieu();
  private _user: User = new User();
  private _id: number;
  private _erreur: boolean = false;


  private _observationForm: FormGroup;
  private _dateObservationCtrl: FormControl;
  private _nombreObservationCtrl: FormControl;
  private _descriptionCtrl: FormControl;
  private _animalForm: FormGroup;
  private _localisationForm: FormGroup;
  private _userForm: FormGroup;

  constructor(private fb: FormBuilder, private observationService: ObservationService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this._dateObservationCtrl = fb.control('', EditObservationsComponent.checkDate);
    this._descriptionCtrl = fb.control('', Validators.required);
    this._nombreObservationCtrl = fb.control('', Validators.required);
    this._observationForm = fb.group({
      dateObservation: this._dateObservationCtrl,
      nombreObservation: this._nombreObservationCtrl,
      description: this._descriptionCtrl
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
        this._id = params.id;
        this.observationService.findById(this._id).subscribe(
          res => {
            this._observation = res;
          }
        );
      }
    });
  }

  public save() {
    if (this._observation.id) {
      this.observationService.update(this._observation).subscribe(res => {
        this.router.navigate(['/observations']);
      }, err => {
        this._erreur = true;
      });
    } else {
      this.observationService.create(this._observation).subscribe(res => {
        this.router.navigate(['observations']);
      }, err => {
        this._erreur = true;
      });
    }
  }

  public disable(): boolean {
    if (this._observation.id) {
      return this._observationForm.dirty && this._observationForm.invalid;
    }
    return this._observationForm.untouched || (this.dateObservationCtrl.dirty && this.dateObservationCtrl.invalid)
      || (this.nombreObservationCtrl.dirty && this.nombreObservationCtrl.invalid)
      || (this.descriptionCtrl.dirty && this.descriptionCtrl.invalid);
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
