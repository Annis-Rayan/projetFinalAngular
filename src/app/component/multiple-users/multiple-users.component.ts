import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-multiple-users',
  templateUrl: './multiple-users.component.html',
  styleUrls: ['./multiple-users.component.css']
})
export class MultipleUsersComponent implements OnInit {

  private _users: User[] = [

  ];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.initUsers();
  }

  private initUsers() {
    this.userService.findAll().subscribe(result => {
      this._users = result;
      //console.log(this.users);
    });
  }

  get users(): User[] {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  public delete(id: number) {
    this.userService.delete(id).subscribe(result => {
      this.initUsers();
    });
  }

  public get login(){
    return sessionStorage.getItem('login');
  }

  public logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }
}
