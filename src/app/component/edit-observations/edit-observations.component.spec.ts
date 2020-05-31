import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObservationsComponent } from './edit-observations.component';

describe('EditObservationsComponent', () => {
  let component: EditObservationsComponent;
  let fixture: ComponentFixture<EditObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
