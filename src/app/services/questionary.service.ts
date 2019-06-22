import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

//importing modelo test
import { FullServiceMaker } from './fullServiceMaker.service';
import { Questionary } from '../models/questionary';


@Injectable()
export class QuestionaryService extends FullServiceMaker<Questionary> {
  constructor(http: HttpClient) { 
    super(http, 'questionary');
  }

  getQuestionaries () {
    return this.getAll()
      .pipe(
        tap(questionaries => {
          //console.log('questionary', questionaries)
          return questionaries;
        }),
        catchError(this.handleError('getQuestionaries', []))
      );
  }

  getOneQuestionary(id:String) {
    return this.getOneQuestionary(id)
      .pipe(
        tap(questionary => {
          //console.log('questionary', questionaries)
          return questionary;
        }),
        catchError(this.handleError('get one Questionary', null))
      );
  }

  saveQuestionary(questionary): Observable<any> {
    return this.saveOne(questionary)
      .pipe(
        tap(questionary => console.log('questionary', questionary)),
        catchError(this.handleError('saveQuestionary', []))
      );
  }

  updateQuestionary(questionary): Observable<any> {
    return this.updateOne(questionary)
      .pipe(
        tap(questionary => console.log('questionary', questionary)),
        catchError(this.handleError('updating Questionary', []))
      );
  }
}
