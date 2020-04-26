import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-credits",
  templateUrl: "./credits.component.html",
  styleUrls: ["./credits.component.scss"],
})
export class CreditsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(function(){ document.getElementById("scrolling").style.overflowY = "scroll";}, 1200);
  }

  hideScrollbar(){
    document.getElementById("scrolling").style.overflowY = "hidden";
  }
}
