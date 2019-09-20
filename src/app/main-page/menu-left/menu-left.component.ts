import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  @Output() selectMenuOption = new EventEmitter<Object>();
  
  private onShowGrade = () => {
    console.log("queremos mostrar cursos");
    this.selectMenuOption.emit(this.menuOptions[0]);
  }

  private onShowQuestionaries = () => {
    this.selectMenuOption.emit(this.menuOptions[1]);
  }
  
  private onShowPractices = () => {
    this.selectMenuOption.emit(this.menuOptions[2]);
  }
  
  private onShowAutoEvaluaciones = () => {
    this.selectMenuOption.emit(this.menuOptions[3]);
  }

  
  menuOptions: any[] = [
    {textOption: "Cursos", route:"students", icon: "icon-cursos", action: this.onShowGrade},
    {textOption: "Examenes", route:"questionaries", icon: "icon-examenes", action: this.onShowQuestionaries},
    {textOption: "Practicas", route:"blankpage",icon: "icon-practicas", action: this.onShowPractices},
    {textOption: "Auto-Evaluaciones", route:"blankpage",icon: "icon-autoeval", action: this.onShowAutoEvaluaciones},
  ];

  constructor() { }

  ngOnInit() {
  }

}
