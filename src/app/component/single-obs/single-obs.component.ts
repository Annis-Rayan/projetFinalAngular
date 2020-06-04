import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observation} from '../model/observation';
import {ObservationService} from '../../services/observation.service';
import {Animal} from '../model/animal';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-obs',
  templateUrl: './single-obs.component.html',
  styleUrls: ['./single-obs.component.css']
})
export class SingleObsComponent implements OnInit {

  private _observations: Observation[] = [];
  private _observation: Observation = new Observation();
  private _id: number;
  private _erreur: boolean = false;

  private _base64Data: any;
  private _convertedImage: any;



  constructor(private observationService: ObservationService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }
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

    this.observations[0] = this.observation;
    console.log(this.observation);
  }


  public getImage(observation: Observation): Observable<string> {
    if (observation.emplacementImage != null) {
      this._base64Data = observation.emplacementImage.pic;
      this._convertedImage = 'data:image/jpeg;base64,' + this._base64Data;
    }

    return new Observable(value => {
      value.next(this._convertedImage);
    });
  }


  get observations(): Observation[] {
    return this._observations;
  }

  set observations(value: Observation[]) {
    this._observations = value;
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
