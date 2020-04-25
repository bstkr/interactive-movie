import { Injectable } from "@angular/core";
import { UserState, InitialUserState, jsonCopy } from "../_models/UserState";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userState: UserState;

  constructor() {
    if (localStorage.getItem("userState")) {
      this.userState = JSON.parse(localStorage.getItem("userState"));
    } else {
      this.userState = jsonCopy(InitialUserState);
      localStorage.setItem("userState", JSON.stringify(this.userState));
    }
  }

  resetUserState() {
    this.userState = jsonCopy(InitialUserState);
    console.log(this.userState);
    localStorage.setItem("userState", JSON.stringify(this.userState));
  }

  hasUserSeenIntro(): boolean {
    return this.userState.hasSeenIntro;
  }

  setUserState(intro: boolean) {
    this.userState.hasSeenIntro = intro;
    localStorage.setItem("userState", JSON.stringify(this.userState));
  }
}
