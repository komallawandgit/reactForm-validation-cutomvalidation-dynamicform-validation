import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderCompComponent } from './formbuilder-comp.component';

describe('FormbuilderCompComponent', () => {
  let component: FormbuilderCompComponent;
  let fixture: ComponentFixture<FormbuilderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbuilderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
