import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGROUPcompComponent } from './form-groupcomp.component';

describe('FormGROUPcompComponent', () => {
  let component: FormGROUPcompComponent;
  let fixture: ComponentFixture<FormGROUPcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGROUPcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGROUPcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
