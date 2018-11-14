import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login/login.service';
import { RegisterService } from '../register/register.service';
import { User } from '../model/user';
import { RolesAdapterService } from '../roles-adapter/roles-adapter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pendingCount: number;
  admin: User;
  roles: string[];

  constructor(private loginService: LoginService,
    private registerService: RegisterService,
    private rolesService: RolesAdapterService) {
    this.admin = this.loginService.getUser();
    this.updatePendingRequestsCount();

    this.roles = [];
    this.rolesService.getAllRoles(this.admin.token).subscribe(response => {
      for (let i = 0; i < response.roles.length; i++) {
        this.roles[i] = response.roles[i];
      }
    });
  }

  ngOnInit() {
  }

  updatePendingRequestsCount() {
    this.registerService.getCount(this.admin.token).subscribe(response => {
      if (response.success) {
        this.pendingCount = response.data;
      }
    });
  }

  copyRegistrationLink() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', window.location.origin + '/registration');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}
