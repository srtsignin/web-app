import { Injectable } from '@angular/core';
import { BehaviorSubject, PartialObserver  } from '../../../node_modules/rxjs';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { RosefireAdapterService } from '../rosefire-adapter/rosefire-adapter.service';
import { UserBuilder } from '../model/user-builder';
import { User } from '../model/user';
import { RolesAdapterService } from '../roles-adapter/roles-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private signedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  private user: User;

  constructor(private rosefireAdapterService: RosefireAdapterService,
    private rolesAdapterService: RolesAdapterService) { }

  public login() {
    this.rosefireAdapterService.signIn().then(([userBuilder, rosefireToken]) => {
      return this.rolesAdapterService.populateRoles(userBuilder, rosefireToken);
    }).then((userBuilder: UserBuilder) => {
      this.user = userBuilder.build();
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
      return this.user.fullname;
    } else {
      throw new Error('Attempted to getFullName() when not logged in.');
    }
  }
}
