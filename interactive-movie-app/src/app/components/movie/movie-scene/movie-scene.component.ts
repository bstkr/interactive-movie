import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Interaction, VideoSequence } from "src/app/_models/Interactions";
import { InteractionService } from "src/app/_services/interaction.service";

@Component({
  selector: "app-movie-scene",
  templateUrl: "./movie-scene.component.html",
  styleUrls: ["./movie-scene.component.scss"],
})
export class MovieSceneComponent implements OnInit {
  @Input() interaction: Interaction;

  decision: string;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .decision.subscribe((s) => (this.decision = s));
  }

  click(e: Event) {
    const target = e.target as Element;
    target.classList.remove("show");
    target.classList.add("hidden");
  }

  onVideoEnded(video: VideoSequence) {
    const videoElement = document.getElementById(this.interaction.sceneId);
    const introElement = document.getElementById(
      this.interaction.sceneId + "-intro"
    );
    const alt1Element = document.getElementById(
      this.interaction.sceneId + "-alt-1"
    );
    const alt2Element = document.getElementById(
      this.interaction.sceneId + "-alt-2"
    );
    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + "-decision"
    );

    if (this.decision !== "x") {
      this.handleVideoEndWithNoDecision(
        video,
        introElement,
        alt1Element,
        alt2Element,
        decisionContainer
      );
    } else {
      if (video.sequencePosition === "intro") {
        decisionContainer.classList.remove("hidden");
        for (let i = 0; i < decisionContainer.children.length - 1; i++) {
          decisionContainer.children[i].classList.remove("hidden");
        }
      }
    }

    if (video.sequencePosition === "alt-1") {
      alt1Element.classList.replace("currentVideo", "closeVideo");
      if (outroElement) {
        outroElement.classList.replace("hiddenVideo", "currentVideo");
      } else {
        videoElement.classList.replace("show", "fade");
        setTimeout(() => {
          this.closeVideo();
        }, 2000);
      }
    } else if (video.sequencePosition === "alt-2") {
      alt2Element.classList.replace("currentVideo", "closeVideo");
      if (outroElement) {
        outroElement.classList.replace("hiddenVideo", "currentVideo");
      } else {
        videoElement.classList.replace("show", "fade");
        setTimeout(() => {
          this.closeVideo();
        }, 2000);
      }
    } else if (video.sequencePosition === "outro") {
      outroElement.classList.replace("currentVideo", "closeVideo");
      videoElement.classList.replace("show", "fade");
      setTimeout(() => {
        this.closeVideo();
      }, 2000);
    }
  }

  handleVideoEndWithNoDecision(
    video: VideoSequence,
    introElement: HTMLElement,
    alt1Element: HTMLElement,
    alt2Element: HTMLElement,
    decisionContainer: HTMLElement
  ) {
    const decisionElement = document.getElementById(
      this.interaction.sceneId + "-decision-completed"
    );

    if (video.sequencePosition === "intro") {
      decisionContainer.classList.remove("hidden");
      decisionElement.classList.remove("hidden");
      setTimeout(() => {
        decisionElement.classList.add("fade");
        introElement.classList.replace("currentVideo", "closeVideo");
        if (this.decision === "a") {
          alt1Element.classList.replace("hiddenVideo", "currentVideo");
        } else {
          alt2Element.classList.replace("hiddenVideo", "currentVideo");
        }
      }, 3000);
      setTimeout(() => {
        decisionElement.classList.replace("fade", "hidden");
        decisionContainer.classList.add("hidden");
      }, 6000);
    }
  }

  onDecisionClick(dec: number) {
    const introElement = document.getElementById(
      this.interaction.sceneId + "-intro"
    );
    const alt1Element = document.getElementById(
      this.interaction.sceneId + "-alt-1"
    );
    const alt2Element = document.getElementById(
      this.interaction.sceneId + "-alt-2"
    );
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + "-decision"
    );
    const decisionContainerChildren = document.getElementById(
      this.interaction.sceneId + "-decision"
    ).children as HTMLCollection;

    introElement.classList.replace("currentVideo", "closeVideo");

    let d: string;

    if (dec === 1) {
      d = "a";
      for (let i = 0; i < decisionContainerChildren.length - 1; i++) {
        decisionContainerChildren[i].classList.add("close-left");
      }
      alt1Element.classList.replace("hiddenVideo", "currentVideo");
    } else {
      d = "b";
      for (let i = 0; i < decisionContainerChildren.length - 1; i++) {
        decisionContainerChildren[i].classList.add("close-right");
      }
      alt2Element.classList.replace("hiddenVideo", "currentVideo");
    }

    this.interactionService.setDecisionOfInteractionState(
      this.interaction.interactionName,
      d
    );

    setTimeout(() => {
      decisionContainer.classList.add("hidden");
    }, 2000);
  }

  closeVideo() {
    const videoElement = document.getElementById(this.interaction.sceneId);
    const rightNavElement = document.getElementById("rightNav");
    const leftNavElement = document.getElementById("leftNav");
    const itemContainerElement = document.getElementById(
      this.interaction.interactionName
    );

    if (rightNavElement) {
      rightNavElement.classList.remove("hidden");
    }
    if (leftNavElement) {
      leftNavElement.classList.remove("hidden");
    }

    videoElement.classList.replace("fade", "hidden");
    itemContainerElement.classList.remove("hidden");

    this.resetVideoForRewatch();
  }

  resetVideoForRewatch() {
    const introElement = document.getElementById(
      this.interaction.sceneId + "-intro"
    );
    const alt1Element = document.getElementById(
      this.interaction.sceneId + "-alt-1"
    );
    const alt2Element = document.getElementById(
      this.interaction.sceneId + "-alt-2"
    );
    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + "-decision-completed"
    );

    introElement.classList.replace("closeVideo", "currentVideo");
    if (this.decision === "a") {
      alt1Element.classList.replace("closeVideo", "hiddenVideo");
    }
    if (this.decision === "b") {
      alt2Element.classList.replace("closeVideo", "hiddenVideo");
    }
    if (outroElement) {
      outroElement.classList.replace("closeVideo", "hiddenVideo");
    }
  }
}
