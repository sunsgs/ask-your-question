import { AnswersService } from './../answers.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataDialog } from '../models';
import { UtilsServiceService } from '../utils-service.service';

@Component({
  selector: 'app-dialog-add-answer',
  templateUrl: './dialog-add-answer.component.html',
  styleUrls: ['./dialog-add-answer.component.scss'],
})
export class DialogAddAnswerComponent implements OnInit {
  addAnswerFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  });
  username = '';
  question = '';
  question_id = 0;
  answer = '';
  constructor(
    public utilsService: UtilsServiceService,
    private answerService: AnswersService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialog
  ) {
    this.question_id = dialogData.question_id;
    this.question = dialogData.question;
  }

  ngOnInit(): void {}

  addAnswer() {
    this.answer = this.addAnswerFormGroup.get('answer')?.value;
    this.username = this.addAnswerFormGroup.get('username')?.value;

    this.answerService
      .postAnswer({
        username: this.username,
        question_id: this.question_id,
        answer: this.answer,
      })
      .subscribe(() => this.dialogRef.closeAll());
  }
}
