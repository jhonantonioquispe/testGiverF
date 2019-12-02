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

    constructor(http: HttpClient) {
        super(http, 'student');
    }

    /**
     * {gradeId} - grade id that the student belong
     */
    getStudents(gradeId?: any) {
        const filterStudent: IFilterParams = {
            filterObject: gradeId,
            getFilterParams: () => {
                return `grade.gradeId=${gradeId}`;
            },
            model: Student
        }
        return this.getAll(filterStudent)
            .pipe(
                tap(students => students),
                catchError(this.handleError('getStudents', []))
            );
    }

    /** POST heroes from the server */
    addStudent(student: Student): Observable<Student | any> {
        return this.saveOne(student)
            .pipe(
                tap(student => console.log('students', student)),
                catchError(this.handleError('getStudents', []))
            );
    }

}
