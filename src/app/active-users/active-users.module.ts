import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersService } from './active-users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActiveUsersService
  ],
  exports: [
    ActiveUsersService
  ]
})
export class ActiveUsersModule { }
