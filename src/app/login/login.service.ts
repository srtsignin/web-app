import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login() {
    Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
      console.log(user);
    });
  }
}
