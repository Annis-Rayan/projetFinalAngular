import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from '../component/model/animal';
import {Lieu} from '../component/model/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  private URL: string = 'http://localhost:8080/web/rest/localisation'; // TO CHECK

  private headers: HttpHeaders;
  private options: object;

  constructor(private httpClient: HttpClient) {
  }

  private initOption() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('user') // TO CHECK
    });
    this.options = {headers: this.headers};
  }

  public findAll(): Observable<Array<Lieu>> {
    this.initOption();
    return this.httpClient.get<Array<Lieu>>(this.URL, this.options);
  }


  public findById(id: number): Observable<Lieu> {
    this.initOption();
    return this.httpClient.get<Lieu>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(lieu: Lieu): Observable<any> {
    this.initOption();
    const o: object = {
      'id': lieu.id,
      'pays': lieu.pays,
      'region': lieu.region,
      'localite': lieu.localite
    };
    console.log(o);
    return this.httpClient.put(this.URL + '/' + lieu.id, o, this.options);
  }

  public create(lieu: Lieu): Observable<any> {
    this.initOption();
    const o: object = {
      'id': lieu.id,
      'pays': lieu.pays,
      'region': lieu.region,
      'localite': lieu.localite
    };
    console.log(o);
    return this.httpClient.post(this.URL, o, this.options);
  }
}
