import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ActiveUsersService } from '../active-users.service';
import { User } from '../user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {  
  protected loggedIn: boolean;
  protected courses : string[];
  protected description : string;

  constructor(private loginService: LoginService, private activeUsersService: ActiveUsersService) {
    this.loginService.subscribe({
      next: (loggedIn) => loggedIn ? this.loggedIn = true : this.loggedIn = false,
    });
  }

  ngOnInit() {
    this.courses = [""]
  }

  addCourseRow() {
    this.courses.push("");
  }

  addStudent() {
    let user = new User();
    if (this.loggedIn) {
       user.name = this.loginService.getFullName();
    }
    user.name = "Maya Holeman";
    user.courses = this.courses.filter((v) => v != "");
    user.problemDescription = this.description;
    console.log(user);
    this.activeUsersService.addUser(user);
  }

}
