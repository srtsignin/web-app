import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBuilder } from '../model/user-builder';
import { API_URL } from '../api/api.module';
import { User } from '../model/user';

@Injectable()
export class RolesAdapterService {

  private API_URL;

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url + '/role';
  }

  public populateRoles(userBuilder: UserBuilder, token: string): Promise<UserBuilder> {
    return new Promise((resolve, reject) => {
      this.getRoles(token).subscribe((rolesResponse: any) => {
        resolve(userBuilder.roles(rolesResponse.roles));
      }, reject);
    });
  }

  private getRoles(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/roles', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public getAllRoles(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/all_roles', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public checkRole(role: string, token: string): Observable<any> {
    return this.http.get(this.API_URL + '/', {
      headers: new HttpHeaders({'AuthToken': token}),
      params: new HttpParams().set('role', role)
    });
  }

  public getUsers(token: string): Observable<any> {
    return this.http.get(this.API_URL + '/users', {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public updateUser(token: string, user: User): Observable<any> {
    const body = {};
    body['username'] = user.username;
    body['name'] = user.fullname;
    body['roles'] = user.roles;
    return this.http.post(this.API_URL + '/users', body, {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

  public deleteUser(token: string, user: User): Observable<any> {
    const requestBody = {};
    requestBody['username'] = user.username;
    requestBody['name'] = user.fullname;
    const httpOptions = {
      headers: new HttpHeaders({'AuthToken': token}),
      body: requestBody
    };
    return this.http.delete(this.API_URL + '/users', httpOptions);
  }

}
