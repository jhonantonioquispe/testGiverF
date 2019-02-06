import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { TestMakerService } from './services/test-maker.service';

import { QuestionService } from './services/question.service';
import { QuestionaryService } from './services/questionary.service';
import { Student } from './student';

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
  }
  students: Student[];
  constructor(
    private studentService: StudentService,
    private testService: TestMakerService,
    //private questionService: QuestionService
  ) { }

  ngOnInit() {
    //this.getStudents();
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
        console.log('hola ', students);
      });
  }
}
