import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservationPageComponent } from './create-observation-page.component';

describe('CreateObservationPageComponent', () => {
  let component: CreateObservationPageComponent;
  let fixture: ComponentFixture<CreateObservationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObservationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
