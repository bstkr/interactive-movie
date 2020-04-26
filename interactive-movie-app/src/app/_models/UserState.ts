export interface UserState {
  hasSeenIntro: boolean;
}

export const InitialUserState: UserState = {
  hasSeenIntro: false,
};

export function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
