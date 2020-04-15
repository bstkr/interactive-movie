import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Interaction } from "src/app/_models/Interactions";
import { InteractionService } from "src/app/_services/interaction.service";
import { Decision } from "src/app/_models/Scenes";

@Component({
  selector: "app-movie-decision",
  templateUrl: "./movie-decision.component.html",
  styleUrls: ["./movie-decision.component.scss"],
})
export class MovieDecisionComponent implements OnInit {
  @Input() interaction: Interaction;
  @Input() decision: Decision;
  @Input() currentDecision: string;

  @Output() decisionClick = new EventEmitter<{
    dec: string;
    decisionPos: string;
  }>();

  userDecision: string;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .decision.subscribe((s) => (this.userDecision = s));
  }

  clickDecision(dec: string) {
    let decisionPos = "" + this.decision.decisionPos;
    this.decisionClick.emit({ dec, decisionPos });
  }

  checkDecisionPos() {
    console.log(this.decision.decisionPos + " - " + this.currentDecision);
    return this.decision.decisionPos === this.currentDecision;
  }
}
