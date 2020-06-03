import {Component, OnInit} from '@angular/core';
import {Lieu} from '../model/lieu';

import {LieuService} from '../../services/lieu.service';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.css']
})
export class LieuxComponent implements OnInit {

  private _lieux: Lieu[];

  constructor(private lieuService: LieuService) {
  }

  ngOnInit(): void {
    this.initLieux();
  }

  private initLieux() {
    this.lieuService.findAll().subscribe(result => {
      this._lieux = result;
    });
  }


  public delete(id: number) {
    this.lieuService.delete(id).subscribe(result => {
      this.initLieux();
    });
  }

  get lieux(): Lieu[] {
    return this._lieux;
  }

  set lieux(value: Lieu[]) {
    this._lieux = value;
  }

  public get login(){
    return sessionStorage.getItem('login');
  }

  public logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }
}
