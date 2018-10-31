import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  title: string;
  content: string;
  decline: string;
  accept: string;

  constructor( private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
      this.content = data.content;
      this.decline = data.decline;
      this.accept = data.accept;
    }

  ngOnInit() {
  }

  close(accept: Boolean) {
    this.dialogRef.close(accept);
  }
}
