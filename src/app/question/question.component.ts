import { Question } from '../models/question';
import { Option } from '../models/option';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttacherService } from '../attacher.service';

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
  options: Object[];
  selectedOption:number = -1;
  constructor(private attacherService:AttacherService) { }

  ngOnInit() {
  }

  receivingData($event, index) {
    console.log("data event", index, $event)
    this.loadedFileName = $event.filename;
    this.question.options[index].attachment = $event.filename;
    this.currentFullPath = $event.fullUrl;
  }

  getFullUrl(imgName) {
    return this.attacherService.getFullUrl(imgName);
  }

  getCounterOptions(isEditMode: boolean) {
    return isEditMode? this.question.options.length+1: this.question.options.length;
  }

  addNewOption() {
    let newOption = new Option(null, 'tal', null);
    this.question.options.push(newOption);
  }

  isOptionSelected(i) {
    return ((this.selectedOption === i) || (this.question.answer == i));
  }

  selectOption($event,i) {
    this.selectedOption = i;
    this.question.answer = i;
    console.log($event, " dfsfsdf  " ,i)
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

  changeOptionTextReceive($event, optionIndex) {
    console.log("estamos en el change text option ", $event)
    this.question.options[optionIndex].text = $event;
  }
}
