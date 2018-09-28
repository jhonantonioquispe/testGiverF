import { Question } from './../models/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  loadedFileName:string = ''
  @Input() question: Question;
  options: Object[];
  constructor() { }

  ngOnInit() {
  }

  receivingData($event) {
    this.loadedFileName = $event.filename;
  }

}
