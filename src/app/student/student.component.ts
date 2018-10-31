import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { ActiveUsersService } from '../active-users/active-users.service';
import { CoursesService } from '../courses/courses.service';
import { StudentSignInRequest } from '../model/student-sign-in-request';
import { Course } from '../model/course';
import { User } from '../model/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: User;

  studentCourses: Course[];
  studentCoursesChecked: boolean[];
  courses: Course[];

  description: string;
  courseMessage: string;
  options: Course[] = [];

  constructor(private loginService: LoginService,
    private activeUsersService: ActiveUsersService,
    private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.studentCourses = [];
    this.studentCoursesChecked = [];
    this.courses = [new Course('', '', '', '')];

    this.student = this.loginService.getUser();

    // TODO: put back once StudentToken is changed to AuthToken
    // this.coursesService.getClasses(this.student).subscribe(
    //   next => {
    //     this.studentCourses = next.data;
    //     this.studentCoursesChecked = new Array(next.data.length);
    //     for (let i = 0; i < this.studentCoursesChecked.length; ++i) {
    //       this.studentCoursesChecked[i] = false;
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //     this.studentCourses = [];
    //   }
    // );
  }

  addCourseRow() {
    this.courses.push(new Course('', '', '', ''));
  }

  addStudent() {
    const studentSignInRequest = new StudentSignInRequest();
    studentSignInRequest.problemDescription = this.description;
    let num = 0;
    for (let i = 0; i < this.courses.length; i++) {
      this.courses[i].updateDetails();
      num++;
    }
    studentSignInRequest.courses = this.courses.filter((c) => c.number !== '');
    // TODO: put back once StudentToken is changed to AuthToken
    // for (let i = 0; i < this.studentCoursesChecked.length; ++i) {
    //   if (this.studentCoursesChecked[i]) {
    //     studentSignInRequest.courses.push(this.studentCourses[i]);
    //   }
    // }

    if (studentSignInRequest.courses.length > 0) {
      this.activeUsersService.addUser(this.student, studentSignInRequest).subscribe(
        next => {
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
    } else {
      // this.courseMessage = 'Must have at least one course filled out.';
    }
  }

  searchCourses(search?: string) {
    this.options = [];
    this.coursesService.getCourses(this.student, search).subscribe(
      courses => {
        for (let j = 0; j < courses.data.length; j++) {
          this.options.push(new Course(courses.data[j].name,
                                        courses.data[j].department,
                                        courses.data[j].number,
                                        courses.data[j].queryString));
        }
      },
      error => console.log(error)
    );
  }
}
