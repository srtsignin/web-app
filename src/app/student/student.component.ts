import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  protected courseMessage : string;

  constructor(private loginService: LoginService,
    private activeUsersService: ActiveUsersService,
    private router: Router) { }

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
    if (user.courses.length > 0) {
      this.activeUsersService.addUser(user).subscribe(
        next => {
          console.log(next);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      this.courseMessage = "Must have at least one course filled out.";
      console.log("not valid");
    }
  }

}
