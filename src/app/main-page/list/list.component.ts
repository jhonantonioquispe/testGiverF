import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Questionary } from '../../models/questionary';
import { Question } from '../../models/question';
@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //@Input() questionaries: Questionary[] = [];
  _questionaries: Questionary[] = [];
  selectedQi:number = -1;
  hideItemList:boolean = true;
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

  toogleActionlist() {
    this.hideItemList =!this.hideItemList;
  }

  selectQuestionary(i, isNew = false) {
    this.selectedQi = i;
    this.changeQuestionary.emit({q:this._questionaries[i],isNew, cancelCreation: this.cancelCreation});
  }

  cancelCreation = () => {
    this._questionaries.pop();
    this.selectQuestionary(0);
  }

  addQuestionary() {
    const newQuestionary = new Questionary();
    newQuestionary.title = "";
    newQuestionary.questions = [
      new Question(
        null, 'modif preg...', '_id0', [{_id:null, text:'', attachment: ''}])];
    this._questionaries.push(newQuestionary);
    this.questionaries = this._questionaries;
    this.selectQuestionary(this._questionaries.length-1, true);
  }

}
