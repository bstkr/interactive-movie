import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSceneComponent } from './movie-scene.component';

describe('MovieSceneComponent', () => {
  let component: MovieSceneComponent;
  let fixture: ComponentFixture<MovieSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSceneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
