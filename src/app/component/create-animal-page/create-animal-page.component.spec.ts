import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimalPageComponent } from './create-animal-page.component';

describe('CreateAnimalPageComponent', () => {
  let component: CreateAnimalPageComponent;
  let fixture: ComponentFixture<CreateAnimalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnimalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
