import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';
import { MembershipRowComponent } from './membership-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  declarations: [
    MembershipRowComponent
  ],
  exports: [
    MembershipRowComponent
  ]
})
export class MembershipRowModule { }
