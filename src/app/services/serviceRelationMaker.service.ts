import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export abstract class ServiceRelationMaker<T> {
  protected baseUrl:string= "http://127.0.0.1:3000";

  constructor(
    protected _http: HttpClient, private parent: string, private child: string){ }

  protected getAllRelationedByParentId(idParent: string): Observable<T[]>{
    return this._http.get<T[]>(`${this.baseUrl}/${this.parent}/${idParent}/${this.child}`, httpOptions)    
  }

  protected getOneRelationedByParentId(idParent: string, childId: string): Observable<T>{
    return this._http.get<T>(`${this.baseUrl}/${this.parent}/${idParent}/${this.child}/${childId}`, httpOptions)    
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
