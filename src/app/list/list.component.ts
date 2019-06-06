import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Questionary } from './../models/questionary';
@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //@Input() questionaries: Questionary[] = [];
  _questionaries: Questionary[] = [];
  selectedQi:number = -1;
  @Output() changeQuestionary = new EventEmitter<Object>()
  
  @Input()
  set questionaries(q:Questionary[]) {
    this._questionaries = q;
    if(this._questionaries.length>0)
      this.selectedQi = 0;
  }

  get questionaries() {
    return this._questionaries;
  }

  constructor() { }

  ngOnInit() {
  }

  selectQuestionary(i) {
    this.selectedQi = i;
    this.changeQuestionary.emit(this._questionaries[i]);
  }

}
