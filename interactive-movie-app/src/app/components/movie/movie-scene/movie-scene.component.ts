import { Component, OnInit, Input, ElementRef } from "@angular/core";
import { Interaction, VideoSequence } from "src/app/_models/Interactions";
import { InteractionService } from "src/app/_services/interaction.service";
import { BehaviorSubject } from "rxjs";
import { SceneService } from "src/app/_services/scene.service";
import { Decision } from "src/app/_models/Scenes";
import { sequenceEqual } from "rxjs/operators";

@Component({
  selector: "app-movie-scene",
  templateUrl: "./movie-scene.component.html",
  styleUrls: ["./movie-scene.component.scss"],
})
export class MovieSceneComponent implements OnInit {
  @Input() interaction: Interaction;

  decisionArray: Decision[];
  currentDecision: string;

  sceneActive: boolean;
  userDecision: string[];

  constructor(
    public interactionService: InteractionService,
    public sceneService: SceneService
  ) {}

  ngOnInit() {
    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .decision.subscribe((s) => (this.userDecision = s.split(",")));
    this.sceneService
      .getSceneActive(this.interaction.sceneId)
      .subscribe((s) => (this.sceneActive = s));
    this.sceneService
      .getCurrentDecisionObservable()
      .subscribe((s) => (this.currentDecision = s));
    this.decisionArray = this.sceneService.getDecisionsArrayFromSceneName(
      this.interaction.interactionName
    );
  }

  click(e: Event) {
    const target = e.target as Element;
    target.classList.remove("show");
    target.classList.add("hidden");
  }

  onVideoEnded(video: VideoSequence) {
    const videoElement = document.getElementById(this.interaction.sceneId);

    if (video.sequencePosition === "intro") {
      this.handleIntroEnd();
    }

    if (
      video.sequencePosition === "alt-1" ||
      video.sequencePosition === "alt-2"
    ) {
      this.handleFirstPartEnd(video.sequencePosition, videoElement);
    }

    if (
      video.sequencePosition === "alt-1-1" ||
      video.sequencePosition === "alt-1-2" ||
      video.sequencePosition === "alt-2-1" ||
      video.sequencePosition === "alt-2-2"
    ) {
      this.handleSecondPartEnd();
    }

    if (video.sequencePosition === "outro") {
      this.handleOutroEnd();
    }
  }

  handleIntroEnd() {
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + "0-decision"
    );

    if (this.userDecision[0] !== "x") {
      const introElement = document.getElementById(
        this.interaction.sceneId + "-intro"
      );
      const alt1Element = document.getElementById(
        this.interaction.sceneId + "-alt-1"
      );
      const alt2Element = document.getElementById(
        this.interaction.sceneId + "-alt-2"
      );
      this.handleVideoEndWithNoDecision(
        introElement,
        alt1Element,
        alt2Element,
        "0"
      );
    } else {
      decisionContainer.classList.remove("hidden");
      for (let i = 0; i < decisionContainer.children.length - 1; i++) {
        decisionContainer.children[i].classList.remove("hidden");
      }
    }
  }

  handleFirstPartEnd(videoSequencePosition: string, videoElement: HTMLElement) {
    const altElement = document.getElementById(
      this.interaction.sceneId + "-" + videoSequencePosition
    );
    const secondAlt1Element = document.getElementById(
      this.interaction.sceneId + "-" + videoSequencePosition + "-1"
    );
    const secondAlt2Element = document.getElementById(
      this.interaction.sceneId + "-" + videoSequencePosition + "-2"
    );

    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );

    altElement.classList.replace("currentVideo", "closeVideo");

    if (secondAlt1Element && secondAlt2Element) {
      if (this.userDecision.length > 1) {
        this.sceneService.setCurrentDecisionObservable(this.userDecision[1]);
        setTimeout(() => {
          this.handleVideoEndWithNoDecision(
            altElement,
            secondAlt2Element,
            secondAlt2Element,
            this.userDecision[1]
          );
        }, 1000);
      } else {
        const decisionContainer = document.getElementById(
          this.interaction.sceneId + this.userDecision[0] + "-decision"
        );
        decisionContainer.classList.remove("hidden");
        for (let i = 0; i < decisionContainer.children.length - 1; i++) {
          decisionContainer.children[i].classList.remove("hidden");
        }
      }
    } else if (outroElement) {
      outroElement.classList.replace("hiddenVideo", "currentVideo");
      this.startVideo(outroElement, 0);
    } else {
      videoElement.classList.replace("show", "fade");
      setTimeout(() => {
        this.closeVideo();
      }, 2000);
    }
  }

  handleSecondPartEnd() {
    const videoElement = document.getElementById(this.interaction.sceneId);
    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );

    if (outroElement) {
      outroElement.classList.replace("hiddenVideo", "currentVideo");
      this.startVideo(outroElement, 0);
    } else {
      videoElement.classList.replace("show", "fade");
      setTimeout(() => {
        this.closeVideo();
      }, 2000);
    }
  }

  handleOutroEnd() {
    const videoElement = document.getElementById(this.interaction.sceneId);
    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );

    outroElement.classList.replace("currentVideo", "closeVideo");
    videoElement.classList.replace("show", "fade");
    setTimeout(() => {
      this.closeVideo();
    }, 2000);
  }

  handleVideoEndWithNoDecision(
    endedElement: HTMLElement,
    alt1Element: HTMLElement,
    alt2Element: HTMLElement,
    decisionIndex: string
  ) {
    setTimeout(() => {}, 1000);
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + decisionIndex + "-decision"
    );
    const decisionElement = document.getElementById(
      this.interaction.sceneId + decisionIndex + "-decision-completed"
    );

    decisionContainer.classList.remove("hidden");
    decisionElement.classList.remove("hidden");
    setTimeout(() => {
      decisionElement.classList.add("fade");
      endedElement.classList.replace("currentVideo", "closeVideo");
      if (this.userDecision[0] === "1") {
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

  onDecisionClick({ dec, decisionPos }) {
    const introElement = document.getElementById(
      this.interaction.sceneId + "-intro"
    );
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + decisionPos + "-decision"
    );

    introElement.classList.replace("currentVideo", "closeVideo");

    let userDecision: string;

    if (this.currentDecision !== "0") {
      userDecision = this.currentDecision;
      userDecision += "," + this.handleSecondDecision(dec, decisionPos);
    } else {
      userDecision = this.handleFirstDecision(dec, decisionPos);
    }

    this.sceneService.setCurrentDecisionObservable(dec);

    this.interactionService.setDecisionOfInteractionState(
      this.interaction.interactionName,
      userDecision
    );

    setTimeout(() => {
      decisionContainer.classList.add("hidden");
    }, 2000);
  }

  handleFirstDecision(dec: string, decisionPos: string): string {
    const alt1Element = document.getElementById(
      this.interaction.sceneId + "-alt-1"
    );
    const alt2Element = document.getElementById(
      this.interaction.sceneId + "-alt-2"
    );
    const decisionContainerChildren = document.getElementById(
      this.interaction.sceneId + decisionPos + "-decision"
    ).children as HTMLCollection;

    return this.handleDecision(
      dec,
      decisionContainerChildren,
      alt1Element,
      alt2Element
    );
  }

  handleSecondDecision(dec: string, decisionPos: string): string {
    let firstDecision = this.interactionService.getDecisionOfInteractionState(
      this.interaction.interactionName
    );

    const decisionContainerChildren = document.getElementById(
      this.interaction.sceneId + firstDecision + "-decision"
    ).children as HTMLCollection;

    if (firstDecision === "1") {
      const alt1alt1Element = document.getElementById(
        this.interaction.sceneId + "-alt-1-1"
      );
      const alt1alt2Element = document.getElementById(
        this.interaction.sceneId + "-alt-1-2"
      );

      return this.handleDecision(
        dec,
        decisionContainerChildren,
        alt1alt1Element,
        alt1alt2Element
      );
    } else {
      const alt2alt1Element = document.getElementById(
        this.interaction.sceneId + "-alt-2-1"
      );
      const alt2alt2Element = document.getElementById(
        this.interaction.sceneId + "-alt-2-2"
      );
      return this.handleDecision(
        dec,
        decisionContainerChildren,
        alt2alt1Element,
        alt2alt2Element
      );
    }
  }

  handleDecision(
    userDecision: string,
    decisionContainerChildren: HTMLCollection,
    alt1Element: HTMLElement,
    alt2Element: HTMLElement
  ): string {
    let d: string;

    if (userDecision === "1") {
      d = "1";
      for (let i = 0; i < decisionContainerChildren.length - 1; i++) {
        decisionContainerChildren[i].classList.add("close-left");
      }
      alt1Element.classList.replace("hiddenVideo", "currentVideo");
      this.startVideo(alt1Element, 500);
    } else {
      d = "2";
      for (let i = 0; i < decisionContainerChildren.length - 1; i++) {
        decisionContainerChildren[i].classList.add("close-right");
      }
      alt2Element.classList.replace("hiddenVideo", "currentVideo");
      this.startVideo(alt2Element, 500);
    }
    return d;
  }

  async startVideo(video: HTMLElement, msDelay: number) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(), msDelay)
    ).then(() => video.click());
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
    itemContainerElement.classList.replace("hidden", "show");
    videoElement.classList.replace("fade", "hidden");

    this.resetVideoForRewatch();
  }

  resetVideoForRewatch() {
    const introElement = document.getElementById(
      this.interaction.sceneId + "-intro"
    );
    const outroElement = document.getElementById(
      this.interaction.sceneId + "-outro"
    );
    const decisionContainer = document.getElementById(
      this.interaction.sceneId + "-decision-completed"
    );

    introElement.classList.replace("closeVideo", "currentVideo");
    if (this.userDecision[0] === "1") {
      document
        .getElementById(this.interaction.sceneId + "-alt-1")
        .classList.replace("closeVideo", "hiddenVideo");
      if (this.userDecision.length > 1) {
        if (this.userDecision[1] === "1") {
          document
            .getElementById(this.interaction.sceneId + "-alt-1-1")
            .classList.replace("closeVideo", "hiddenVideo");
        } else {
          {
            document
              .getElementById(this.interaction.sceneId + "-alt-1-2")
              .classList.replace("closeVideo", "hiddenVideo");
          }
        }
      }
    } else {
      document
        .getElementById(this.interaction.sceneId + "-alt-2")
        .classList.replace("closeVideo", "hiddenVideo");
      if (this.userDecision.length > 1) {
        if (this.userDecision[1] === "1") {
          document
            .getElementById(this.interaction.sceneId + "-alt-2-1")
            .classList.replace("closeVideo", "hiddenVideo");
        } else {
          {
            document
              .getElementById(this.interaction.sceneId + "-alt-2-2")
              .classList.replace("closeVideo", "hiddenVideo");
          }
        }
      }
    }
    if (outroElement) {
      outroElement.classList.replace("closeVideo", "hiddenVideo");
    }

    this.sceneService.setCurrentDecisionObservable("0");
    this.sceneService.setSceneActive(this.interaction.sceneId, false);
  }
}
