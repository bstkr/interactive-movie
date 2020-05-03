export class UserState {
  hasSeenIntro: boolean;

  constructor(intro: boolean) {
    this.hasSeenIntro = intro;
  }
}

export function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
