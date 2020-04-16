import { Component, OnInit, Input } from "@angular/core";
import { InteractionService } from "src/app/_services/interaction.service";
import { Interaction } from "src/app/_models/Interactions";

@Component({
  selector: "app-timeline-object",
  templateUrl: "./timeline-object.component.html",
  styleUrls: ["./timeline-object.component.scss"],
})
export class TimelineObjectComponent implements OnInit {
  @Input() objectName: string;

  interaction: Interaction;
  decision: string;

  objectClicked: boolean;
  objectDecision: string;

  test: boolean;
  test2: boolean;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    console.log(this.objectName);
    this.interactionService
      .isInteractionClicked(this.objectName)
      .subscribe((s) => (this.objectClicked = s));

    this.interactionService
      .getInteractionState(this.interaction.interactionName)
      .decision.subscribe((s) => (this.objectDecision = s));
  }

  ifUnterhose() {
    const unterhose = document.getElementById("a");

    if(this.objectName == "Unterhose" && this.objectClicked) {
      if(this.objectDecision == "a") {
        this.test = true;
        return true;
      }
      else{
        this.test2 = true;
        return true;
      }
    }  
  }
}
