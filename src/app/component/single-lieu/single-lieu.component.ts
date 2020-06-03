import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../services/animal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LieuService} from '../../services/lieu.service';
import {Animal} from '../model/animal';
import {Lieu} from '../model/lieu';

@Component({
  selector: 'app-single-lieu',
  templateUrl: './single-lieu.component.html',
  styleUrls: ['./single-lieu.component.css']
})
export class SingleLieuComponent implements OnInit {




  private _lieu: Lieu = new Lieu();
  private _id: number;
  private _erreur: boolean = false;


  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.lieuService.findById(this._id).subscribe(
          res => {
            this._lieu = res;
            console.log(this._lieu);
          }
        );
      }
    });

  }



  constructor(private lieuService: LieuService,
              private activatedRoute: ActivatedRoute, private router: Router) { }


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
}
