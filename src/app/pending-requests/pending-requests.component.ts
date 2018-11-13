import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  acceptRequest(user: User) {

  }

  removeRequest(user: User) {

  }

}
