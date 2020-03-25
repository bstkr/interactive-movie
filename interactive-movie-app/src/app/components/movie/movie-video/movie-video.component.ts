import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { videoSequence, Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss']
})
export class MovieVideoComponent implements OnInit, AfterViewInit {

  @Input() interaction: Interaction;
  @Input() video: videoSequence;

  @Output() endedVideo = new EventEmitter<videoSequence>();

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
    this.endedVideo.emit(this.video);
  }

}
