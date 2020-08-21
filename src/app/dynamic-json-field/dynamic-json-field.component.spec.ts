import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicJsonFieldComponent } from './dynamic-json-field.component';

describe('DynamicJsonFieldComponent', () => {
  let component: DynamicJsonFieldComponent;
  let fixture: ComponentFixture<DynamicJsonFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicJsonFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicJsonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
