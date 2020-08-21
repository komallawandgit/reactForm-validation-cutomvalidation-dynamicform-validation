import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidPatternComponent } from './pyramid-pattern.component';

describe('PyramidPatternComponent', () => {
  let component: PyramidPatternComponent;
  let fixture: ComponentFixture<PyramidPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
