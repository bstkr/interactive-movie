import { Component, OnInit } from "@angular/core";
import { PovType } from "src/app/_models/Interactions";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { InteractionService } from "src/app/_services/interaction.service";
import { InteractionState } from "src/app/_models/InteractionState";

@Component({
  selector: "app-movie-home",
  templateUrl: "./movie-home.component.html",
  styleUrls: ["./movie-home.component.scss"],
})
export class MovieHomeComponent implements OnInit {
  pov$: Observable<string>;
  currentPov: string;

  interactionStateArray: InteractionState[];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public interactionService: InteractionService
  ) {}

  ngOnInit() {
    this.currentPov = this.route.snapshot.paramMap.get("pov");
    this.interactionStateArray = this.interactionService.getInteractionStateArray();
  }

  rightNavigation() {
    if (this.currentPov === "pov1") {
      this.router.navigate(["/movie", "pov2"]);
      this.currentPov = "pov2";
    } else if (this.currentPov === "pov2") {
      this.router.navigate(["/movie", "pov3"]);
      this.currentPov = "pov3";
    }
  }

  leftNavigation() {
    if (this.currentPov === "pov2") {
      this.router.navigate(["/movie", "pov1"]);
      this.currentPov = "pov1";
    } else if (this.currentPov === "pov3") {
      this.router.navigate(["/movie", "pov2"]);
      this.currentPov = "pov2";
    }
  }
}
