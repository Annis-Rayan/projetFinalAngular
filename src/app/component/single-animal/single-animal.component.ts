import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../services/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Animal} from '../model/animal';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {

  private _animal: Animal = new Animal();
  private _id: number;
  private _erreur: boolean = false;



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
