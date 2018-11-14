import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ApiModule } from '../api/api.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ApiModule
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
