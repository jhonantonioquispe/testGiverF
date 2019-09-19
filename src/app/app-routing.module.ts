import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { QuestionaryComponent } from './../app/questionary/questionary-component/questionary-component';
import { BlankPageComponent } from './../app/blank-page/blank-page.component';

const routes: Routes = [
  { path: 'blankpage', component: BlankPageComponent },
  { path: 'questionaries', component: QuestionaryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
