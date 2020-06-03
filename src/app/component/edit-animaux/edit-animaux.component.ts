import {Component, OnInit} from '@angular/core';
import {Animal} from '../model/animal';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {AnimalService} from '../../services/animal.service';

@Component({
  selector: 'app-edit-animaux',
  templateUrl: './edit-animaux.component.html',
  styleUrls: ['./edit-animaux.component.css']
})
export class EditAnimauxComponent implements OnInit {

  private _animal: Animal = new Animal();
  private _id: number;
  private _erreur: boolean = false;

  private _animalForm: FormGroup;
  private _ordreCtrl: FormControl;
  private _nomCourantCtrl: FormControl;
  private _nomScientifiqueCtrl: FormControl;
 // private _emplacementImageCtrl: FormControl;
  private _descriptionCtrl: FormControl;

  constructor(private fb: FormBuilder, private animalService: AnimalService,
              private activatedRoute: ActivatedRoute, private router: Router) {

    this._nomCourantCtrl = fb.control('', Validators.required);
    this._nomScientifiqueCtrl = fb.control('', Validators.required);
    this._ordreCtrl = fb.control('', Validators.required);
    this._descriptionCtrl = fb.control('', Validators.required),
  //  this._emplacementImageCtrl = fb.control('', Validators.required);
    this._animalForm = fb.group({

      nomCourant: this.nomCourantCtrl,
      nomScientifique: this.nomScientifiqueCtrl,
    //  emplacementImage: this.emplacementImageCtrl,
      description: this.descriptionCtrl,
      ordre: this.ordreCtrl
    });
  }

  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.animalService.findById(this._id).subscribe(
          res => {
            this._animal = res;
          }
        );
      }
    });
  }

  public save() {
    if (this._animal.id) {
      console.log('update');
      this.animalService.update(this._animal).subscribe(res => {
        this.router.navigate(['/animal']);
      }, err => {
        this._erreur = true;
      });
    } else {
      console.log('create');
      this.animalService.create(this._animal).subscribe(res => {
        this.router.navigate(['/animal']);
      }, err => {
        this._erreur = true;
      });
    }
  }

  public disable(): boolean {
    if (this._animal.id) {
      return this._animalForm.dirty && this._animalForm.invalid;
    }
    return this._animalForm.dirty && this._animalForm.invalid;
   // return this._animalForm.untouched || (this._nomCourantCtrl.dirty && this._nomCourantCtrl.invalid);
  }


  get animal(): Animal {
    return this._animal;
  }

  set animal(value: Animal) {
    this._animal = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get ordreCtrl(): FormControl {
    return this._ordreCtrl;
  }

  set ordreCtrl(value: FormControl) {
    this._ordreCtrl = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }

  get animalForm(): FormGroup {
    return this._animalForm;
  }

  set animalForm(value: FormGroup) {
    this._animalForm = value;
  }

  get nomCourantCtrl(): FormControl {
    return this._nomCourantCtrl;
  }

  set nomCourantCtrl(value: FormControl) {
    this._nomCourantCtrl = value;
  }

  get nomScientifiqueCtrl(): FormControl {
    return this._nomScientifiqueCtrl;
  }

  set nomScientifiqueCtrl(value: FormControl) {
    this._nomScientifiqueCtrl = value;
  }

 // get emplacementImageCtrl(): FormControl {
//    return this._emplacementImageCtrl;
 // }

//  set emplacementImageCtrl(value: FormControl) {
 //   this._emplacementImageCtrl = value;
 // }

  get descriptionCtrl(): FormControl {
    return this._descriptionCtrl;
  }

  set descriptionCtrl(value: FormControl) {
    this._descriptionCtrl = value;
  }
}
