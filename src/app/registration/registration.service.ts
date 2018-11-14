import { Injectable } from '@angular/core';
import { RosefireAdapterService } from '../rosefire-adapter/rosefire-adapter.service';
import { Observable, BehaviorSubject, PartialObserver  } from 'rxjs';
import { RegisterService } from '../register/register.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registered: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  private response;

  constructor(private rosefireAdapterService: RosefireAdapterService,
    private registerService: RegisterService) { }

  public signIn() {
    this.rosefireAdapterService.register().then((authToken) => {
      return this.registerService.register(authToken).subscribe(response => {
        this.response = response.data;
        this.registered.next(response.success);
      });
    });
  }

  public subscribe(observer: PartialObserver<Boolean>) {
    this.registered.subscribe(observer);
  }

  public getFullName(): string {
    if (this.registered.getValue()) {
      return this.response.name;
    } else {
      throw new Error('Attempted to getFullName() when not registered.');
    }
  }
}
