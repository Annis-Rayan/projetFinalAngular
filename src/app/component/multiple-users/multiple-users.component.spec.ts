import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleUsersComponent } from './multiple-users.component';

describe('MultipleUsersComponent', () => {
  let component: MultipleUsersComponent;
  let fixture: ComponentFixture<MultipleUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
