import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../active-users/active-users.service';
import { User } from '../model/user';
import { Student } from '../model/student';
import { Course } from '../model/course';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  tutor: User;
  students: Student[];
  deletionError: string;

  constructor(private activeUsersService: ActiveUsersService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.tutor = this.loginService.getUser();
    this.students = [];
    this.refreshActiveUsers();
  }

  refreshActiveUsers() {
    this.deletionError = '';
    this.students.length = 0;
    this.activeUsersService.getActiveUsers(this.tutor).subscribe(students => {
      for (let i = 0; i < students.data.length; i++) {
        const courses = [];
        const s = students.data[i];
        for (let j = 0; j < s.courses.length; j++) {
          courses.push(new Course(s.courses[j].name,
                                    s.courses[j].department,
                                    s.courses[j].number,
                                    s.courses[j].queryString));
        }
        const student = new Student(s.checkInTime,
                                      courses,
                                      s.name,
                                      s.problemDescription,
                                      s.username);
        this.students.push(student);
      }
    });
  }

  checkoffUser(student: Student) {
    this.deletionError = '';
    this.activeUsersService.deleteUser(this.tutor, student).subscribe(response => {
      if (response.success) {
        this.refreshActiveUsers();
      } else {
        this.deletionError = 'There was an error deleting ' + student.name;
      }
    });
  }

}
