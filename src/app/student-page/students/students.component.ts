import { Component, OnInit } from '@angular/core';

//services
import { QuestionaryService } from './../../services/questionary.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [QuestionaryService]
})
export class StudentsComponent implements OnInit {
  private selectedQuestionary: any;
  private students: any[] = [];
  private menuStates = {
    showRight: false,
  };

  constructor(private questionaryService: QuestionaryService,) { }

  ngOnInit() {
    this.questionaryService
      .getQuestionaries()
      .subscribe((questionaries: any) => {
        if (questionaries.data.length > 0){
          this.students = questionaries.data;
          this.selectedQuestionary = questionaries.data[0];
        }
      });
  }

  private showProfile = () => {
    this.menuStates.showRight = !this.menuStates.showRight;
  }

  private catchSelect = ($event) => {
    this.selectedQuestionary = $event.q;    
  }

}
