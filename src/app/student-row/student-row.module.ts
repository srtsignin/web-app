import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatExpansionModule,
  MatGridListModule
} from '@angular/material';
import { StudentRowComponent } from './student-row.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule
  ],
  declarations: [
    StudentRowComponent
  ],
  exports: [
    StudentRowComponent
  ]
})
export class StudentRowModule { }
