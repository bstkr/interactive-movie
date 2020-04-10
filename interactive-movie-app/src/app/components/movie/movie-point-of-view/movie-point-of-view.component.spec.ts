import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MoviePointOfViewComponent } from "./movie-point-of-view.component";

describe("MoviePointOfViewComponent", () => {
  let component: MoviePointOfViewComponent;
  let fixture: ComponentFixture<MoviePointOfViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePointOfViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePointOfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
