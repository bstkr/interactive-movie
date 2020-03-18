import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInteractionComponent } from './movie-interaction.component';

describe('MovieInteractionComponent', () => {
  let component: MovieInteractionComponent;
  let fixture: ComponentFixture<MovieInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
