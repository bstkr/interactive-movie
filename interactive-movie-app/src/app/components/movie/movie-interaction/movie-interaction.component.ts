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
    return {
      top: this.interaction.positionY + '%',
      left: this.interaction.positionX + '%',
      width: this.interaction.width + '%',
      height: this.interaction.height + '%'
    };
  }

  getClickLayerStyle(objectIndex: number) {
    return {
      left: this.interaction.clickLayerElements[objectIndex].posX + '%',
      top: this.interaction.clickLayerElements[objectIndex].posY + '%',
      width: this.interaction.clickLayerElements[objectIndex].width + '%',
      height: this.interaction.clickLayerElements[objectIndex].height + '%'
    };
  }

  mouseOver() {
    let hoverElement = document.getElementById(this.interaction.interactionId + '_hoverLayer');
    hoverElement.classList.remove('showHoverAnimation');
    
    void hoverElement.offsetWidth;

    hoverElement.classList.add('showHoverAnimation');
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
    console.log('HELLO');
    /*
    const videoElement = document.getElementById(this.interaction.sceneId);
    videoElement.classList.remove('hidden');
    videoElement.classList.add('show');*/
  }
}
