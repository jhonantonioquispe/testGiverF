import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-optionChanger',
  templateUrl: './optionChanger.component.html',
  styleUrls: ['./optionChanger.component.css'],
    
})
export class OptionChangerComponent implements OnInit {
 
  @Input() isOnEditMode: boolean = false;
  options: Object[];
  constructor() { }

  ngOnInit() {
  }
}
