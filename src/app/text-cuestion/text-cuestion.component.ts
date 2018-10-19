import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-cuestion',
  templateUrl: './text-cuestion.component.html',
  styleUrls: ['./text-cuestion.component.css']
})
export class TextCuestionComponent implements OnInit {

  constructor() { }
  public editionMode: boolean=true;
  ngOnInit() {
  }

}
