import { Component, OnInit, Input, HostListener, OnDestroy } from "@angular/core";
import { InteractionState } from "src/app/_models/InteractionState";
import { InteractionService } from "src/app/_services/interaction.service";
import { SceneService } from "src/app/_services/scene.service";
import { UserState } from "src/app/_models/UserState";
import { UserService } from "src/app/_services/user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit, OnDestroy {
  @Input() interactionState: InteractionState;

  interactionClicked: boolean;
  interactionDecision: string;

  userState: UserState;
  intorChecker = false;

  subArray: Subscription[];

  constructor(
    public interactionService: InteractionService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.subArray = [];

    this.subArray.push(
    this.interactionService
      .isInteractionClicked(this.interactionState.name)
      .subscribe((s) => (this.interactionClicked = s)),
    this.interactionService
      .getInteractionState(this.interactionState.name)
      .decision.subscribe((d) => {
        this.interactionDecision = d.split(",")[0];
      })
    );
    this.userService.getUserState().subscribe((s) => (this.userState = s));
  }

  ngOnDestroy() {
    for (const sub of this.subArray) {
      sub.unsubscribe();
    }
  }

  close() {
    const tutorialContainer = document.getElementById(
      this.interactionState.name + "-tutorial"
    );
    let itemContainerElement: HTMLElement;

    if (tutorialContainer) {
      itemContainerElement = document.getElementById(
        this.interactionState.name + "-item-object"
      );
      this.intorChecker = true;
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

  @HostListener("document: click", ["$event.target"])
  closeTutorial(target: HTMLElement) {
    if (
      !this.userState.hasSeenIntro &&
      this.intorChecker &&
      !target.classList.contains("close-button")
    ) {
      document
        .getElementById(this.interactionState.name + "-item-component")
        .classList.replace("show", "hidden");
      this.userService.setUserState(true);
    }
  }
}
