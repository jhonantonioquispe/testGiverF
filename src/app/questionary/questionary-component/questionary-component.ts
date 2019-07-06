import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { Test } from '../../models/test';
import { Questionary } from '../../models/questionary';
import { TestMakerService } from '../../services/test-maker.service';
import { QuestionaryService } from '../../services/questionary.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questionary-component',
  templateUrl: './questionary-component.html',
  styleUrls: ['./questionary-component.css']
})
export class QuestionaryComponent implements OnInit {
  questions: Question[] = [];
  test: Test;
  questionary: Questionary = new Questionary();
  questionaryToEdit: Questionary = new Questionary();;
  isOnEditMode: boolean = false;
  _isNew:boolean = false;

  @Input() cancelCreation:() => void = () => {};

  @Input() 
  set questionaryLoad(questionaryLoad:Questionary) {
    this.questionary = questionaryLoad;
    //this.questionary.questions  = this.questionary? this.questionary.questions: [];
  }

  get questionaryLoad() {
    return this.questionary;
  }

  @Input() 
  set isNew(isNew:boolean) {
    this._isNew = isNew;
    if(this.isNew) {
      this.isOnEditMode = true;
    }    
  }

  get isNew() {
    return this._isNew;
  }

  constructor(
    private testService: TestMakerService,
    private questionService: QuestionService,
    private questionaryService: QuestionaryService
  ) { }

  cancelEditMode() {
    this.isOnEditMode = false;
    if(this.isNew) {
      this.cancelCreation();
    }
  }

  editMode() {
    this.isOnEditMode = true;
    this.questionaryToEdit.copyFrom(this.questionary);
  }

  saveTestAction() {
    if(this.isNew) {
      this.saveTest();
    } else {
      this.updateTest();
    }   
  }

  saveTest(): void {
    this.questionaryToEdit._id = null;
    this.questionaryToEdit.questions = this.questionaryToEdit.questions.map((q) => {
      q.options.forEach(o => o._id = undefined);
      q._id = undefined;
      return q;
    });
    this.questionaryToEdit.totalScore = 55.34;
    this.questionaryToEdit.author = "jhon quispe";
    this.questionaryToEdit.type = 1; // this is an enum  posble values 'test', 'practice'
    console.log(this.questionary)

    this.questionaryService
      .saveQuestionary(this.questionaryToEdit)
      .subscribe((questionary) => {
        const updatedQuestionary = questionary.data;
        //window.location.reload()
      });
  }

  removeQuestion(qIndex) {
    this.questionaryToEdit.questions  = this.questionaryToEdit.questions .filter((q, qi) => qi != qIndex);
  }

  addQuestion() {
    this.questionaryToEdit.questions .push(
      new Question(null, '', '', []));
  }

  changeTitleReceive($event) {
    this.questionaryToEdit.title = $event;
  }

  updateTest = ():void => {
    this.questionaryToEdit.totalScore = 55.34;
    this.questionaryToEdit.author = "jhon quispe modified";
    this.questionaryToEdit.type = 1;
    this.questionaryToEdit.questions .forEach(q => {
      if (!q._id) q._id = undefined;

      q.options.forEach(o => {
        if (!o._id || parseInt(o._id.toString())) o._id = undefined;
      });
    });
    this.questionaryService
      .updateQuestionary(this.questionaryToEdit)
      .subscribe((questionary) => {
        //window.location.reload()
        this.questionary = questionary.data;
        this.isOnEditMode = false;
      });
  }

  ngOnInit() {
    this.questionary = this.questionaryLoad || new Questionary();
  }
}
