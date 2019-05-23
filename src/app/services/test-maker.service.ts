import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { FullServiceMaker } from './fullServiceMaker.service';
//importing model
import { Test } from '../models/test';

@Injectable()
export class TestMakerService extends FullServiceMaker<Test> {
  constructor(http: HttpClient) {
    super(http, 'test',['question']);    
  }

  getTests() {
    return this.getAll()
      .pipe(
        tap(questionsByTest => {console.log('questionsByTest', questionsByTest)
          return questionsByTest;
        }),
        catchError(this.handleError('getQuestions', []))
      );
  }
  saveTests(test) {
    console.log("trying to save", test);
    return this.saveOne(test)
      .pipe(
        tap(test => console.log('tests', test)),
        catchError(this.handleError('getTests', []))
      );
  }

  getQuestionsByTestId (testId:string){
    return this.childs['question'].getAllRelationedByParentId(testId)
      .pipe(
        tap(questionsByTest => {console.log('questionsByTest', questionsByTest)
          return questionsByTest;
        }),
        catchError(this.handleError('getQuestions', []))
      );
  }

  getQuestionByTest(testId:string, questionId:string) {    
    return this.childs['question'].getOneRelationedByParentId(testId, questionId)
      .pipe(
        tap(question => console.log('question', question)),
        catchError(this.handleError('getquestions', []))
      );
  }

}
