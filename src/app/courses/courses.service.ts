import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { API_URL } from '../api/api.module';

@Injectable()
export class CoursesService {

  private API_URL;
  private activeUrl = '/active';

  constructor(private http: HttpClient, @Inject(API_URL) url: string) {
    this.API_URL = url;
  }

  getCourses(user: User, search: string): Observable<any> {
    return this.http.get(this.API_URL + this.activeUrl + '/courses', {
      params: (search ? new HttpParams().set('search', search) :
        new HttpParams().set('search', '')),
      headers: new HttpHeaders({'AuthToken': user.token})
    });
  }

  getClasses(user: User): Observable<any> {
    return this.http.get(this.API_URL + this.activeUrl + '/classes', {
      headers: new HttpHeaders({'AuthToken': user.token}) });
  }
}
