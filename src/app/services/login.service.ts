import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../component/model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  public login(login: Login): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${login.login}:${login.password}`)
    });
    const log = {
      'login': login.login,
      'password': login.password
    };
    console.log(log);
    return this.http.post('http://localhost:8080/web/rest/login', log, {headers: headers});
  }
}
