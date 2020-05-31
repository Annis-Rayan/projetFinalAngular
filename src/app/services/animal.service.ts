import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../component/model/user';
import {Animal} from '../component/model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private URL: string = 'http://localhost:8080/web/rest/animaux'; // TO CHECK

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

  public findAll(): Observable<Array<Animal>> {
    this.initOption();
    return this.httpClient.get<Array<Animal>>(this.URL, this.options);
  }

  public findById(id: number): Observable<Animal> {
    this.initOption();
    return this.httpClient.get<Animal>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(animal: Animal): Observable<any> {
    this.initOption();
    const o: object = {
      'id': animal.id,
      'nomCourant': animal.nomCourant,
      'nomLatin': animal.nomLatin,
      'image': animal.image,
      'description': animal.description
    };
    return this.httpClient.put(this.URL + '/' + animal.id, o, this.options);
  }

  public create(animal: Animal): Observable<any> {
    this.initOption();
    const o: object = {
      'id': animal.id,
      'nomCourant': animal.nomCourant,
      'nomLatin': animal.nomLatin,
      'image': animal.image,
      'description': animal.description
    };
    return this.httpClient.post(this.URL, o, this.options);
  }
}
