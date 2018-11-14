import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../login/login.service';
import { RolesAdapterService } from '../roles-adapter/roles-adapter.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  @Input() possibleRoles: string[];
  admin: User;
  members: User[];
  roles: string[];

  constructor(private loginService: LoginService, private rolesService: RolesAdapterService) {
    this.admin = this.loginService.getUser();
    this.refreshMembers();
  }

  ngOnInit() {
  }

  refreshMembers() {
    this.rolesService.getUsers(this.admin.token).subscribe(response => {
      this.readUserResponses(response.users);
    });
  }

  private readUserResponses(users: any[]) {
    this.members = [];
    for (let i = 0; i < users.length; i++) {
      this.members[i] = new User();
      this.members[i].username = users[i].user.username;
      this.members[i].fullname = users[i].user.name;
      this.members[i].roles = users[i].roles;
    }
  }

  editMember(user: User) {
    this.rolesService.updateUser(this.admin.token, user).subscribe(response => {
      this.updateUser(response.user);
    });
  }

  private updateUser(user: User) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].username = user.username) {
        if (user.roles.length !== 0) {
          this.members[i].roles = user.roles;
        }
      }
    }
  }

  deleteMember(user: User) {
    this.rolesService.deleteUser(this.admin.token, user).subscribe(response => {
      this.refreshMembers();
    });
  }

}
