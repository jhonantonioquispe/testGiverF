import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacherComponent } from './attacher.component';

describe('AttacherComponent', () => {
  let component: AttacherComponent;
  let fixture: ComponentFixture<AttacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
