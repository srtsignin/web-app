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

  protected courses : string[];
  protected description : string;

  constructor(private loginService: LoginService, private activeUsersService: ActiveUsersService) { }

  ngOnInit() {
    this.courses = [""]
  }

  addCourseRow() {
    this.courses.push("");
  }

  addStudent() {
    let user = new User();
    user.name = this.loginService.getFullName();
    user.courses = this.courses.filter((v) => v != "");
    user.problemDescription = this.description;
    console.log(user);
    this.activeUsersService.addUser(user);
  }

}
