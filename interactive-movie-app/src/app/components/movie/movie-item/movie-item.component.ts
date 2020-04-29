import { Component, OnInit, Input } from "@angular/core";
import { InteractionState } from "src/app/_models/InteractionState";
import { InteractionService } from "src/app/_services/interaction.service";
import { SceneService } from "src/app/_services/scene.service";
import { UserState } from "src/app/_models/UserState";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  @Input() interactionState: InteractionState;

  interactionClicked: boolean;
  interactionDecision: String;

  userState: UserState;

  constructor(
    public interactionService: InteractionService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.interactionService
      .isInteractionClicked(this.interactionState.name)
      .subscribe((s) => (this.interactionClicked = s));
    this.interactionService
      .getInteractionState(this.interactionState.name)
      .decision.subscribe((d) => {
        this.interactionDecision = d.split(",")[0];
      });
    this.userService.getUserState().subscribe((s) => (this.userState = s));
  }

  close() {
    const tutorialContainer = document.getElementById("tutorial");
    let itemContainerElement: HTMLElement;

    if (tutorialContainer) {
      if (this.userState.hasSeenIntro) {
        itemContainerElement = document.getElementById(
          this.interactionState.name + "-item-component"
        );
      } else {
        itemContainerElement = document.getElementById(
          this.interactionState.name + "-item-object"
        );

        this.userService.setUserState(true);
      }
    } else {
      itemContainerElement = document.getElementById(
        this.interactionState.name + "-item-component"
      );
    }

    if (itemContainerElement.classList.contains("show")) {
      itemContainerElement.classList.replace("show", "hidden");
    } else {
      itemContainerElement.classList.add("hidden");
    }
  }
}
