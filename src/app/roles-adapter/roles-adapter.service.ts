import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesResponse } from '../model/roles-response';
import { UserBuilder } from '../model/user-builder';
import { API_URL } from '../api/api.module';

@Injectable()
export class RolesAdapterService {

  private API_URL;
  private rolesUrl = '/role/roles';

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url;
  }

  public populateRoles(userBuilder: UserBuilder, token: string): Promise<UserBuilder> {
    return new Promise((resolve, reject) => {
      this.getRoles(token).subscribe((rolesResponse: any) => {
        resolve(userBuilder.roles(rolesResponse.roles));
      }, reject);
    });
  }

  private getRoles(token: string): Observable<any> {
    return this.http.get(this.API_URL + this.rolesUrl, {
      headers: new HttpHeaders({'AuthToken': token})
    });
  }

}
