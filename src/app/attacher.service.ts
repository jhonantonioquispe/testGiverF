import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

//importing modelo Attachment
import { Attachment } from './models/attachment';


@Injectable()
export class AttacherService {
  
  private attacherUrl = 'http://192.168.148.183:3000/attachments';  // URL to web api
  
  constructor(
    private http: HttpClient) { }
    
    /** post files for attachments */
    postAttachment(body: FormData):Observable<any> {
      let headers = new HttpHeaders( );
      headers.append('Content-Type','multipart/form-data');
      headers.append('Accept', 'application/json');
      const httpOptions = {headers: headers};
      return this.http.post('http://127.0.0.1:3000/attachments', body, httpOptions)
    .pipe(
      tap((hero: any) => console.log(`added hero w/ id=${hero}`)),
      catchError(this.handleError<any>('addHero'))
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
