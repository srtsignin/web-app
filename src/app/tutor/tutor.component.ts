import { Component, OnInit } from '@angular/core';
import { ActiveUsersService } from '../active-users/active-users.service';
import { User } from '../model/user';
import { Student } from '../model/student';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  tutor: User;
  students: Student[];

  constructor(private activeUsersService: ActiveUsersService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.tutor = this.loginService.getUser();
    this.refreshActiveUsers();
  }

  refreshActiveUsers() {
    this.activeUsersService.getActiveUsers(this.tutor).subscribe(students => this.students = students.data);
  }

  checkoffUser(student: User) {
    this.activeUsersService.deleteUser(this.tutor, student);
  }

}
