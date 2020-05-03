import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExitButtonComponent } from './movie-exit-button.component';

describe('MovieExitButtonComponent', () => {
  let component: MovieExitButtonComponent;
  let fixture: ComponentFixture<MovieExitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
