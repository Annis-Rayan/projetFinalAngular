import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observation} from '../model/observation';
import {ObservationService} from '../../services/observation.service';

@Component({
  selector: 'app-single-obs',
  templateUrl: './single-obs.component.html',
  styleUrls: ['./single-obs.component.css']
})
export class SingleObsComponent implements OnInit {




  private _observation: Observation = new Observation();
  private _id: number;
  private _erreur: boolean = false;


  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.observationService.findById(this._id).subscribe(
          res => {
            this._observation = res;
            console.log(this._observation);
          }
        );
      }
    });

  }



  constructor(private observationService: ObservationService,
              private activatedRoute: ActivatedRoute, private router: Router) { }




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
}
