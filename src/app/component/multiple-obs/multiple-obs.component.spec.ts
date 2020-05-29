import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleObsComponent } from './multiple-obs.component';

describe('MultipleObsComponent', () => {
  let component: MultipleObsComponent;
  let fixture: ComponentFixture<MultipleObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
