import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCuestionComponent } from './text-cuestion.component';

describe('TextCuestionComponent', () => {
  let component: TextCuestionComponent;
  let fixture: ComponentFixture<TextCuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
