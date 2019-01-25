import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ServiceMaker } from './serviceMaker.service';

//importing modelo test
import { Test } from '../models/test';

@Injectable()
export class TestQuestionService extends ServiceMaker<Test> {
  constructor(http: HttpClient) {
    super(http, 'test');    
  }

  getTests (){
    return this.getAll()
      .pipe(
        tap(tests => {console.log('tests', tests)
          return tests;
        }),
        catchError(this.handleError('getTests', []))
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



}
