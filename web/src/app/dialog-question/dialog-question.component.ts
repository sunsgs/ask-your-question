import { QuestionsService } from './../questions.service';
import { UtilsServiceService } from './../utils-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.scss'],
})
export class DialogQuestionComponent implements OnInit {
  questionFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    question: new FormControl('', Validators.required),
  });

  constructor(
    private utilsService: UtilsServiceService,
    private questionService: QuestionsService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {}
  open() {
    this.utilsService.openSnackBar('failed');
  }

  addQuestion() {
    this.questionService
      .postQuestion({
        username: this.questionFormGroup.get('username')?.value || '',
        question: this.questionFormGroup.get('question')?.value || '',
      })
      .subscribe(() => {
        this.dialogRef.closeAll();
      });
  }
}
