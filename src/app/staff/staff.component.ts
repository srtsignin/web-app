import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { LoginService } from '../login/login.service';
import { User } from '../model/user';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: User;

  constructor(private loginService: LoginService, private dataService: DataService) {
    this.staff = this.loginService.getUser();
  }

  ngOnInit() {
  }

  exportToCSV() {
    this.dataService.getCSV(this.staff.token).subscribe(response => {
      const blob = new Blob([response], {type: 'text/csv'});
      saveAs(blob, 'srtSignInData.csv');
    });
  }

}
