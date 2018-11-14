import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../api/api.module';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private API_URL;

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url + '/register';
  }

  public register(token: string): Observable<any> {
    console.log(token);
    return this.http.post(this.API_URL + '/registration', '', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public getAllPending(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/allPending', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public getCount(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/count', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public addMember(token: string, user: User): Observable<any> {
    const body = {};
    body['username'] = user.username;
    body['roles'] = user.roles;
    return this.http.post(this.API_URL + '/membershipDecision',
      body,
      {
        headers: new HttpHeaders({'AuthToken': token})
      }
    );
  }

  public deleteMember(token: string, user: User): Observable<any> {
    const requestBody = {};
    requestBody['username'] = user.username;
    const httpOptions = {
      headers: new HttpHeaders({'AuthToken': token}),
      body: requestBody
    };
    return this.http.delete(this.API_URL + '/membershipDecision', httpOptions);
  }
}
