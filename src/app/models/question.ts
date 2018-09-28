let counter = 0;
import { Option } from './../models/option';
export class Question {
  _id: String;
  questionText :String;
  options : Option[];
  answer: String;

  constructor (_id, qtext, answer, options) {
    this.questionText = qtext;
    this._id = _id || '_id' + counter.toString();
    this.options = options;
    //this._id = counter.toString();
    this.answer = answer;
  }
}