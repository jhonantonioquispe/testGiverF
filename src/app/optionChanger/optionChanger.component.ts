import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-optionChanger',
  templateUrl: './optionChanger.component.html',
  styleUrls: ['./optionChanger.component.css'],
    
})
export class OptionChangerComponent implements OnInit {
 
  @Input() isVisible: boolean = false;
  @Input() textInput: string = "";
  @Output() closeEmitter = new EventEmitter<Object>()
  options: Object[];
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeEmitter.emit({newText:"this.is the value ",closeFlag: false})
  }
}
