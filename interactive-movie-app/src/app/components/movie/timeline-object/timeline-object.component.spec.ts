import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineObjectComponent } from './timeline-object.component';

describe('TimelineObjectComponent', () => {
  let component: TimelineObjectComponent;
  let fixture: ComponentFixture<TimelineObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
