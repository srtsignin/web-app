import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';
import { MatButtonModule, MatCardModule, MatListModule, MatInputModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    StudentComponent
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
