import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule} from '@angular/material';
import { MembershipComponent } from './membership.component';
import { MembershipRowModule } from '../membership-row/membership-row.module';

@NgModule({
  imports: [
    CommonModule,
    MembershipRowModule,
    MatButtonModule
  ],
  declarations: [
    MembershipComponent
  ],
  exports: [
    MembershipComponent
  ]
})
export class MembershipModule { }
