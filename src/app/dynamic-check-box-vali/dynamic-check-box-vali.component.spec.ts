import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckBoxValiComponent } from './dynamic-check-box-vali.component';

describe('DynamicCheckBoxValiComponent', () => {
  let component: DynamicCheckBoxValiComponent;
  let fixture: ComponentFixture<DynamicCheckBoxValiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCheckBoxValiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCheckBoxValiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
