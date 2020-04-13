import { Component, OnInit, Input } from "@angular/core";
import { InteractionService } from "src/app/_services/interaction.service";

@Component({
  selector: "app-timeline-object",
  templateUrl: "./timeline-object.component.html",
  styleUrls: ["./timeline-object.component.scss"],
})
export class TimelineObjectComponent implements OnInit {
  @Input() objectName: string;

  objectClicked: boolean;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    console.log(this.objectName);
    this.interactionService
      .isInteractionClicked(this.objectName)
      .subscribe((s) => (this.objectClicked = s));
  }

  ifUnterhose() {}
}
