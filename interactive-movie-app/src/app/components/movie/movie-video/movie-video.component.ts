import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { videoSequence, Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss']
})
export class MovieVideoComponent implements OnInit, AfterViewInit {

  @Input() interaction: Interaction;
  @Input() video: videoSequence;

  @ViewChild('videoPlayer', {static: false})
  videoPlayer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getVideoClass(pos: string) {
    if (pos === "intro") {
      return "currentVideo";
    } else {
      return "hiddenVideo";
    }
  }

  videoClick(e: Event) {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  videoEnded() {
    let introElement = document.getElementById(this.interaction.sceneId + '-intro');
    let alt1Element = document.getElementById(this.interaction.sceneId + '-alt-1');
    let alt2Element = document.getElementById(this.interaction.sceneId + '-alt-2');
    let outroElement = document.getElementById(this.interaction.sceneId + '-outro');
    if (this.video.sequencePosition === 'intro') {
      introElement.classList.replace('currentVideo', 'hiddenVideo');
      alt1Element.classList.replace('hiddenVideo', 'currentVideo');
    } else if (this.video.sequencePosition === 'alt-1') {
      alt1Element.classList.replace('currentVideo', 'hiddenVideo');
      outroElement.classList.replace('hiddenVideo', 'currentVideo');
    }
  }

}
