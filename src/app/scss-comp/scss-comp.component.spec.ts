import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssCompComponent } from './scss-comp.component';

describe('ScssCompComponent', () => {
  let component: ScssCompComponent;
  let fixture: ComponentFixture<ScssCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
