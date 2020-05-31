import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisaryRegisterComponent } from './provisary-register.component';

describe('ProvisaryRegisterComponent', () => {
  let component: ProvisaryRegisterComponent;
  let fixture: ComponentFixture<ProvisaryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisaryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisaryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
