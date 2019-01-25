import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ServiceMaker } from './serviceMaker.service';
import { ServiceRelationer } from './serviceRelationer.service';
import { Models } from './../models/models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export abstract class FullServiceMaker<T> extends ServiceMaker<T> {
  protected baseUrl:string= "http://127.0.0.1:3000";
  public childs = {};

  constructor(
    _http: HttpClient, 
    protected parent:string,
    childs: Array<string> = []
  ) { 
      super(_http, parent);

      for (let i=0; i<childs.length; i++) {
        if (!this.childs.hasOwnProperty(childs[i])) {
          this.childs[childs[i]] = new ServiceRelationer<any>(this._http,this.parent, childs[i]);
        }
      }
  }
}
