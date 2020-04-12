import { Component, OnInit } from "@angular/core";
import { PovType } from "src/app/_models/Interactions";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-movie-home",
  templateUrl: "./movie-home.component.html",
  styleUrls: ["./movie-home.component.scss"],
})
export class MovieHomeComponent implements OnInit {
  pov$: Observable<string>;
  currentPov: string;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.currentPov = this.route.snapshot.paramMap.get("pov");
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
