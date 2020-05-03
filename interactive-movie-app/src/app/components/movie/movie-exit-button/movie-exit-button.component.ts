import { Component, OnInit, Input } from '@angular/core';
import { Scene } from "src/app/_models/Scenes";
import { VideoSequence } from "src/app/_models/Interactions";

@Component({
  selector: 'app-movie-exit-button',
  templateUrl: './movie-exit-button.component.html',
  styleUrls: ['./movie-exit-button.component.scss']
})
export class MovieExitButtonComponent implements OnInit {
  @Input() scene: Scene;
  @Input() video: VideoSequence;
  @Input() sceneActive: boolean;

  constructor() { }

  ngOnInit() {
  }


}
