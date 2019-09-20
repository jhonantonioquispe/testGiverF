import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { QuestionariesComponent } from './../app/questionary-page/questionaries/questionaries.component';
import { BlankPageComponent } from './../app/blank-page/blank-page.component';

const routes: Routes = [
  { path: 'blankpage', component: BlankPageComponent },
  { path: 'questionaries', component: QuestionariesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
