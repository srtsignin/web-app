import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatSelect, MatSelectModule, MatToolbarModule } from '../../../node_modules/@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatToolbarModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
