import {Component, OnInit} from '@angular/core';
import {Observation} from '../model/observation';
import {ObservationService} from '../../services/observation.service';
import {log} from 'util';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {

  private _observations: Observation[];

  constructor(private observationService: ObservationService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initObservations();
  }

  private initObservations() {
    this.observationService.findAll().subscribe(result => {
      this.observations = result;

      console.log(this.login);
      this.userService.findByPseudo(this.login).subscribe(result2 => {
        console.log(result2);
        // console.log(this.userService.findByPseudo(this.login));
      });

    });
  }


  public delete(id: number) {
    this.observationService.delete(id).subscribe(result => {
      this.initObservations();
    });
  }

  get observations(): Observation[] {
    return this._observations;
  }

  set observations(value: Observation[]) {
    this._observations = value;
  }

  public get login(){
    return sessionStorage.getItem('login');
  }

  public logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }
}
