import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Interaction, VideoSequence } from 'src/app/_models/Interactions';

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
    const target = e.target as Element;
    target.classList.remove('show');
    target.classList.add('hidden');
  }

  onVideoEnded(video: VideoSequence) {
    const introElement = document.getElementById(this.interaction.sceneId + '-intro');
    const alt1Element = document.getElementById(this.interaction.sceneId + '-alt-1');
    const alt2Element = document.getElementById(this.interaction.sceneId + '-alt-2');
    const outroElement = document.getElementById(this.interaction.sceneId + '-outro');
    const decisionContainer = document.getElementById(this.interaction.sceneId + '-decision');

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
    const alt1Element = document.getElementById(this.interaction.sceneId + '-alt-1');
    const alt2Element = document.getElementById(this.interaction.sceneId + '-alt-2');
    const decisionContainer = document.getElementById(this.interaction.sceneId + '-decision');

    decisionContainer.classList.replace('currentVideo', 'hiddenVideo');

    if (dec === 1) {
      alt1Element.classList.replace('hiddenVideo', 'currentVideo');
    } else {
      alt2Element.classList.replace('hiddenVideo', 'currentVideo');
    }
  }

}
