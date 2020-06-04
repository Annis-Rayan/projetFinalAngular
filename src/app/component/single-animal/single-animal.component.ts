import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../services/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../model/animal';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  private _animal: Animal = new Animal();
  private _animals: Animal[] = [];
  private _id: number;
  private _erreur: boolean = false;

  private _base64Data: any;
  private _convertedImage: any;

  constructor( private animalService: AnimalService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.animalService.findById(this._id).subscribe(
          res => {
            this._animal = res;
            console.log(this._animal);
          }
        );
      }
    });
    this.animals[0] = this.animal;
  }

  public getImage(animal: Animal): Observable<string> {
    if (animal.emplacementImage != null) {
      this._base64Data = animal.emplacementImage.pic;
      this._convertedImage = 'data:image/jpeg;base64,' + this._base64Data;
    }

    return new Observable(value => {
      value.next(this._convertedImage);
    });
  }

  get animals(): Animal[] {
    return this._animals;
  }

  set animals(value: Animal[]) {
    this._animals = value;
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

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }
}
