import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
//importando el nuevo servicio
import { StudentService } from './student.service';
import { ListComponent } from './list/list.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TestCenterComponent } from './test-center/test-center.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuLeftComponent,
    TestCenterComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
