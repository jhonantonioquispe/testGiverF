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
  public static getCopy = (source:Question) => {
    let copiedOptions:Option[] = []

    source.options.forEach((o:Option) => {
      const copiedOption:Option = <Option>{};      
      Object.assign(copiedOption, o);
      copiedOptions.push(copiedOption);
    });

    let target = new Question(source._id,source.questionText,source.answer, copiedOptions);
    return target;
  }

  constructor (_id, qtext, answer, options) {
    this.questionText = qtext;
    this._id = null;//_id || '_id' + counter.toString();
    this.options = options;
    //this._id = counter.toString();
    this.answer = answer;
  }
}