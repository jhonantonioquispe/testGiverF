import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class ServiceRelationer<T> {
  protected baseUrl:string= "http://127.0.0.1:3000";

  constructor(
    protected _http: HttpClient, private parent: string, private child: string){ }

  protected getAllRelationedByParentId(idParent: string): Observable<T[]>{
    return this._http.get<T[]>(`${this.baseUrl}/${this.parent}/${idParent}/${this.child}`, httpOptions)    
  }

  protected getOneRelationedByParentId(idParent: string, childId: string): Observable<T>{
    return this._http.get<T>(`${this.baseUrl}/${this.parent}/${idParent}/${this.child}/${childId}`, httpOptions)    
  }

}
