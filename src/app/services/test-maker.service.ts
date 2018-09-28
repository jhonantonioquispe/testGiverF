import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

//importing modelo test
import { Test } from './../models/test';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestMakerService {

  private testsUrl = 'http://127.0.0.1:3000/test';

  constructor(private http: HttpClient) { }

  getTests (): Observable<Test[]> {
    return this.http.get<Test[]>(this.testsUrl)
      .pipe(
        tap(tests => {console.log('tests', tests)
          return tests;
        }),
        catchError(this.handleError('getTests', []))
      );
  }

  saveTests(test): Observable<any> {
    return this.http.post<Test>(this.testsUrl, test)
      .pipe(
        tap(test => console.log('tests', test)),
        catchError(this.handleError('getTests', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
