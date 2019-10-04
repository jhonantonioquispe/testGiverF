let counter = 0;
/*
const schema = {
  fullname: { type: String, required: true },  
  creationDate: { type: Date },
  numberList: { type: Number, required: true },
  grade: {
    literal: { type: String },    
  }
}
*/
import { Grade } from './grade';

export interface IStudent {
  _id?: String;  
  fullname?:string, 
  numberList?: number, 
  grade?:Grade
}

export interface IModelShow {
  textToShow:string;
  data?:any,
  onSelectItem?:(item:any) =>void;
  onMapModel?:(itemIn:any) => IModelShow;
}

export class Student {
  _id: String;  
  
  constructor (_id:String, 
    private fullname:String, 
    private numberList: number, 
    private grade:Grade) {
    this._id = _id;    
  }
}