let counter = 0;
/*questionText: { type: String },
      options: [{
        text: { type: String },
        attachment: { type: String },
      }],
      answer: { type: String }
*/
import { Option } from './option';
export class Question {
  _id: String;
  questionText :String;
  options : Option[];
  answer: String;

  constructor (_id, qtext, answer, options) {
    this.questionText = qtext;
    this._id = null;//_id || '_id' + counter.toString();
    this.options = options;
    //this._id = counter.toString();
    this.answer = answer;
  }
}