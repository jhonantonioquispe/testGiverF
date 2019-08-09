import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  @Output() selectMenuOption = new EventEmitter<Object>();
  
  onShowGrade = () => {
    console.log("queremos mostrar cursos");
    this.selectMenuOption.emit(this.menuOptions[0]);
  }

  
  menuOptions: any[] = [
    {textOption: "Cursos", icon: "icon-cursos", action: this.onShowGrade},
    {textOption: "Examenes", icon: "icon-examenes", action: () => {}},
    {textOption: "Practicas", icon: "icon-practicas", action: () => {}},
    {textOption: "Auto-Evaluaciones", icon: "icon-autoeval", action: () => {}},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
