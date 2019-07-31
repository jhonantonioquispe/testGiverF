let counter = 0;
/*
{
  "creationDate": { type: Date }, // is not send
  "grade": "segundo",
  "paralel": "a",
  "gradeNumeral": 3
}
*/
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