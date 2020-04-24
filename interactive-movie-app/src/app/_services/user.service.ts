import { Injectable } from "@angular/core";
import { UserState, InitialUserState } from "../_models/UserState";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userState: UserState;

  constructor() {
    if (localStorage.getItem("userState")) {
      this.userState = JSON.parse(localStorage.getItem("userState"));
    } else {
      this.userState = InitialUserState;
      localStorage.setItem("userState", JSON.stringify(this.userState));
    }
  }

  hasUserSeenIntro(): boolean {
    return this.userState.hasSeenIntro;
  }
}
