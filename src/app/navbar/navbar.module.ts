import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatToolbarModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

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
