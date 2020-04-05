import { Component, OnInit, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';
import { InteractionService, InteractionObservable } from 'src/app/_services/interaction.service';

@Component({
  selector: 'app-movie-interaction',
  templateUrl: './movie-interaction.component.html',
  styleUrls: ['./movie-interaction.component.scss']
})
export class MovieInteractionComponent implements OnInit {

  @Input() interaction: Interaction;

  interactionClicked: boolean;
  interactionDecision: string;

  constructor(
    public interactionService: InteractionService
  ) { }

  ngOnInit() {
    this.interactionService.getInteractionState(this.interaction.interactionName)
      .clicked.subscribe( s => {
        this.interactionClicked = s
      });
    this.interactionService.getInteractionState(this.interaction.interactionName)
      .decision.subscribe ( s => {
        this.interactionDecision = s
      });
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
    const hoverElement = document.getElementById(this.interaction.interactionId + '_hoverLayer');
    hoverElement.classList.remove('showHoverAnimation');

    /* tslint:disable */
    // disbale linting for this line. It needs to be here
    void hoverElement.offsetWidth;
    /* tslint:enable */

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
    const videoElement = document.getElementById(this.interaction.sceneId);
    const rightNavElement = document.getElementById('rightNav');
    const leftNavElement = document.getElementById('leftNav');

    if (rightNavElement) { rightNavElement.classList.add('hidden'); }
    if (leftNavElement) { leftNavElement.classList.add('hidden'); }

    videoElement.classList.remove('hidden');
    videoElement.classList.add('show');
  }
}
