import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../component/model/login';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {

  }

  public inscription(login: Login): Observable<any> {
    const o = {
      login: login.login,
      password: login.password
    };
    return this.http.post('http://localhost:8080/web/rest/inscription', o);
  }

  public available(login: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8080/web/rest/inscription/' + login);
  }
}
