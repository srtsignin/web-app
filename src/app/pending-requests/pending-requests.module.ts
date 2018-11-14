import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule} from '@angular/material';
import { PendingRequestsComponent } from './pending-requests.component';
import { MembershipRowModule } from '../membership-row/membership-row.module';

@NgModule({
  imports: [
    CommonModule,
    MembershipRowModule,
    MatButtonModule
  ],
  declarations: [
    PendingRequestsComponent
  ],
  exports: [
    PendingRequestsComponent
  ]
})
export class PendingRequestsModule { }
