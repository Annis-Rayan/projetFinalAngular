import {Component, OnInit} from '@angular/core';
import {Animal} from '../model/animal';
import {AnimalService} from '../../services/animal.service';


@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {

  private _animaux: Animal[];
  private _animaux2: Animal[];
  private _animal: Animal;
  private _animal2: Animal;

  get animaux2(): Animal[] {
    return this._animaux2;
  }

  set animaux2(value: Animal[]) {
    this._animaux2 = value;
  }

  get animal2(): Animal {
    return this._animal2;
  }

  set animal2(value: Animal) {
    this._animal2 = value;
  }

  get animal(): Animal {
    return this._animal;
  }

  set animal(value: Animal) {
    this._animal = value;
  }

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.initAnimaux();
  }

  private initAnimaux() {
    this.animalService.findAll().subscribe(result => {
      this._animaux = result;
    /*  console.log(this._animaux);
      console.log('trouver animal from son nom');
      this._animaux2 = this._animaux.filter(
        book => book.nomCourant === 'chien');
      console.log('stockage in list');
      console.log(this._animaux2);
      console.log('stockage in object');
      this._animal2 = this._animaux2[0];
      console.log(this._animal2);
      console.log('fin');*/

    });


  }


  public delete(id: number) {
    this.animalService.delete(id).subscribe(result => {
      this.initAnimaux();
    });
  }


  get animaux(): Animal[] {
    return this._animaux;
  }

  set animaux(value: Animal[]) {
    this._animaux = value;
  }
  public get login(){
    console.log(sessionStorage.getItem('login'));
    return sessionStorage.getItem('login');
  }

  public logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }
}
