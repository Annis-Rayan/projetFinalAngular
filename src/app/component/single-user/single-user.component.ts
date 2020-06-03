import { Component, OnInit } from '@angular/core';
import {Lieu} from '../model/lieu';
import {LieuService} from '../../services/lieu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {


  private _user: User = new User();
  private _id: number;
  private _erreur: boolean = false;


  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.userService.findById(this._id).subscribe(
          res => {
            this._user = res;
            console.log(this._user);
          }
        );
      }
    });

  }



  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) { }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
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
