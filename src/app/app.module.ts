import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { GrowRowDirective } from './directives/grow-row-directive';
import { TextCuestionComponent } from './text-cuestion/text-cuestion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuLeftComponent,
    TestCenterComponent,
    QuestionComponent,
    AttacherComponent,
    GrowRowDirective,
    TextCuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports: [TextCuestionComponent],
  providers: [StudentService, AttacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
