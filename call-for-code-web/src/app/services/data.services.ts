import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getFromUrl(url: string) {
    console.log(`${this.baseUrl}/nlu-url?text=${url}`);
    return this.http.get(`${this.baseUrl}/nlu-url?text=${url}`);
  }

}
