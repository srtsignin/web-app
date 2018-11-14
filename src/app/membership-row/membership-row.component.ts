import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-membership-row',
  templateUrl: './membership-row.component.html',
  styleUrls: ['./membership-row.component.css']
})
export class MembershipRowComponent implements OnInit {

  @Input() accept: string;
  @Input() decline: string;
  @Input() confirm: string;
  @Input() user: User;
  @Input() possibleRoles: string[];
  checkedRoles: boolean[];
  confirmDelete: boolean;

  @Output() confirmEvent = new EventEmitter();
  @Output() declineEvent = new EventEmitter();

  constructor() {  }

  ngOnInit() {
    this.checkedRoles = new Array(this.possibleRoles.length);
    for (let i = 0; i < this.checkedRoles.length; ++i) {
      this.checkedRoles[i] = this.user.roles.includes(this.possibleRoles[i]);
    }

    this.confirmDelete = false;
  }

  declineRow() {
    if (this.confirm == null || this.confirmDelete) {
      this.declineEvent.emit(this.user);
    } else {
      this.confirmDelete = true;
    }
  }

  confirmRow() {
    this.user.roles = [];
    for (let i = 0; i < this.checkedRoles.length; ++i) {
      if (this.checkedRoles[i]) {
        this.user.roles.push(this.possibleRoles[i]);
      }
    }
    this.confirmEvent.emit(this.user);
  }

}
