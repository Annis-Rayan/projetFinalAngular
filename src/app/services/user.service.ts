import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../component/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:8080/web/rest/users'; // TO CHECK

  private headers: HttpHeaders;
  private options: object;

  constructor(private httpClient: HttpClient) {
  }

  private initOption() {
    //this.headers = new HttpHeaders({
    //  'Content-Type': 'application/json',
    //  'Authorization': 'Basic ' + sessionStorage.getItem('user') // TO CHECK
   // });
   // this.options = {headers: this.headers};
  }

  public findAll(): Observable<Array<User>> {
    this.initOption();
    return this.httpClient.get<Array<User>>(this.URL, this.options);
  }

  public findById(id: number): Observable<User> {
    this.initOption();
    return this.httpClient.get<User>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(user: User): Observable<any> {
    this.initOption();
    const o: object = {
      'id': user.id,
      'pseudo': user.pseudo,
      'prenom': user.prenom,
      'nom': user.nom,
      'imageProfil': user.imageProfil
    };
    return this.httpClient.put(this.URL + '/' + user.id, o, this.options);
  }

  public create(user: User): Observable<any> {
    this.initOption();
    const o: object = {
      'id': user.id,
      'pseudo': user.pseudo,
      'prenom': user.prenom,
      'nom': user.nom,
      'imageProfil': user.imageProfil
    };
    return this.httpClient.post(this.URL, o, this.options);
  }

  public checkPseudo(pseudo: string): Observable<any> {
    this.initOption();
    return this.httpClient.get(`${this.URL}/nom/${pseudo}`, this.options);
  }

  public findByPseudo(pseudo: string): Observable<User>{
    this.initOption();
    return this.httpClient.get<User>(this.URL + '/' + pseudo, this.options);
  }
}
