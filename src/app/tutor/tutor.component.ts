import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../active-users.service';
import { User } from '../user';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  users: User[];

  constructor(private activeUsersService: ActiveUsersService) { }

  ngOnInit() {
    let user = new User();
    user.name = "Maya Holeman";
    user.courses = ["CSSE477", "CSSE479"];
    user.problemDescription = "i need help";
    this.users = [user, user];
  }

  clearActiveUsers() {
    this.activeUsersService.clearActiveUsers().subscribe(users => this.users = users);
    console.log("clicked clear");
  }

  refreshActiveUsers() {
    this.activeUsersService.getActiveUsers().subscribe(users => this.users = users);
    console.log(this.users);
  }

}
