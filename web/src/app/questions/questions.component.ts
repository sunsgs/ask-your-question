import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnswerComponent } from '../dialog-answer/dialog-answer.component';
import { UtilsServiceService } from '../utils-service.service';
import { Question } from '../models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions?: Question[];
  constructor() {}

  ngOnInit(): void {}
}
