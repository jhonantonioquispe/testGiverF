import { Question } from '../../models/question';
import { Option } from '../../models/option';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttacherService } from '../../services/attacher.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
    
})
export class QuestionComponent implements OnInit {
  loadedFileName:string = ''
  urlMain: string= "http://127.0.0.1:3000";
  private currentFullPath: string = "";
  @Input() question: Question;
  @Input() isOnEditMode: boolean = false;
  @Input() doingTest: boolean = false;
  isVisibleAnswer: boolean = false;
  
  public isChangingOption = false;
  public currentOptionIndex= -1;
  public currentOptionText:String = "";
  options: Object[];
  selectedOption:number = -1;
  selectedAnswer:number = -1;
  constructor(private attacherService:AttacherService) { }

  ngOnInit() {
  }

  receivingData($event, index) {
    this.loadedFileName = $event.filename;
    this.question.options[index].attachment = $event.filename;
    this.currentFullPath = $event.fullUrl;
  }

  changeOptionText(optionText, i) {
    this.isChangingOption = true;
    this.currentOptionIndex = i;
    this.currentOptionText = optionText;    
  }

  onCloseOptionChangerReceiver($event) {
    this.isChangingOption = $event.closeFlag;
  }

  getFullUrl(imgName) {
    return this.attacherService.getFullUrl(imgName);
  }

  getCounterOptions(isEditMode: boolean) {
    return isEditMode? this.question.options.length+1: this.question.options.length;
  }

  addNewOption() {
    const idRandom = Math.floor(Math.random() * 100000);
    let newOption = new Option(idRandom, 'tal', null);
    this.question.options.push(newOption);
  }

  isOptionSelected(i) {
    return ((this.selectedOption === i) || (this.question.answer == i) ) && this.verifyIsVisibleAnswer();
  }

  isAnswerSelected(i) {
    return ((this.selectedOption === i) || (this.question.answer == i) );
  }

  selectOption($event,i) {
    if(this.isOnEditMode) {
      this.selectedOption = i;
      this.question.answer = i;
    }
    if(this.doingTest) {
      this.selectedAnswer = i;
      this.question.answerUser = i;
    }
  }  

  verifyIsVisibleAnswer() {
    if(this.isOnEditMode){
      return true;
    } if (!this.doingTest)  {
      return false;
    } else return false;
  }

  removeOption = (optionIndex) => {
    let toReplace = new Array();
    this.question.options.forEach((op,iop)=> {
      if(iop!=optionIndex) {
        toReplace.push(op);
      }
    });
    this.question.options= toReplace;
  }

  changeQuestionReceive($event) {
    this.question.questionText = $event;
  }

  onChangeOptionText($event, optionIndex) {
    if (this.question.options[optionIndex].text != $event.srcElement.outerText) {
      this.question.options[optionIndex].text = null;
      this.question.options[optionIndex].text = $event.srcElement.outerText;
      $event.srcElement.innerText = this.question.options[optionIndex].text;
    }
  }

  focusOptionText($event, i) {
    console.log("text option focus",$event.srcElement.offsetHeight);
  }

}
