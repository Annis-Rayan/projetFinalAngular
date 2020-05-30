import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  private user: User = new User();
  private id: number;
  private erreur: boolean = false;

  private userForm: FormGroup;
  private pseudoCtrl: FormControl;
  private prenomCtrl: FormControl;
  private nomCtrl: FormControl;
  private imageProfilCtrl: FormControl;

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
   
  }

  ngOnInit(): void {
  }

}
