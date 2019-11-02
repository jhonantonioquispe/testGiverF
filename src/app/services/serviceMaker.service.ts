import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { IFilterParams } from './../models/models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export abstract class ServiceMaker<T> {
  protected baseUrl:string= "http://127.0.0.1:3000";
  constructor(
    protected _http: HttpClient, protected parent:string){ }

  protected getAll(filterObject?:IFilterParams): Observable<T>{
    const filterQueryParams = filterObject ? `?${filterObject.getFilterParams()}`:""
    return this._http.get<T>(`${this.baseUrl}/${this.parent}${filterQueryParams}`, httpOptions)    
  }

  protected saveOne(itemToSave): Observable<T> {
    return this._http.post<T>(`${this.baseUrl}/${this.parent}`, itemToSave);      
  }

  protected updateOne(itemToSave): Observable<T> {
    return this._http.patch<T>(`${this.baseUrl}/${this.parent}`, itemToSave);      
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
