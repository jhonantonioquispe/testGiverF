import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


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
  @Input() onSetNewItem:(itemToAdd:any) =>void  ;

  @Input()
  set items(q:any[]) {
    this._itemCollection = q;
    if(this._itemCollection.length>0)
      this.selectedQi = 0;
  }

  get items() {
    return this._itemCollection.map((item)=> {
      return this.modelItem.onMapModel(item);
    });
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

  private addItem() {
    const newItem = {};
    this.onSetNewItem(newItem);
    this._itemCollection.push(newItem);
    this.items = this._itemCollection;
    this.selectItemClick(this._itemCollection.length-1, true);
  }

}
