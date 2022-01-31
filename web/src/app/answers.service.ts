import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer, AnswerDialog } from './models';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  constructor(private http: HttpClient) {}

  getAnswers(questionId: number) {
    return this.http.get<Answer[]>(
      `http://localhost:4000/answers?question_id=${questionId}`
    );
  }
  postAnswer(data: AnswerDialog) {
    return this.http.post('http://localhost:4000/answers', {
      username: data.username,
      question_id: data.question_id,
      answer: data.answer,
    });
  }
}
