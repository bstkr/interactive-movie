import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-loading-screen",
  templateUrl: "./movie-loading-screen.component.html",
  styleUrls: ["./movie-loading-screen.component.scss"],
})
export class MovieLoadingScreenComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigate(["/movie", "pov1"]);
  }
}
