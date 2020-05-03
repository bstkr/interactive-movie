export class UserState {
  hasSeenIntro: boolean;

  constructor(intro?: boolean) {
    if (intro !== null) {
      this.hasSeenIntro = intro;
    } else {
      this.hasSeenIntro = false;
    }
  }
}

export function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
