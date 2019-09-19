import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { TestMakerService } from './services/test-maker.service';

import { QuestionService } from './services/question.service';
import { QuestionaryService } from './services/questionary.service';
import { Student } from './student';
import { Questionary } from './models/questionary';

import { Router } from '@angular/router';

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

  doQuestionaryLoad: Questionary;
  doingTest:boolean = false;
  
  cancelCreation:() => void = () => {};

  constructor(
    private studentService: StudentService,
    private questionaryService: QuestionaryService,
    private router:Router
  ) { 
    this.getTests();
    this.router.navigate(['/blankpage']);
  }

  ngOnInit() {
    
  }

  showProfile() {
    this.menuStates.showRight = !this.menuStates.showRight;
  }
  showMenu() {
    this.menuStates.showLeft = !this.menuStates.showLeft;
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

  quetionaryReceiver = ($event) => {
    this.selectedQuestionary = $event.q;
    this.isNew = $event.isNew;
    this.cancelCreation = $event.cancelCreation;
    this.doingTest = false;   
  }

  doQuestionaryReceiver = ($event) => {
    this.doQuestionaryLoad = $event.q;
    this.doingTest = $event.doingTest;    
  }

  selectMenuOptionReceiver($event) {
    console.log("event ", $event)
    this.router.navigate([`/${$event.route}`]);
  }
}
