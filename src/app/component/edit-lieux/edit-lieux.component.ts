import {Component, OnInit} from '@angular/core';
import {Lieu} from '../model/lieu';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LieuService} from '../../services/lieu.service';

@Component({
  selector: 'app-edit-lieux',
  templateUrl: './edit-lieux.component.html',
  styleUrls: ['./edit-lieux.component.css']
})
export class EditLieuxComponent implements OnInit {

  private _lieu: Lieu = new Lieu();
  private _id: number;
  private _erreur: boolean = false;

  private _lieuForm: FormGroup;
  private _paysCtrl: FormControl;
  private _regionCtrl: FormControl;
  private _localiteCtrl: FormControl;


  constructor(private fb: FormBuilder, private lieuService: LieuService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this._paysCtrl = fb.control('', Validators.required);
    this._regionCtrl = fb.control('', Validators.required);
    this._localiteCtrl = fb.control('', Validators.required);
    this._lieuForm = fb.group({
      pays: this.paysCtrl,
      region: this.regionCtrl,
      localite: this.localiteCtrl
    });
  }

  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.lieuService.findById(this._id).subscribe(
          res => {
            this._lieu = res;
          }
        );
      }
    });
  }

  public save() {
    if (this._lieu.id) {
      console.log('update');
      console.log(this._lieu);
      this.lieuService.update(this._lieu).subscribe(res => {
        this.router.navigate(['/localisation']);
      }, err => {
        this._erreur = true;
      });
    } else {
      console.log('create');
      console.log(this._lieu);
      this.lieuService.create(this._lieu).subscribe(res => {
        this.router.navigate(['localisation']);
      }, err => {
        this._erreur = true;
      });
    }
  }

  public disable(): boolean {
    if (this._lieu.id) {
      return this._lieuForm.dirty && this._lieuForm.invalid;
    }
    return this._lieuForm.untouched || (this.paysCtrl.dirty && this.paysCtrl.invalid)
      || (this.regionCtrl.dirty && this.regionCtrl.invalid)
      || (this.localiteCtrl.dirty && this.localiteCtrl.invalid);
  }

  get lieu(): Lieu {
    return this._lieu;
  }

  set lieu(value: Lieu) {
    this._lieu = value;
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

  get lieuForm(): FormGroup {
    return this._lieuForm;
  }

  set lieuForm(value: FormGroup) {
    this._lieuForm = value;
  }

  get paysCtrl(): FormControl {
    return this._paysCtrl;
  }

  set paysCtrl(value: FormControl) {
    this._paysCtrl = value;
  }

  get regionCtrl(): FormControl {
    return this._regionCtrl;
  }

  set regionCtrl(value: FormControl) {
    this._regionCtrl = value;
  }

  get localiteCtrl(): FormControl {
    return this._localiteCtrl;
  }

  set localiteCtrl(value: FormControl) {
    this._localiteCtrl = value;
  }
}
