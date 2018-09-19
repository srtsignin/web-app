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

  getActiveUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.activeUsersUrl);
  } 

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.activeUsersUrl, user);
  }

  clearActiveUsers(): Observable<User[]> {
    return this.http.delete<User[]>(this.activeUsersUrl);
  }
}
