import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAddAnswerComponent } from './dialog-add-answer/dialog-add-answer.component';
import { DialogQuestionComponent } from './dialog-question/dialog-question.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsServiceService {
  constructor(
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialog
  ) {}

  openSnackBar(message: string, action = 'close') {
    this._snackBar.open(message, action, { duration: 5000 });
  }

  openAddAnswerDialog(question: string, username: string, question_id: number) {
    this.dialog
      .open(DialogAddAnswerComponent, {
        width: '70vw',
        data: {
          question,
          username,
          question_id,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.dialogRef.closeAll();
      });
  }
}
