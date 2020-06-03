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

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.initAnimaux();
  }

  private initAnimaux() {
    this.animalService.findAll().subscribe(result => {
      this._animaux = result;
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
    return sessionStorage.getItem('login');
  }

  public logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }
}
