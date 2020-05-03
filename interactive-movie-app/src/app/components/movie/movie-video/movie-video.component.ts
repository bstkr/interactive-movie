import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { VideoSequence, Interaction } from 'src/app/_models/Interactions';
import { Scene } from 'src/app/_models/Scenes';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit, AfterViewInit {
  @Input() scene: Scene;
  @Input() video: VideoSequence;
  @Input() sceneActive: boolean;

  @Output() endedVideo = new EventEmitter<VideoSequence>();

  @ViewChild('videoPlayer', { static: false })
  videoPlayer: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getVideoClass(pos: string) {
    if (pos === 'intro') {
      return pos + ' currentVideo';
    } else {
      return pos + ' hiddenVideo';
    }
  }

  videoClick(e: Event) {
    const id =
      this.scene.sceneId + '-' + this.video.sequencePosition + '-button';
    const videoElement = document.getElementById(id);
    if (this.videoPlayer.nativeElement.paused) {
      videoElement.classList.replace('show', 'hidden');
      this.videoPlayer.nativeElement.play();
    } else {
      videoElement.classList.replace('hidden', 'show');
      this.videoPlayer.nativeElement.pause();
    }
  }

  videoEnded() {
    this.endedVideo.emit(this.video);
  }

  resetVideo() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.currentTime = 0;
    } else {
      this.videoPlayer.nativeElement.currentTime = 0;
      this.videoPlayer.nativeElement.pause();
    }
  }
}
