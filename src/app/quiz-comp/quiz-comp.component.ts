import { Component, OnInit } from '@angular/core';
import {Quiz} from '../quiz';
import {QuizService} from '../quiz.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-quiz-comp',
  templateUrl: './quiz-comp.component.html',
  styleUrls: ['./quiz-comp.component.css']
})
export class QuizCompComponent implements OnInit {
  quiz!: Quiz;

  constructor(private quizService: QuizService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getQuiz();
    console.log(this.quiz);
  }

  getQuiz(): void {
    this.quizService.getQuiz().subscribe(result => this.quiz = result);
  }

}
