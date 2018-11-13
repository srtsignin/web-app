import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateMember(user: User) {

  }

  deleteMember(user: User) {

  }

}
