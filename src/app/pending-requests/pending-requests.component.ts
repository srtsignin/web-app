import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { RegisterService } from '../register/register.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  @Input() possibleRoles: string[];
  admin: User;
  @Output() resolveEvent = new EventEmitter();
  pendingRequests: User[];

  constructor(private loginService: LoginService, private registerService: RegisterService) {
    this.admin = this.loginService.getUser();
    this.refreshPendingRequests();
  }

  ngOnInit() {
  }

  refreshPendingRequests() {
    this.pendingRequests = [];
    this.registerService.getAllPending(this.admin.token).subscribe(response => {
      if (response.success) {
        for (let i = 0; i < response.data.length; i++) {
          this.pendingRequests[i] = new User();
          this.pendingRequests[i].username = response.data[i].username;
          this.pendingRequests[i].fullname = response.data[i].name;
          this.pendingRequests[i].token = response.data[i].id;
          this.pendingRequests[i].roles = [];
        }
      }
    });
    this.resolveEvent.emit();
  }

  acceptRequest(user: User) {
    this.registerService.addMember(this.admin.token, user).subscribe(response => {
      if (response.success) {
        this.resolveEvent.emit();
        this.refreshPendingRequests();
      }
    });
  }

  removeRequest(user: User) {
    this.registerService.deleteMember(this.admin.token, user).subscribe(response => {
      if (response.success) {
        this.resolveEvent.emit();
        this.refreshPendingRequests();
      }
    });
  }

}
