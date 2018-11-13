import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingRequestsComponent } from './pending-requests.component';
import { MembershipRowModule } from '../membership-row/membership-row.module';

@NgModule({
  imports: [
    CommonModule,
    MembershipRowModule
  ],
  declarations: [
    PendingRequestsComponent
  ],
  exports: [
    PendingRequestsComponent
  ]
})
export class PendingRequestsModule { }
