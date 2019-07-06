/*{
  "totalScore": 35,
  "author": "steve gregory",
  "type": "test", // this is an enum  posble values 'test', 'practice'
  "questions": [
    {
      "questionText": "cual es el primero?",
      "options": [
        {
          "text": "option the first",
          "attachment": ""
        },
        {
          "text": "segunda opcion",
          "attachment": "imagen_segunda.jpg"
        }
      ],
      "answer": "0"
    }
  ]
}*/
import { Question } from './question';

enum questionaryType {
  Practice,     // 0
  Test          // 1
};

export class Questionary{
  _id: String;
  totalScore: number;
  title:string;
  author: string;
  type: questionaryType; // this is an enum  posble values 'test', 'practice'
  questions: Question[] = [];
  
  static copyFromTo: (from:Questionary, to:Questionary)=>void = (from:Questionary, to:Questionary) => {
    if (from) {
      to._id = from._id;
      to.totalScore = from.totalScore;
      to.title = from.title;
      to.author = from.author;
      to.type = from.type;
      to.questions = [];
      from.questions.forEach((q:Question) => to.questions.push(Question.getCopy(q)));
    }
  };

}