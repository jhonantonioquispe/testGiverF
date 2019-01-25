import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

//importing modelo test
import { Question } from '../models/question';
import { ServiceMaker } from './../services/serviceMaker.service';


@Injectable()
export class QuestionService extends ServiceMaker<Question> {
  constructor(http: HttpClient) { 
    super(http, 'question');
  }

  getQuestions () {
    return this.getAll()
      .pipe(
        tap(questions => {console.log('questions', questions)
          return questions;
        }),
        catchError(this.handleError('getQuestions', []))
      );
  }

  saveQuestion(question): Observable<any> {
    return this.saveOne(question)
      .pipe(
        tap(question => console.log('questions', question)),
        catchError(this.handleError('saveQuestions', []))
      );
  }
}
