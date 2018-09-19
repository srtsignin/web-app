import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {
  
  activeUsersUrl = 'https://srtsign.in/api/active-users';

  constructor(private http: HttpClient) { }

  getActiveUsers(): Observable<any> {
    return this.http.get(this.activeUsersUrl);
  } 

  addUser (user: User): Observable<any> {
    return this.http.post(this.activeUsersUrl, JSON.stringify(user));
  }

  clearActiveUsers(): Observable<any> {
    return this.http.delete(this.activeUsersUrl);
  }
}
