import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
//importando el nuevo servicio
import { StudentService } from './services/student.service';
import { AttacherService } from './services/attacher.service';
import { ListComponent } from './main-page/list/list.component';
import { MenuLeftComponent } from './main-page/menu-left/menu-left.component';
import { QuestionaryComponent } from './questionary/questionary-component/questionary-component';
import { QuestionComponent } from './questionary/question/question.component';
import { ModalComponent } from './common-components/modal-component/modal-component';
import { AttacherComponent } from './common-components/attacher/attacher.component';
import { GrowRowDirective } from './directives/grow-row-directive';
import { FontChangeDirective } from './directives/font-change-directive';
import { ImgSpreadDirective } from './directives/img-spread-directive';
import { TextEditorComponent } from './common-components/text-editor-component/text-editor-component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MenuLeftComponent,
    QuestionaryComponent,
    QuestionComponent,
    ModalComponent,
    AttacherComponent,
    GrowRowDirective,
    FontChangeDirective,
    ImgSpreadDirective,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports: [TextEditorComponent],
  providers: [StudentService, AttacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
