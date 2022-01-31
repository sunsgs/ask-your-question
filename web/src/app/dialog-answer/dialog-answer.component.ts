import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsServiceService } from '../utils-service.service';
import { AnswersService } from '../answers.service';
import { Answer } from '../models';

@Component({
  selector: 'app-dialog-answer',
  templateUrl: './dialog-answer.component.html',
  styleUrls: ['./dialog-answer.component.scss'],
})
export class DialogAnswerComponent implements OnInit {
  question_id = 0;
  question = '';
  answers?: Answer[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utilsService: UtilsServiceService,
    private answerService: AnswersService
  ) {
    this.question = data.question;
    this.question_id = data.question_id;
  }

  ngOnInit() {
    this.answerService.getAnswers(this.question_id).subscribe((result) => {
      const res = result.sort(
        (a, b) => +new Date(b.last_update) - +new Date(a.last_update)
      );
      this.answers = [...res];
    });
  }
}
