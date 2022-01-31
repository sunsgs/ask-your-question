import { DialogQuestionComponent } from './dialog-question/dialog-question.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions.service';
import { Question } from './models';
import { UtilsServiceService } from './utils-service.service';
import { DialogAnswerComponent } from './dialog-answer/dialog-answer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questions?: Question[];

  constructor(
    public dialog: MatDialog,
    private questionService: QuestionsService,
    public utilsService: UtilsServiceService
  ) {}
  openAnswerDialog(question: string, question_id: number) {
    this.dialog.open(DialogAnswerComponent, {
      data: {
        question,
        question_id,
      },
    });
  }
  ngOnInit() {
    this.getData();
  }

  openQuestionDialog() {
    this.dialog
      .open(DialogQuestionComponent, {
        width: '70vw',
      })
      .afterClosed()
      .subscribe(() => {
        this.getData();
      });
  }

  getData() {
    this.questionService.getQuestions().subscribe((result) => {
      const res = result.sort(
        (a, b) => +new Date(b.last_update) - +new Date(a.last_update)
      );
      this.questions = [...res];
    });
  }
}
