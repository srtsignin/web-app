import { Injectable } from '@angular/core';
import { UserBuilder } from '../model/user-builder';
import 'rosefire';
declare var Rosefire;

@Injectable()
export class RosefireAdapterService {

  constructor() { }

  public signIn(): Promise<[UserBuilder, string]> {
    return new Promise((resolve, reject) => {
      Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
        if (err) {
          reject(err);
        }
        resolve([new UserBuilder().token(user.token).fullname(user.name).username(user.username), user.token]);
      });
    });
  }

  public register(): Promise<string> {
    return new Promise((resolve, reject) => {
      Rosefire.signIn('ed282a1e-09d5-4511-a5ab-639280ea16fd', (err, user) => {
        if (err) {
          reject(err);
        }
        resolve(user.token);
      });
    });
  }
}
