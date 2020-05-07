import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { InteractionService } from "src/app/_services/interaction.service";
import {
  state,
  style,
  trigger,
  animate,
  keyframes,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("credits-animation", [
      state(
        "credits-closed",
        style({
          top: "50%",
          height: "30%",
          transform: "translateX(-100%)",
        })
      ),
      state(
        "credits-open",
        style({
          top: "0",
          height: "100%",
          transform: "translateX(0)",
        })
      ),
      transition("credits-closed => credits-open", [
        animate(
          "2s ease",
          keyframes([
            style({
              transform: "translateX(0)",
              offset: 0.5,
            }),
            style({
              top: "0",
              height: "100%",
              offset: 1,
            }),
          ])
        ),
      ]),
      transition("credits-open => credits-closed", [
        animate(
          "2s ease",
          keyframes([
            style({
              top: "50%",
              height: "30%",
              offset: 0.5,
            }),
            style({
              transform: "translateX(-100%)",
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
    trigger("impressum-animation", [
      state(
        "impressum-closed",
        style({
          left: "10%",
          width: "15%",
          transform: "translateY(100%)",
        })
      ),
      state(
        "impressum-open",
        style({
          left: "0",
          width: "100%",
          transform: "translateY(0)",
        })
      ),
      transition("impressum-closed => impressum-open", [
        animate(
          "2s ease",
          keyframes([
            style({
              transform: "translateY(0)",
              offset: 0.5,
            }),
            style({
              left: "0",
              width: "100%",
              offset: 1,
            }),
          ])
        ),
      ]),
      transition("impressum-open => impressum-closed", [
        animate(
          "2s ease",
          keyframes([
            style({
              left: "10%",
              width: "15%",
              offset: 0.5,
            }),
            style({
              transform: "translateY(100%)",
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router,
    public userService: UserService,
    public interactionService: InteractionService
  ) {}

  creditsOpen: boolean;
  impressumOpen: boolean;

  ngOnInit() {
    this.creditsOpen = false;
    this.impressumOpen = false;
  }

  startMovie() {
    document.getElementById("background").classList.add("hide");
    document.getElementById("button-background").classList.add("hide");
    document.getElementById("menu").classList.add("hide");
    const headlineElement = document.getElementById("healine");

    headlineElement.classList.add("start");

    setTimeout(() => {
      headlineElement.style.border = "none";

      setTimeout(() => {
        headlineElement.classList.replace("start", "hide");
        this.router.navigate(["movie/pov1"]);
      }, 1000);
    }, 1000);
  }

  showCredits() {
    this.creditsOpen = true;
  }

  closeCredits() {
    this.creditsOpen = false;
  }

  showImpressum() {
    this.impressumOpen = true;
  }

  closeImpressum() {
    this.impressumOpen = false;
  }
}
