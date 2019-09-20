import { Component, OnInit } from '@angular/core';

//importing models
import { Questionary } from './../../models/questionary' ;

//importing services
import { QuestionaryService } from './../../services/questionary.service';
import { TestMakerService } from './../../services/test-maker.service';
import { QuestionService } from './../../services/question.service';

@Component({
  selector: 'app-questionaries',
  templateUrl: './questionaries.component.html',
  styleUrls: ['./questionaries.component.css'],
  providers: [TestMakerService, QuestionService, QuestionaryService]
})
export class QuestionariesComponent implements OnInit {
  private isNew:boolean = false;
  private doingTest:boolean = false;
  private cancelCreation:() => void = () => {};
  private selectedQuestionary: Questionary;
  private doQuestionaryLoad: Questionary;
  private questionaries: Questionary[] = [];

  private menuStates = {
    showLeft: false,
    showCenter: true,
    showRight: false,
  };

  constructor(
    private questionaryService: QuestionaryService,
  ) { }

  ngOnInit() {
    this.getTests();
  }

  private getTests = (): void => {
    this.questionaryService
      .getQuestionaries()
      .subscribe((questionaries: any) => {
        if (questionaries.data.length > 0){
          this.questionaries = questionaries.data;
          this.selectedQuestionary = questionaries.data[0];
        }
      });
  }

  private showProfile = () => {
    this.menuStates.showRight = !this.menuStates.showRight;
  }
  private showMenu = () => {
    this.menuStates.showLeft = !this.menuStates.showLeft;
  }

  //list methods
  private quetionaryReceiver = ($event) => {
    this.selectedQuestionary = $event.q;
    this.isNew = $event.isNew;
    this.cancelCreation = $event.cancelCreation;
    this.doingTest = false;   
  }  

  private doQuestionaryReceiver = ($event) => {
    this.doQuestionaryLoad = $event.q;
    this.doingTest = $event.doingTest;    
  }

}
