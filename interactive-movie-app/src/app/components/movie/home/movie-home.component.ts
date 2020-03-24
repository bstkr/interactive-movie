import { Component, OnInit } from '@angular/core';
import { PovType } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {

  currentPov: PovType;

  constructor() { }

  ngOnInit() {
    this.currentPov = 'pov1';
  }

  rightNavigation() {
    if (this.currentPov === 'pov1') {
      this.currentPov = 'pov2';
    } else if (this.currentPov === 'pov2') {
      this.currentPov = 'pov3';
    }
  }

  leftNavigation() {
    if (this.currentPov === 'pov2') {
      this.currentPov = 'pov1';
    } else if (this.currentPov === 'pov3') {
      this.currentPov = 'pov2';
    }
  }

}
