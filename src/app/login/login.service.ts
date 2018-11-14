import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, PartialObserver  } from 'rxjs';

import { RosefireAdapterService } from '../rosefire-adapter/rosefire-adapter.service';
import { RolesAdapterService } from '../roles-adapter/roles-adapter.service';
import { UserBuilder } from '../model/user-builder';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private signedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  private user: User;

  constructor(private rosefireAdapterService: RosefireAdapterService,
    private rolesAdapterService: RolesAdapterService,
    private router: Router) { }

  public login() {
    this.rosefireAdapterService.signIn().then(([userBuilder, authToken]) => {
      return this.rolesAdapterService.populateRoles(userBuilder, authToken);
    }).then((userBuilder: UserBuilder) => {
      this.user = userBuilder.build();
      this.signedIn.next(true);
      if (this.user.roles.includes('Admin')) {
        this.router.navigate(['/admin']);
      } else if (this.user.roles.includes('Staff')) {
        this.router.navigate(['/staff']);
      } else if (this.user.roles.includes('Tutor')) {
        this.router.navigate(['/tutor']);
      } else {
        this.router.navigate(['/student']);
      }
    });
  }

  public logout() {
    this.user = null;
    this.signedIn.next(false);
  }

  public subscribe(observer: PartialObserver<Boolean>) {
    this.signedIn.subscribe(observer);
  }

  public getFullName(): string {
    if (this.signedIn.getValue()) {
      return this.user.fullname;
    } else {
      throw new Error('Attempted to getFullName() when not logged in.');
    }
  }

  public isTutor(): boolean  {
    if (this.signedIn.getValue()) {
      return this.user.roles.includes('Tutor');
    } else {
      throw new Error('Attempted check isTutor() when not logged in.');
    }
  }

  public getUser(): User {
    if (this.signedIn.getValue()) {
      return this.user;
    } else {
      throw new Error('Attempted to getUser() when not logged in.');
    }
  }

  public loggedIn(): boolean {
    return this.signedIn.getValue().valueOf();
  }
}
