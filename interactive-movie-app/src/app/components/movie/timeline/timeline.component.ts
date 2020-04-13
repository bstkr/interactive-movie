import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  acticateTimeline() {
    const popupTimeline = document.getElementById("pictures");
    popupTimeline.style.display = "flex";
  }

  slide() {
    const slide = document.getElementById("bar");
    slide.style.opacity = "0";
  }
}
