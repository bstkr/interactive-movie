import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { videoSequence } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss']
})
export class MovieVideoComponent implements OnInit, AfterViewInit {

  @Input() video: videoSequence;

  @ViewChild('videoPlayer', {static: false})
  videoPlayer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.videoPlayer.nativeElement);
  }

  videoClick(e: Event) {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

}
