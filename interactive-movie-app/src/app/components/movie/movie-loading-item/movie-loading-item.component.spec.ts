import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLoadingItemComponent } from './movie-loading-item.component';

describe('MovieLoadingItemComponent', () => {
  let component: MovieLoadingItemComponent;
  let fixture: ComponentFixture<MovieLoadingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLoadingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLoadingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
