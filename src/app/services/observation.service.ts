import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lieu} from '../component/model/lieu';
import {Observation} from '../component/model/observation';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  private URL: string = 'http://localhost:8080/web/rest/observation'; // TO CHECK

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

  public findAll(): Observable<Array<Observation>> {
    this.initOption();
    return this.httpClient.get<Array<Observation>>(this.URL, this.options);
  }

  public findById(id: number): Observable<Observation> {
    this.initOption();
    return this.httpClient.get<Observation>(this.URL + '/' + id, this.options);
  }

  public delete(id: number): Observable<any> {
    this.initOption();
    return this.httpClient.delete(this.URL + '/' + id, this.options);
  }

  public update(observation: Observation): Observable<any> {
    this.initOption();
    const o: object = {
      'id': observation.id,
      'dateObservation': observation.dateObservation,
      'nombreObservations': observation.nombreObservations,
      'description': observation.description
    };
    return this.httpClient.put(this.URL + '/' + observation.id, o, this.options);
  }

  public create(observation: Observation): Observable<any> {
    this.initOption();
    const o: object = {
      'id': observation.id,
      'dateObservation': observation.dateObservation,
      'nombreObservations': observation.nombreObservations,
      'description': observation.description
    };
    return this.httpClient.post(this.URL, o, this.options);
  }
}
