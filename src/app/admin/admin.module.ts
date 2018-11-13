import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatBadgeModule,
  MatTabsModule
} from '@angular/material';
import { AdminComponent } from './admin.component';
import { MembershipModule } from '../membership/membership.module';
import { PendingRequestsModule } from '../pending-requests/pending-requests.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatTabsModule,
    MembershipModule,
    PendingRequestsModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
