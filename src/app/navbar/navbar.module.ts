import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
