import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent implements OnInit {

  @Input() student: Student;
  finishedSession: boolean;
  @Output() checkOffEvent = new EventEmitter();

  constructor() {
    this.finishedSession = false;
  }

  finishSession() {
    if (this.finishedSession) {
      this.checkOffEvent.emit(this.student);
    } else {
      this.finishedSession = true;
    }
  }

  ngOnInit() {  }

}
