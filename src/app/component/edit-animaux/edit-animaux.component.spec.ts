import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimauxComponent } from './edit-animaux.component';

describe('EditAnimauxComponent', () => {
  let component: EditAnimauxComponent;
  let fixture: ComponentFixture<EditAnimauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnimauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
