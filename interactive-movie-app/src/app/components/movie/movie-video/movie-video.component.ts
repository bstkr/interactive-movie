import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { VideoSequence, Interaction } from "src/app/_models/Interactions";
import { Scene } from "src/app/_models/Scenes";

@Component({
  selector: "app-movie-video",
  templateUrl: "./movie-video.component.html",
  styleUrls: ["./movie-video.component.scss"],
})
export class MovieVideoComponent implements OnInit, AfterViewInit {
  @Input() scene: Scene;
  @Input() video: VideoSequence;
  @Input() sceneActive: boolean;

  @Output() endedVideo = new EventEmitter<VideoSequence>();

  @ViewChild("videoPlayer", { static: false })
  videoPlayer: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getVideoClass(pos: string) {
    if (pos === "intro") {
      return pos + " currentVideo";
    } else {
      return pos + " hiddenVideo";
    }
  }

  videoClick(e: Event) {
    if (this.videoPlayer.nativeElement.paused) {
      /*Uncomment for development*/ this.videoEnded();
      /*Uncomment for production*/ // this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

  videoEnded() {
    this.endedVideo.emit(this.video);
  }

  renderVideo(): boolean {
    return this.video.sequencePosition === "intro" || this.sceneActive;
  }
}
