import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../../services/user.service';
import {EditUsersComponent} from '../edit-users/edit-users.component';
import {ImageTestService} from '../image-test.service';

@Component({
  selector: 'app-multiple-users',
  templateUrl: './multiple-users.component.html',
  styleUrls: ['./multiple-users.component.css']
})
export class MultipleUsersComponent implements OnInit {

  private _users: User[] = [];
  private _editusercomponent: EditUsersComponent;

  constructor(private _userService: UserService, private _imageTestService: ImageTestService) {
  }

  ngOnInit(): void {
    this.initUsers();
  }

  private initUsers() {
    this._userService.findAll().subscribe(result => {
      this._users = result;
      //console.log(this.users);
    });
  }

  get imageTestService(): ImageTestService {
    return this._imageTestService;
  }

  set imageTestService(value: ImageTestService) {
    this._imageTestService = value;
  }


  get editusercomponent(): EditUsersComponent {
    return this._editusercomponent;
  }

  set editusercomponent(value: EditUsersComponent) {
    this._editusercomponent = value;
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  public delete(id: number) {
    this._userService.delete(id).subscribe(result => {
      this.initUsers();
    });
  }

  public get login() {
    return sessionStorage.getItem('login');
  }

  public logout() {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }

  get userService(): UserService {
    return this._userService;
  }

  set userService(value: UserService) {
    this._userService = value;
  }

}
