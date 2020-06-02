import {Component, OnInit} from '@angular/core';
import {Login} from '../model/login';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private _loginForm: FormGroup;
  private _loginCtrl: FormControl;
  private _passwordCtrl: FormControl;
  private _login: Login = new Login();
  private _erreur = false;


  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this._loginCtrl = this.fb.control('', Validators.required);
    this._passwordCtrl = this.fb.control('', Validators.required);
    this._loginForm = this.fb.group({
      login: this._loginCtrl,
      password: this._passwordCtrl
    });
  }

  public send() {
    this.loginService.login(this._login).subscribe(res => {
      sessionStorage.setItem('login', btoa(`${this._login.login}:${this._login.password}`));
      sessionStorage.setItem('login', this._login.login);
      this.router.navigate(['/home']);
    }, error => {
      this._erreur = true;
    });
  }


  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(value: FormGroup) {
    this._loginForm = value;
  }

  get loginCtrl(): FormControl {
    return this._loginCtrl;
  }

  set loginCtrl(value: FormControl) {
    this._loginCtrl = value;
  }

  get passwordCtrl(): FormControl {
    return this._passwordCtrl;
  }

  set passwordCtrl(value: FormControl) {
    this._passwordCtrl = value;
  }

  get login(): Login {
    return this._login;
  }

  set login(value: Login) {
    this._login = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }
}
