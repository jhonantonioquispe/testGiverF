//import { Component, OnInit,Input } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor-component.html',
  styleUrls: ['./text-editor-component.css']
})
export class TextEditorComponent implements OnInit {

  constructor() { }
  @Input() editionMode: boolean = true;
  @Input() questionText: string = "";

  @Input() fontSize: number = 14;
  @Input() fontColor: string = "#000";

  @Output() changeQuestion = new EventEmitter<Object>()
  public questionTextIntern:string = "";
  changeQuestionTextArea($event) {
    // this was modified good
    if (this.questionText != $event.srcElement.outerText) {
      this.questionText = null;
      this.questionText = $event.srcElement.outerText;
      this.changeQuestion.emit(this.questionText);
      $event.srcElement.innerText = this.questionText;
    }
    
  }
  ngOnInit() {
    this.questionTextIntern = this.questionText;
  }

}
