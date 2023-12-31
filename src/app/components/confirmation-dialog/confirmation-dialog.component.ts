import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onConfirmClick(): void {
    // User confirmed, close the dialog with 'confirm' result
    this.dialogRef.close('confirm');
  }

  onCancelClick(): void {
    // User canceled, close the dialog with 'cancel' result
    this.dialogRef.close('cancel');
  }
}