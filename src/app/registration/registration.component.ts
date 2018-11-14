import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registered: boolean;
  successMessage: string;

  constructor(private registrationService: RegistrationService) {
    this.notRegistered();
  }

  ngOnInit() {
  }

  public handleSignIn() {
    this.registrationService.subscribe({
      next: (loggedIn) => loggedIn ? this.onRegister() : this.notRegistered(),
    });
    this.registrationService.signIn();
  }

  private onRegister() {
    this.registered = true;
    this.successMessage = this.registrationService.getFullName() + ' sucessfully registered.';
  }

  private notRegistered() {
    this.registered = false;
  }

}
