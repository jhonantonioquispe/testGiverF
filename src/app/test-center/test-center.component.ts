import { Component, OnInit } from '@angular/core';
import { Question } from './../models/question';
import { Test } from './../models/test';
import { TestMakerService } from './../services/test-maker.service';
@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent implements OnInit {
  questions: Question[] = [];
  test: Test;
  constructor(
    private testService: TestMakerService
  ) { }

  getTest(): void {
    this.testService
      .getTests()
      .subscribe((tests) => {
        console.log('los test son ',tests)
        this.test = tests[0];        
      });
  }
  ngOnInit() {
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
