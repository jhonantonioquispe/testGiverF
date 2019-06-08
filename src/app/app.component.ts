import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { TestMakerService } from './services/test-maker.service';

import { QuestionService } from './services/question.service';
import { QuestionaryService } from './services/questionary.service';
import { Student } from './student';
import { Questionary } from './models/questionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestMakerService, QuestionService, QuestionaryService]
})
export class AppComponent {
  title = 'this is the title';
  visibleProfile = false;
  visibleMenu = true;

  menuStates = {
    showLeft: false,
    showCenter: true,
    showRight: false,
  };

  students: Student[];
  questionaries: Questionary[] = [];
  selectedQuestionary: Questionary;
  isNew:boolean = false;

  constructor(
    private studentService: StudentService,
    private questionaryService: QuestionaryService
  ) { 
    this.getTests();
  }

  ngOnInit() {
    
  }

  showProfile() {
    this.menuStates.showRight = !this.menuStates.showRight;
  }
  showMenu() {
    this.menuStates.showLeft = !this.menuStates.showLeft;
  }

  getStudents(): void {
    this.studentService
      .getStudents()
      .subscribe((students) => {
        this.students = students;
   
      });
  }

  getTests(): void {
    this.questionaryService
      .getQuestionaries()
      .subscribe((questionaries: any) => {
        if (questionaries.data.length > 0){
          this.questionaries = questionaries.data;
          //setting selected with the first
          this.selectedQuestionary = questionaries.data[0];
        }
      });
  }

  quetionaryReceiver($event) {
    this.selectedQuestionary = $event.q;
    this.isNew = $event.isNew;
  }
}
