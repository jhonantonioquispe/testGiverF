import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the title';
  visibleProfile = false;
  visibleMenu = true;
  students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  showProfile() {
    this.visibleProfile = !this.visibleProfile;
    console.log('this is the show profile');
  }
  showMenu() {
    this.visibleMenu = !this.visibleMenu;
  }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe((students) => {
      this.students = students;
      console.log('hola ', students);
    });
  }
}
