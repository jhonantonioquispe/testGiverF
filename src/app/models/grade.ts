let counter = 0;
/*
{
  "creationDate": { type: Date }, // is not send
  "grade": "segundo",
  "paralel": "a",
  "gradeNumeral": 3
}
*/
export interface IGrade {
  _id?:  string,
  grade?: string, 
  gradeLiteral?:string,
  paralel?: string, 
  gradeNumeral?:number
}

export class Grade {
  //_id: String;
  
  constructor (
    private _id: string, 
    private gradeLiteral:string,
    //private grade: Grade, 
    private paralel: string, 
    private gradeNumeral:number) {    
    //this._id = _id || '_id' + counter.toString();
  }
}