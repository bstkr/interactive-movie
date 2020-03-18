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
    this.currentPov = "pov1";
  }

}
