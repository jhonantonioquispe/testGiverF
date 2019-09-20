import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { QuestionariesComponent } from './../app/questionary-page/questionaries/questionaries.component';
import { StudentsComponent } from './../app/student-page/students/students.component';
import { BlankPageComponent } from './../app/blank-page/blank-page.component';

const routes: Routes = [
  { path: 'blankpage', component: BlankPageComponent },
  { path: 'questionaries', component: QuestionariesComponent },
  { path: 'students', component: StudentsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
