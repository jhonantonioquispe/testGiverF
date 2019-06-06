import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/question';
import { Test } from '../models/test';
import { Questionary } from '../models/questionary';
import { TestMakerService } from '../services/test-maker.service';
import { QuestionaryService } from '../services/questionary.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent implements OnInit {
  questions: Question[] = [];
  test: Test;
  questionary: Questionary = new Questionary();
  isOnEditMode: boolean = false;
  
  @Input() 
  set questionaryLoad(questionaryLoad:Questionary) {
    this.questionary = questionaryLoad;
    this.questions = this.questionary? this.questionary.questions: [];
  }

  get questionaryLoad() {
    return this.questionary;
  }

  constructor(
    private testService: TestMakerService,
    private questionService: QuestionService,
    private questionaryService: QuestionaryService
  ) { }

  changeEditMode() {
    this.isOnEditMode = !this.isOnEditMode;
    console.log(this.isOnEditMode);
  }

  getTests(): void {
    this.questionaryService
      .getQuestionaries()
      .subscribe((questionaries: any) => {
        //console.log('los test son ',questionaries)
        if (questionaries.data.length > 0)
          this.questionary = questionaries.data[0];
        else
          this.questionary = new Questionary();

        this.questions = this.questionary.questions && this.questionary.questions.length > 0 ? this.questionary.questions : this.questions;
      });
  }

  saveTest(): void {
    this.questionary._id = null;
    this.questionary.questions = this.questions.map((q) => {
      q.options.forEach(o => o._id = undefined);
      q._id = undefined;
      return q;
    });
    this.questionary.totalScore = 55.34;
    this.questionary.author = "jhon quispe";
    this.questionary.type = 1; // this is an enum  posble values 'test', 'practice'
    console.log(this.questionary)

    this.questionaryService
      .saveQuestionary(this.questionary)
      .subscribe((questionary) => {
        window.location.reload()
      });
  }

  removeQuestion(qIndex) {
    this.questions = this.questions.filter((q, qi) => qi != qIndex);
  }

  addQuestion() {
    this.questions.push(
      new Question(null, '', '', []));
  }

  changeTitleReceive($event) {
    this.questionary.title = $event;
  }

  updateTest(): void {
    this.questionary.totalScore = 55.34;
    this.questionary.author = "jhon quispe modified";
    this.questionary.type = 1;
    this.questions.forEach(q => {
      if (!q._id) q._id = undefined;

      q.options.forEach(o => {
        if (!o._id || parseInt(o._id.toString())) o._id = undefined;
      });
    });
    this.questionary.questions = this.questions;

    this.questionaryService
      .updateQuestionary(this.questionary)
      .subscribe((questionary) => {
        //console.log('update questionary ', questionary);
        window.location.reload()
      });
  }

  ngOnInit() {
    console.log(this.questionaryLoad)
    this.questionary = this.questionaryLoad || new Questionary();
    //this.getTests();
    //console.log('reading pregggg');
    // this.questions.push(new Question(null, 'pregA', '_id0', 
    //   [{_id:null, text:'hola', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}, 
    //   {_id:null, text:'que', attachment: ''}]))
    // this.questions.push(new Question(null, 'pregB', '_id2', 
    //   [{_id:null, text:'tal', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}]))
    // this.questions.push(new Question(null, 'pregC', '_id1', [
    //   {_id:null, text:'tal', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'tal www', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'tal dfd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'},
    //   {_id:null, text:'talddd', attachment: 'http://localhost:3000/attachments/imgUploader_1527836764676_hijo05.jpg'}
    // ]))    
  }
}
