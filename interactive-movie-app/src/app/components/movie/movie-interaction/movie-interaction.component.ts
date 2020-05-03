import { Component, OnInit, Input } from "@angular/core";
import { Interaction } from "src/app/_models/Interactions";
import {
  InteractionService,
  InteractionObservable,
} from "src/app/_services/interaction.service";
import { SceneService } from "src/app/_services/scene.service";

@Component({
  selector: "app-movie-interaction",
  templateUrl: "./movie-interaction.component.html",
  styleUrls: ["./movie-interaction.component.scss"],
})
export class MovieInteractionComponent implements OnInit {
  @Input() interaction: Interaction;

  interactionClicked: boolean;
  interactionDecision: string;
  sceneId: string;

  interactionImages: string[];
  randomDelay: string;

  constructor(
    public interactionService: InteractionService,
    public sceneService: SceneService
  ) {}

  ngOnInit() {
    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .clicked.subscribe((s) => {
        this.interactionClicked = s;
      });
    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .decision.subscribe((s) => {
        this.interactionDecision = s;
      });
    this.sceneId = this.sceneService.getSceneIdFromInteractionName(
      this.interaction.interactionName
    );
    this.interactionImages = this.interactionService.getInteractionImages(
      this.interaction.interactionName,
      this.interaction.interactionId
    );
    this.randomDelay = (Math.random() * 5).toPrecision(2);
    console.log(this.randomDelay);
  }

  setInteractionStyle() {
    return {
      top: this.interaction.positionY + "%",
      left: this.interaction.positionX + "%",
      width: this.interaction.width + "%",
      height: this.interaction.height + "%",
    };
  }

  getClickLayerStyle(objectIndex: number) {
    return {
      left: this.interaction.clickLayerElements[objectIndex].posX + "%",
      top: this.interaction.clickLayerElements[objectIndex].posY + "%",
      width: this.interaction.clickLayerElements[objectIndex].width + "%",
      height: this.interaction.clickLayerElements[objectIndex].height + "%",
    };
  }

  mouseOver() {
    const hoverElement = document.getElementById(
      this.interaction.interactionId + "_hoverLayer"
    );
    hoverElement.classList.remove("showHoverAnimation");

    /* tslint:disable */
    // disbale linting for this line. It needs to be here
    void hoverElement.offsetWidth;
    /* tslint:enable */

    hoverElement.classList.add("showHoverAnimation");
  }

  getClass(index: number) {
    if (index === 0) {
      return "item visible2";
    } else {
      return "item invisible2";
    }
  }

  getImageStyle() {
    return {
      width: "100%",
      height: "100%",
      animationDelay: +this.randomDelay + "s",
    };
  }

  clickedInteraction() {
    const videoElement = document.getElementById(this.sceneId);
    const rightNavElement = document.getElementById("rightNav");
    const leftNavElement = document.getElementById("leftNav");

    if (rightNavElement) {
      rightNavElement.classList.add("hidden");
    }
    if (leftNavElement) {
      leftNavElement.classList.add("hidden");
    }

    videoElement.classList.remove("hidden");
    videoElement.classList.add("show");

    this.sceneService.setCurrentDecisionObservable("0");
    this.sceneService.setSceneActive(this.sceneId, true);
  }
}
