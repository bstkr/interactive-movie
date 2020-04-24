import { Component, OnInit, Input } from "@angular/core";
import { InteractionState } from "src/app/_models/InteractionState";
import { InteractionService } from "src/app/_services/interaction.service";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  @Input() interactionState: InteractionState;

  interactionClicked: boolean;
  interactionDecision: String;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService
      .isInteractionClicked(this.interactionState.name)
      .subscribe((s) => (this.interactionClicked = s));
    this.interactionService
      .getInteractionState(this.interactionState.name)
      .decision.subscribe((d) => {
        this.interactionDecision = d.split(",")[0];
      });
  }

  clicked() {
    const itemContainerElement = document.getElementById(
      this.interactionState.name
    );
    itemContainerElement.classList.replace("show", "hidden");
  }
}
