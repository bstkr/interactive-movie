import { Component, OnInit, Input } from "@angular/core";
import { InteractionState } from "src/app/_models/InteractionState";
import { InteractionService } from "src/app/_services/interaction.service";
import { Interaction } from "src/app/_models/Interactions";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.scss"],
})
export class MovieItemComponent implements OnInit {
  @Input() interactionState: InteractionState;
  @Input() interaction: Interaction;

  interactionClicked: boolean;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService
      .isInteractionClicked(this.interactionState.name)
      .subscribe((s) => (this.interactionClicked = s));
  }
  clicked() {
    console.log("Dings Klicked");
    console.log(this.interactionState.decision);
    console.log(this.interactionState.clicked);
    console.log(this.interactionState.name);

    //.classList.replace("show", "hidden");
  }
}
