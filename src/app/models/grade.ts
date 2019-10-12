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
  grade: string, 
  paralel: string, 
  gradeNumeral:number
}

export class Grade {
  _id: String;
  
  constructor (
    _id: String, 
    private grade, 
    private paralel, 
    private gradeNumeral) {    
    this._id = _id || '_id' + counter.toString();
  }
}