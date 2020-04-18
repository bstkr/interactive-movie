import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  slide() {
    const slide = document.getElementById("timeline-container");
    const state = slide.style.top;

    if(state == "80%") {
      slide.style.top = "96%";
    }
    else {
      slide.style.top = "80%";
    }
  }
}
