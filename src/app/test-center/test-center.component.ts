import { Component, OnInit } from '@angular/core';
import { Question } from './../models/question';
import { Test } from './../models/test';
import { TestMakerService } from './../services/test-maker.service';
import { QuestionService } from './../services/question.service';

@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent implements OnInit {
  questions: Question[] = [];
  test: Test;
  isOnEditMode:boolean = true;
  constructor(
    private testService: TestMakerService,    
    private questionService: QuestionService
  ) { }

  changeEditMode() {
    this.isOnEditMode = !this.isOnEditMode;
    console.log(this.isOnEditMode);
  }
  getTest(): void {
    this.testService
      .getTests()
      .subscribe((tests:any) => {
        console.log('los test son ',tests)
        if(tests.data.length>0)
          this.test = tests.data[0];        
        else
          this.test = new Test();
      });
  }

  saveTest(): void {
    this.test.questionText = this.questions[0].questionText;
    (this.test.options as any) = [];
    this.test.options.push({
      text: this.questions[0].options[0].text,
      attachment: this.questions[0].options[0].attachment,
    });
    this.test._id = null;
    this.testService
      .saveTests(this.test)
      .subscribe((tests) => {
        console.log('save test ', tests)
      });

    this.testService
      .getQuestionsByTestId('afff')
      .subscribe((qs)=> {
        console.log('save test ', qs)
      })
  }

  ngOnInit() {
    this.getTest();
    this.questions.push(new Question(null, 'pregA', '_id0', 
      [{_id:1, text:'hola', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}, 
      {_id:2, text:'que', attachment: ''}]))
    this.questions.push(new Question(null, 'pregB', '_id2', 
      [{_id:3, text:'tal', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}]))
    this.questions.push(new Question(null, 'pregC', '_id1', [
      {_id:4, text:'tal', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:5, text:'tal www', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:6, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:8, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:9, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:10, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
      {_id:7, text:'talddd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}
    ]))    
  }
}
