import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCompComponent } from './dynamic-form-comp.component';

describe('DynamicFormCompComponent', () => {
  let component: DynamicFormCompComponent;
  let fixture: ComponentFixture<DynamicFormCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
