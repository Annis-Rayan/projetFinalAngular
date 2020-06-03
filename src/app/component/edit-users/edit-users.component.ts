import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  private _user: User = new User();
  private _id: number;
  private _erreur: boolean = false;

  private _userForm: FormGroup;
  private _pseudoCtrl: FormControl;
  private _prenomCtrl: FormControl;
  private _nomCtrl: FormControl;
  private _imageProfilCtrl: FormControl;


  constructor(private httpClient: HttpClient, private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this._pseudoCtrl = fb.control('', Validators.required); // control => this.checkPseudo(control));
    this._nomCtrl = fb.control('', Validators.required);
    this._prenomCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      pseudo: this.pseudoCtrl,
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      imageProfil: this.imageProfilCtrl
    });
  }

  // Partie implémentation image

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any = {};
  base64Data: any;
  convertedImage: any;

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }



  onUpload() {

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


    this.httpClient.post('http://localhost:8080/web/rest/users/{id}/upload', uploadData)
      .subscribe(
        res => {
          console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        },
        err => console.log('Error Occured during saving: ' + err)
      );


  }


  checkPseudo(control: AbstractControl) {
    return this.userService.checkPseudo(control.value).pipe(map(res => {
      if (res) {
        return null;
      }
      return {'pseudoErreur': true};
    }));
  }

  findByPseudo(controlPseudo: AbstractControl) {
    return this.userService.findByPseudo(controlPseudo.value).pipe(map(res => {
      return null;
    }));
  }

  ngOnInit(): void {
    this._erreur = false;
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this._id = params.id;
        this.userService.findById(this._id).subscribe(
          res => {
            this._user = res;
          }
        );
      }
    });
  }

  public save() {
    if (this._user.id) {
      this.userService.update(this._user).subscribe(res => {
        this.router.navigate(['/users']);
      }, err => {
        this._erreur = true;
      });
    } else {
      this.userService.create(this._user).subscribe(res => {
        this.router.navigate(['users']);
      }, err => {
        this._erreur = true;
      });
    }
  }

  public disable(): boolean {
    if (this._user.id) {
      return this._userForm.dirty && this._userForm.invalid;
      //return this.userForm.invalid;
    }
    return this._userForm.dirty && this._userForm.invalid;
   // return this._userForm.untouched || (this._pseudoCtrl.dirty && this._pseudoCtrl.invalid);
  }


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

  get userForm(): FormGroup {
    return this._userForm;
  }

  set userForm(value: FormGroup) {
    this._userForm = value;
  }

  get pseudoCtrl(): FormControl {
    return this._pseudoCtrl;
  }

  set pseudoCtrl(value: FormControl) {
    this._pseudoCtrl = value;
  }

  get prenomCtrl(): FormControl {
    return this._prenomCtrl;
  }

  set prenomCtrl(value: FormControl) {
    this._prenomCtrl = value;
  }

  get nomCtrl(): FormControl {
    return this._nomCtrl;
  }

  set nomCtrl(value: FormControl) {
    this._nomCtrl = value;
  }

  get imageProfilCtrl(): FormControl {
    return this._imageProfilCtrl;
  }

  set imageProfilCtrl(value: FormControl) {
    this._imageProfilCtrl = value;
  }
}
