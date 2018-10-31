import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule} from '@angular/material';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule { }
