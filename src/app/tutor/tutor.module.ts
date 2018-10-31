import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import { DialogComponent } from '../dialog/dialog.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  MatDialogModule
} from '@angular/material';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    DialogModule
  ],
  declarations: [
    TutorComponent
  ],
  exports: [
    TutorComponent
  ],
  entryComponents: [DialogComponent]
})
export class TutorModule { }
