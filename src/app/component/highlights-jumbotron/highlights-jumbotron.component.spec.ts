import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsJumbotronComponent } from './highlights-jumbotron.component';

describe('HighlightsJumbotronComponent', () => {
  let component: HighlightsJumbotronComponent;
  let fixture: ComponentFixture<HighlightsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
