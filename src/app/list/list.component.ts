import { Component, OnInit,Input } from '@angular/core';
import { Questionary } from './../models/questionary';
@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() questionaries: Questionary[] = [];
  constructor() { }

  ngOnInit() {
  }

}
