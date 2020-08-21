import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatDriven2ComPComponent } from './templat-driven2-com-p.component';

describe('TemplatDriven2ComPComponent', () => {
  let component: TemplatDriven2ComPComponent;
  let fixture: ComponentFixture<TemplatDriven2ComPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatDriven2ComPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatDriven2ComPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
