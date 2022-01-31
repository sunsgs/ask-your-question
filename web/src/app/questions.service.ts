import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataDialog, Question } from './models';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<Question[]>('http://localhost:4000/questions');
  }
  postQuestion(data: DataDialog) {
    return this.http.post('http://localhost:4000/questions', {
      username: data.username,
      question: data.question,
    });
  }
}
