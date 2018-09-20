import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../active-users/active-users.service';
import {StudentSignInRequest} from '../model/student-sign-in-request';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  users: StudentSignInRequest[];

  constructor(private activeUsersService: ActiveUsersService) { }

  ngOnInit() {
    this.refreshActiveUsers();
  }

  clearActiveUsers() {
    this.activeUsersService.clearActiveUsers().subscribe(users => this.users = users.activeUsers);
  }

  refreshActiveUsers() {
    this.activeUsersService.getActiveUsers().subscribe(users => this.users = users.activeUsers);
  }

}
