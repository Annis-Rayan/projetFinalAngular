import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleObsComponent } from './single-obs.component';

describe('SingleObsComponent', () => {
  let component: SingleObsComponent;
  let fixture: ComponentFixture<SingleObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
