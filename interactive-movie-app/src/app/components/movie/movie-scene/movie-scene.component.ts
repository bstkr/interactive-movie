import { Component, OnInit, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-scene',
  templateUrl: './movie-scene.component.html',
  styleUrls: ['./movie-scene.component.scss']
})
export class MovieSceneComponent implements OnInit {

  @Input() interaction: Interaction;

  constructor() { }

  ngOnInit() {
  }

  click(e: Event) {
    let target = e.target as Element;
    target.classList.remove('show');
  }

}
