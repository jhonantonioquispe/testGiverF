import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text-cuestion',
  templateUrl: './text-cuestion.component.html',
  styleUrls: ['./text-cuestion.component.css']
})
export class TextCuestionComponent implements OnInit {

  constructor() { }
  @Input() editionMode: boolean = true;
  @Input() questionText: string = "";
  ngOnInit() {
  }

}
