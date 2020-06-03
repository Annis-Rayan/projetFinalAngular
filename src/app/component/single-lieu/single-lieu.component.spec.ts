import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLieuComponent } from './single-lieu.component';

describe('SingleLieuComponent', () => {
  let component: SingleLieuComponent;
  let fixture: ComponentFixture<SingleLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
