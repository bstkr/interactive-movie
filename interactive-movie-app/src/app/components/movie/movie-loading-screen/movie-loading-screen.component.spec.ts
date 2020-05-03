import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoadingScreenComponent } from './movie-loading-screen.component';

describe('MovieLoadingScreenComponent', () => {
  let component: MovieLoadingScreenComponent;
  let fixture: ComponentFixture<MovieLoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieLoadingScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
