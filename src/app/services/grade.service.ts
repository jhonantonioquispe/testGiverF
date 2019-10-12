import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { catchError, tap } from 'rxjs/operators';
import { FullServiceMaker } from './fullServiceMaker.service';

//importing modelo grade
import { Grade } from '../models/grade';

@Injectable()
export class GradeService extends FullServiceMaker<Grade> {

    constructor(http: HttpClient) {
        super(http, 'grade');
    }

    getGrades(): Observable<Grade | any> {
        return this.getAll()
            .pipe(
                tap(grades => grades),
                catchError(this.handleError('getGrades', []))
            );
    }

    addGrade(grade: Grade): Observable<Grade | any> {
        return this.saveOne(grade)
            .pipe(
                tap(grade => console.log('grade post', grade)),
                catchError(this.handleError('getGrades', []))
            );
    }

}
