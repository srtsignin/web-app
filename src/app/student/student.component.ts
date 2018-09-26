import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { ActiveUsersService } from '../active-users/active-users.service';
import { CoursesService } from '../courses/courses.service';
import { StudentSignInRequest } from '../model/student-sign-in-request';
import { User } from '../model/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  protected studentCourses: string[];
  protected studentCoursesChecked: boolean[];
  protected courses: string[];
  protected searchMode: boolean;
  
  protected description: string;
  protected courseMessage: string;
  protected options: string[] = [];

  constructor(private loginService: LoginService,
    private activeUsersService: ActiveUsersService,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.studentCourses = [];
    this.studentCoursesChecked = [];
    this.courses = [''];
    this.searchMode = true;

    const user = new User();
    user.token = "token";
    this.coursesService.getClasses(user).subscribe(
      next => {
        this.studentCourses = next.data;
        this.studentCoursesChecked = new Array(next.data.length);
        for (var i = 0; i < this.studentCoursesChecked.length; ++i) {
          this.studentCoursesChecked[i] = false; 
        }
      },
      error => {
        console.log(error)
        this.studentCourses = [];
      }
    );
  }

  addCourseRow() {
    this.courses.push('');
  }

  addStudent() {
    const studentSignInRequest = new StudentSignInRequest();
    studentSignInRequest.name = this.loginService.getFullName();
    studentSignInRequest.problemDescription = this.description;
    if (this.searchMode) {
      studentSignInRequest.courses = this.courses.filter((v) => v !== '');
    } else {
      studentSignInRequest.courses = [];
      for (var i = 0; i < this.studentCoursesChecked.length; ++i) {
        if (this.studentCoursesChecked[i]) {
          studentSignInRequest.courses.push(this.studentCourses[i]);
        }
      }
    }

    if (studentSignInRequest.courses.length > 0) {
      this.activeUsersService.addUser(studentSignInRequest).subscribe(
        next => {
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      this.courseMessage = 'Must have at least one course filled out.';
    }
  }

  searchCourses(search: string) {
    this.coursesService.getCourses(search).subscribe(
      next => {
        this.options = next.data;
      },
      error => console.log(error)
    );
  }

  switchSelectionMode() {
    this.searchMode = !this.searchMode;
  }
}
