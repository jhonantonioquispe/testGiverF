import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.css'],
    
})
export class ModalComponent implements OnInit {
 
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
