import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { ActiveUsersService } from '../active-users/active-users.service';
import { StudentSignInRequest } from '../model/student-sign-in-request';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  protected courses: string[];
  protected description: string;
  protected courseMessage: string;

  constructor(private loginService: LoginService,
    private activeUsersService: ActiveUsersService,
    private router: Router) { }

  ngOnInit() {
    this.courses = [''];
  }

  addCourseRow() {
    this.courses.push('');
  }

  addStudent() {
    const studentSignInRequest = new StudentSignInRequest();
    studentSignInRequest.name = this.loginService.getFullName();
    studentSignInRequest.courses = this.courses.filter((v) => v !== '');
    studentSignInRequest.problemDescription = this.description;
    if (studentSignInRequest.courses.length > 0) {
      this.activeUsersService.addUser(studentSignInRequest).subscribe(
        next => {
          console.log(next);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      this.courseMessage = 'Must have at least one course filled out.';
    }
  }

}
