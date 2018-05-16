import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCenterComponent } from './test-center.component';

describe('TestCenterComponent', () => {
  let component: TestCenterComponent;
  let fixture: ComponentFixture<TestCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
