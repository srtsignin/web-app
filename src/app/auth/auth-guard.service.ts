import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { RolesAdapterService } from '../roles-adapter/roles-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public  login: LoginService, public roles: RolesAdapterService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.expectedRole;

    if (!this.login.loggedIn()) {
      if (this.router.url !== '/login' && this.router.url !== '/registration') {
        this.router.navigate(['login']);
      }
      return of(false);
    }

    return this.roles.checkRole(expectedRole, this.login.getUser().token).pipe(
      map(response => {
        return response.isAuthorized;
      }),
      catchError(error => {
        return of(false);
      })
    );
  }
}
