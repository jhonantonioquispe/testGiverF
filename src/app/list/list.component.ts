import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Questionary } from './../models/questionary';
@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() questionaries: Questionary[] = [];
  selectedQi:number = -1;
  @Output() changeQuestionary = new EventEmitter<Object>()
  constructor() { }

  ngOnInit() {
  }

  selectQuestionary(i) {
    this.selectedQi = i;
    this.changeQuestionary.emit(this.questionaries[i]);
  }

}
