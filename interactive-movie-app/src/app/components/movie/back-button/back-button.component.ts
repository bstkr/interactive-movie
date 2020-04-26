import { Component, OnInit } from "@angular/core";
import { InteractionService } from "src/app/_services/interaction.service";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-back-button",
  templateUrl: "./back-button.component.html",
  styleUrls: ["./back-button.component.scss"],
})
export class BackButtonComponent implements OnInit {
  showPopup = false;

  constructor(
    public interactionService: InteractionService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  popup() {
    const popupElement = document.getElementById("popup");
    popupElement.style.display = "flex";
  }

  close() {
    const popupElement = document.getElementById("popup");
    popupElement.style.display = "none";
  }

  resetData() {
    localStorage.clear();
    this.interactionService.resetInteractionStateArray();
    this.userService.resetUserState();
  }
}
