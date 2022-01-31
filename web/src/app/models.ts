export interface DataDialog {
  username: string;
  question: string;
}

export interface Question {
  question_id: number;
  username: string;
  question: string;
  last_update: Date;
}

export interface Answer {
  question_id: number;
  answer_id: number;
  username: string;
  answer: string;
  last_update: Date;
}

export interface AnswerDialog {
  question_id: number;
  username: string;
  answer: string;
}
