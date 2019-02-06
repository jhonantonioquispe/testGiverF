import { Question } from './../models/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
    
})
export class QuestionComponent implements OnInit {
  loadedFileName:string = ''
  @Input() question: Question;
  @Input() isOnEditMode: boolean = false;
  options: Object[];
  constructor() { }

  ngOnInit() {
  }

  receivingData($event, index) {
    console.log("data event", index, $event)
    this.loadedFileName = $event.filename;
    this.question.options[index].attachment = $event.filename;
  }
}
