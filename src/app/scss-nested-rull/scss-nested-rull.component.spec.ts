import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssNestedRullComponent } from './scss-nested-rull.component';

describe('ScssNestedRullComponent', () => {
  let component: ScssNestedRullComponent;
  let fixture: ComponentFixture<ScssNestedRullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssNestedRullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssNestedRullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
