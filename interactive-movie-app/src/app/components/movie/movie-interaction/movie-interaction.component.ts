import { Component, OnInit, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-interaction',
  templateUrl: './movie-interaction.component.html',
  styleUrls: ['./movie-interaction.component.scss']
})
export class MovieInteractionComponent implements OnInit {

  @Input() interaction: Interaction;

  constructor() { }

  ngOnInit() {
  }

  setInteractionStyle() {
    // TODO: Make the width & height in percent aswell to improve relative positioning
    return {
      top: this.interaction.positionY + '%',
      left: this.interaction.positionX + '%',
      width: this.interaction.width + '%',
      height: this.interaction.height + '%'
    };
  }

  getStyleClass(styleClass: string, visible: boolean) {
    let classes = styleClass;
    if (!visible) {
      classes += ' invisible';
    } else {
      classes += ' visible';
    }
    return classes;
  }

  clickedInteraction() {
    const videoElement = document.getElementById(this.interaction.sceneId);
    videoElement.classList.remove('hidden');
    videoElement.classList.add('show');
  }
}
