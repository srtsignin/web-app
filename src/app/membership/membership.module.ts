import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatGridListModule
} from '@angular/material';
import { MembershipComponent } from './membership.component';
import { MembershipRowModule } from '../membership-row/membership-row.module';

@NgModule({
  imports: [
    CommonModule,
    MembershipRowModule
  ],
  declarations: [
    MembershipComponent
  ],
  exports: [
    MembershipComponent
  ]
})
export class MembershipModule { }
