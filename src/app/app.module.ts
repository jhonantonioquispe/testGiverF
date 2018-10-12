import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
//importando el nuevo servicio
import { StudentService } from './student.service';
import { AttacherService } from './attacher.service';
import { ListComponent } from './list/list.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { TestCenterComponent } from './test-center/test-center.component';
import { QuestionComponent } from './question/question.component';
import { AttacherComponent } from './attacher/attacher.component';
import { GrowRowDirective } from './question/grow-row-directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuLeftComponent,
    TestCenterComponent,
    QuestionComponent,
    AttacherComponent,
    GrowRowDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService, AttacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
