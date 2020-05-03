import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('scrolling').style.overflowY = 'scroll';
    }, 1200);
  }

  hideScrollbar() {
    document.getElementById('scrolling').style.overflowY = 'hidden';
  }
}
