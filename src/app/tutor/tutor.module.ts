import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import { TutorComponent } from './tutor.component';
import { StudentRowModule } from '../student-row/student-row.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    StudentRowModule
  ],
  declarations: [
    TutorComponent
  ],
  exports: [
    TutorComponent
  ]
})
export class TutorModule { }
