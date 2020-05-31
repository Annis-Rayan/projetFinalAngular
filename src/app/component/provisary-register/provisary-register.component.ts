import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-provisary-register',
  templateUrl: './provisary-register.component.html',
  styleUrls: ['./provisary-register.component.css']
})
export class ProvisaryRegisterComponent implements OnInit {


  private _user: User = new User();
  private _id: number;
  private _erreur: boolean = false;

  private _userForm: FormGroup;
  private _pseudoCtrl: FormControl;
  private _prenomCtrl: FormControl;
  private _nomCtrl: FormControl;
  private _imageProfilCtrl: FormControl;

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this._pseudoCtrl = fb.control('', Validators.required, control => this.checkPseudo(control));
    this._nomCtrl = fb.control('', Validators.required);
    this._prenomCtrl = fb.control('', Validators.required);
  }

  checkPseudo(control: AbstractControl) {
    return this.userService.checkPseudo(control.value).pipe(map(res => {
      if (res) {
        return null;
      }
      return {'pseudoErreur': true};
    }));
  }
ngOnInit() {
}

}
