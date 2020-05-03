import { Injectable } from "@angular/core";
import { UserState } from "../_models/UserState";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userState: BehaviorSubject<UserState>;

  constructor() {
    if (localStorage.getItem("userState")) {
      let userState = JSON.parse(localStorage.getItem("userState"));
      this.userState = new BehaviorSubject<UserState>(userState);
    } else {
      let userState = new UserState();
      localStorage.setItem("userState", JSON.stringify(userState));
      this.userState = new BehaviorSubject<UserState>(userState);
    }
  }

  resetUserState() {
    let userState = new UserState();
    localStorage.setItem("userState", JSON.stringify(userState));
    this.userState.next(userState);
  }

  getUserState(): BehaviorSubject<UserState> {
    return this.userState;
  }

  setUserState(intro: boolean) {
    let userState = new UserState(intro);
    this.userState.next(userState);
    localStorage.setItem("userState", JSON.stringify(userState));
  }
}
