export interface UserState {
  hasSeenIntro: boolean;
}

export const InitialUserState: UserState = {
  hasSeenIntro: true,
};

export function jsonCopy(src) {
  return JSON.parse(JSON.stringify(src));
}
