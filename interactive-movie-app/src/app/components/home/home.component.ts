import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { InteractionService } from "src/app/_services/interaction.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router,
    public userService: UserService,
    public interactionService: InteractionService
  ) {}

  ngOnInit() {}
  
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
}
