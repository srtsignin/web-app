import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatOptionSelectionChange } from '@angular/material';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  fullName: string;
  roles = [];

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.subscribe({
      next: (loggedIn) => loggedIn ? this.onLogin() : this.onLogout(),
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.loggedIn = true;
    this.fullName = this.loginService.getFullName();
    this.roles = this.loginService.getUser().roles;
  }

  onLogout() {
    this.loggedIn = false;
    this.fullName = '';
    this.router.navigate(['/login']);
  }

  changeRole(role: string) {
    if (role === 'Staff') {
      this.router.navigate(['/tutor']);
    } else {
      this.router.navigate(['/' + role.toLowerCase()]);
    }
  }

}
