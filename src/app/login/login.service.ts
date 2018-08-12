import { Injectable } from '@angular/core';
import { BehaviorSubject, PartialObserver  } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private signedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  private user: RosefireUser;

  constructor() { }

  public login() {
    Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
      console.log(user);
      this.user = user;
      this.signedIn.next(true);
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
      return this.user.name;
    } else {
      throw new Error('Attempted to getFullName() when not logged in.');
    }
  }
}
