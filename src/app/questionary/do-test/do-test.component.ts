import { Component, OnInit, Input } from '@angular/core';
import { Questionary } from '../../models/questionary';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})
export class DoTestComponent implements OnInit {
  questionaryDoing: Questionary = new Questionary();
  doingTest: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  set questionaryLoad(questionaryLoad:Questionary) {
    Questionary.copyFromTo( questionaryLoad, this.questionaryDoing);
    //this.questionary.questions  = this.questionary? this.questionary.questions: [];
  }

  get questionaryLoad() {
    return this.questionaryDoing;
  }

  
  startTest() {
    // this.doingTest = true;
    this.doingTest = !this.doingTest;
  }

}
