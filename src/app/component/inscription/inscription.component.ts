import {Component, OnInit} from '@angular/core';
import {Login} from '../model/login';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InscriptionService} from '../../services/inscription.service';
import {Router} from '@angular/router';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private _login: Login = new Login();
  private _inscriptionForm: FormGroup;
  private _loginCtrl: FormControl;
  private _passwordCtrl: FormControl;
  private _confirmationCtrl: FormControl;
  private _erreur: boolean = false;

  constructor(private fb: FormBuilder, private inscriptionService: InscriptionService, private router: Router) {
    this.loginCtrl = this.fb.control('', Validators.required, control => this.isAvailable(control));
    this.passwordCtrl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
    this.confirmationCtrl = this.fb.control('', [Validators.required]);
    this.inscriptionForm = this.fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      confirmation: this.confirmationCtrl
    }, {validator: InscriptionComponent.MustMatch});
  }

  private isAvailable(control: AbstractControl) {
    return this.inscriptionService.available(control.value).pipe(debounceTime(500), map(res => {
      if (res) {
        return null;
      }
      return {'notAvailable': true};
    }));
  }

  static MustMatch(inscriptionForm: FormGroup) {
    const password = inscriptionForm.controls['password'];
    const confirm = inscriptionForm.controls['confirmation'];

    if (password.errors && !confirm.errors) {
      return null;
    }

    if (password.value !== confirm.value) {
      return {mustMatch: true};
    } else {
      return null;
    }
  }

  save() {
    this.inscriptionService.inscription(this._login).subscribe(res => {
      this.router.navigate(['/login']);
    }, erreur => {
      this._erreur = true;
    });
  }

  ngOnInit(): void {
  }


  get login(): Login {
    return this._login;
  }

  set login(value: Login) {
    this._login = value;
  }

  get inscriptionForm(): FormGroup {
    return this._inscriptionForm;
  }

  set inscriptionForm(value: FormGroup) {
    this._inscriptionForm = value;
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

  get confirmationCtrl(): FormControl {
    return this._confirmationCtrl;
  }

  set confirmationCtrl(value: FormControl) {
    this._confirmationCtrl = value;
  }

  get erreur(): boolean {
    return this._erreur;
  }

  set erreur(value: boolean) {
    this._erreur = value;
  }
}
