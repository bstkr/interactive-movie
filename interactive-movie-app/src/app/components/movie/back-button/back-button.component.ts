import { Component, OnInit, HostListener } from '@angular/core';
import { InteractionService } from 'src/app/_services/interaction.service';
import { UserService } from 'src/app/_services/user.service';
import { TagContentType } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  showPopup = false;

  constructor(
    public interactionService: InteractionService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit() {}

  popup() {
    document.getElementById('layover').classList.remove("hidden");
    this.showPopup = true;
  }

  close(input: string) {
    if (input === "nein") {
      this.resetData()
    }

    this.router.navigate(["/"]);
  }

  resetData() {
    localStorage.clear();
    this.interactionService.resetInteractionStateArray();
    this.userService.resetUserState();
  }

  @HostListener("document: click", ["$event.target"])
  closeTutorial(target: HTMLElement) {
    if (
      this.showPopup && target.className !== "home-button" && target.tagName !== "tspan" && target.tagName !== "path"
    ) {
      console.log(target);
      document.getElementById('layover').classList.add("hidden")
      this.showPopup = false;
    }
  }
}
