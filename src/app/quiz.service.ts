import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { QuizCompComponent } from './quiz-comp/quiz-comp.component';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizUrl = 'http://localhost:8080/quiz/start';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getQuiz(): Observable<Quiz>{
    this.messageService.add('QuizService: fetched quiz');
    console.log('request to: ' + this.quizUrl);
    console.log(this.http.get<Quiz>('http://localhost:8080/quiz/start'));
    return this.http.get<Quiz>('http://localhost:8080/quiz/start');
  }

  private log(message: string){
    this.messageService.add(`QuizService: ${message}`);
  }


}
