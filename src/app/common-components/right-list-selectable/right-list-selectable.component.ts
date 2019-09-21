import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Questionary } from '../../models/questionary';
import { Question } from '../../models/question';

///export interface model to show
export interface IModelShow {
  textToShow:string;
  onSelectItem?:(item:any) =>void;
  onMapModel:(itemIn:any) => IModelShow;
}

@Component({
  selector: 'app-right-list-selectable',
  templateUrl: './right-list-selectable.component.html',
  styleUrls: ['./right-list-selectable.component.css']
})

export class RightListSelectableComponent implements OnInit {
  _itemCollection: any[] = [];
  itemsShowCollection: IModelShow[] = [];
  selectedQi:number = -1;
  hideItemList:boolean = true;
  @Output() emitOnSelect = new EventEmitter<Object>();
  //maybe this could be the modelItem
  @Input() modelItem:IModelShow;

  @Input()
  set items(q:any[]) {
    this._itemCollection = q;
    if(this._itemCollection.length>0)
      this.selectedQi = 0;
  }

  get items() {
    return this._itemCollection;
  }

  constructor() { }

  ngOnInit() {    
  }

  toogleActionlist() {
    this.hideItemList =!this.hideItemList;
  }

  selectItemClick(i, isNew = false) {
    this.selectedQi = i;
    this.emitOnSelect.emit({
      q:this._itemCollection[i],
      isNew,
      cancelCreation: this.cancelCreation
    });
  }


  cancelCreation = () => {
    this._itemCollection.pop();
    this.selectItemClick(0);
  }

  //maybe something like this
  onAddItem = (itemToAdd:any, onMapAction:(item:any)=>IModelShow) =>{
    this._itemCollection.push(onMapAction(itemToAdd));
    this.selectItemClick(this._itemCollection.length-1, true);
  }

  addItem() {
    ////this should be set from caller may in a callback
    const newQuestionary = new Questionary();
    newQuestionary.title = "";
    newQuestionary.questions = [
      new Question(
        null, 'modif preg...', '_id0', [{_id:null, text:'', attachment: ''}])];

    this._itemCollection.push(newQuestionary);
    this.items = this._itemCollection;
    this.selectItemClick(this._itemCollection.length-1, true);
    //this.onAddItem()
  }

}
