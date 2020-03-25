import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Interaction, videoSequence } from 'src/app/_models/Interactions';

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
    target.classList.add('hidden');
  }

  onVideoEnded(video: videoSequence) {
    let introElement = document.getElementById(this.interaction.sceneId + '-intro');
    let alt1Element = document.getElementById(this.interaction.sceneId + '-alt-1');
    let alt2Element = document.getElementById(this.interaction.sceneId + '-alt-2');
    let outroElement = document.getElementById(this.interaction.sceneId + '-outro');
    let decisionContainer = document.getElementById(this.interaction.sceneId + '-decision');

    if (video.sequencePosition === 'intro') {
      introElement.classList.replace('currentVideo', 'hiddenVideo');
      decisionContainer.classList.replace('hiddenVideo', 'currentVideo');
    } else if (video.sequencePosition === 'alt-1') {
      alt1Element.classList.replace('currentVideo', 'hiddenVideo');
      outroElement.classList.replace('hiddenVideo', 'currentVideo');
    } else if (video.sequencePosition === 'alt-2') {
      alt2Element.classList.replace('currentVideo', 'hiddenVideo');
      outroElement.classList.replace('hiddenVideo', 'currentVideo');
    } else {
      outroElement.classList.replace('currentVideo', 'hiddenVideo');
    }
  }

  onDecisionClick(dec: number) {
    let alt1Element = document.getElementById(this.interaction.sceneId + '-alt-1');
    let alt2Element = document.getElementById(this.interaction.sceneId + '-alt-2');
    let decisionContainer = document.getElementById(this.interaction.sceneId + '-decision');

    decisionContainer.classList.replace('currentVideo', 'hiddenVideo');

    if (dec === 1) {
      alt1Element.classList.replace('hiddenVideo', 'currentVideo');
    } else {
      alt2Element.classList.replace('hiddenVideo', 'currentVideo');
    }
  }

}
