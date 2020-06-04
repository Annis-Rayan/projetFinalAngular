import {Component, OnInit} from '@angular/core';
import {Lieu} from '../model/lieu';
import {LieuService} from '../../services/lieu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  private _user: User = new User();
  private _users: User[] = [];
  private _id: number;
  private _erreur: boolean = false;

  private _base64Data: any;
  private _convertedImage: any;

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
    this.users[0] = this.user;
    console.log(this.users);
  }


  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) {
  }


  public getImage(user: User): Observable<string> {
    if (user.imageProfil != null) {
      this._base64Data = user.imageProfil.pic;
      this._convertedImage = 'data:image/jpeg;base64,' + this._base64Data;
    }

    return new Observable(value => {
      value.next(this._convertedImage);
    });
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
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
