import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDecisionComponent } from './movie-decision.component';

describe('MovieDecisionComponent', () => {
  let component: MovieDecisionComponent;
  let fixture: ComponentFixture<MovieDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDecisionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
