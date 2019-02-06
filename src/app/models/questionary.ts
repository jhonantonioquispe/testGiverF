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
import { Question } from './../models/Question';

enum questionaryType {
  Practice,     // 0
  Test          // 1
};

export class Questionary{
  _id: String;
  totalScore: number;
  author: string;
  type: questionaryType; // this is an enum  posble values 'test', 'practice'
  questions: Array<Question>;
}