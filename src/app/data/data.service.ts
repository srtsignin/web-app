import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../api/api.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL;

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url + '/data';
  }

  getCSV(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/csv', {
      headers: new HttpHeaders().set('AuthToken', token),
      responseType: 'text'
    });
  }
}
