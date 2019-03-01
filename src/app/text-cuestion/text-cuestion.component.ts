//import { Component, OnInit,Input } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-cuestion',
  templateUrl: './text-cuestion.component.html',
  styleUrls: ['./text-cuestion.component.css']
})
export class TextCuestionComponent implements OnInit {

  constructor() { }
  @Input() editionMode: boolean = true;
  @Input() questionText: string = "";
  @Output() changeQuestion = new EventEmitter<Object>()
  public questionTextIntern:string = "";
  changeQuestionTextArea($event) {
    // this was modified good
    console.log("changing ", $event.srcElement.value);
    this.changeQuestion.emit($event.srcElement.value);
  }
  ngOnInit() {
    console.log("estamos en el q text on init")
    this.questionTextIntern = this.questionText;
  }

}
