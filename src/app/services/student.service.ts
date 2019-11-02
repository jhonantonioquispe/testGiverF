import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { FullServiceMaker } from './fullServiceMaker.service';

//importing modelo student
import { Student } from '../models/student';
import { IFilterParams } from '../models/models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService extends FullServiceMaker<Student> {

  private studentsUrl = 'http://127.0.0.1:3000/student';  // URL to web api

  constructor(http: HttpClient) { 
    super(http, 'student');
  }

  /** GET students from the server */
  getStudents (filterObj?:any)//: Observable<Student[]> 
  {
    const filterStudent:IFilterParams = {
      filterObject: filterObj,
      getFilterParams: ( ) => {
        return `grade.gradeId=${filterObj}`;
      },
      model:Student
    }
    return this.getAll(filterStudent)
      .pipe(
        tap(students => students),
        catchError(this.handleError('getStudents', []))
      );
  }

  /** POST heroes from the server */
  addStudent (student: Student): Observable<Student|any> {
    return this.saveOne(student)
      .pipe(
        tap(student => console.log('students', student)),
        catchError(this.handleError('getStudents', []))
      );
  }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
