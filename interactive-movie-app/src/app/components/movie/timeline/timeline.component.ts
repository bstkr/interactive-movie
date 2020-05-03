import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timelineShow: boolean;

  constructor() {
    this.timelineShow = false;
  }

  ngOnInit() {}

  slide() {
    const timelineElement = document.getElementById('timeline');

    this.timelineShow = true;

    timelineElement.classList.remove('hidden');
  }

  @HostListener('document: click', ['$event.target'])
  close(target: HTMLElement) {
    if (
      this.timelineShow &&
      !(
        target.classList.contains('bar') ||
        target.classList.contains('bar-overlay') ||
        target.classList.contains('objects') ||
        target.parentElement.classList.contains('timeline')
      )
    ) {
      this.timelineShow = false;
      const timelineElement = document.getElementById('timeline');

      timelineElement.classList.add('hidden');
    }
  }
}
