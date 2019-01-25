
export class Test {
  _id: String;
  questionText :String;
  options : [{
    text : String,
    attachment : String
  }];
  answer: Number;

  constructor() {
    this.questionText = "";
    this.answer=-1;
    (<any>(this.options)) = [];
  }

}