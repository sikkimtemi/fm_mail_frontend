import { atom } from 'recoil';

type Payload = { email: string };
type IdToken = { payload: Payload };
type SignInUserSession = { idToken: IdToken };
export type CognitoUser = {
  signInUserSession: SignInUserSession;
  username: string;
};

export type User = {
  email: string;
  username: string;
};

const stateCurrentUser = atom<User | null>({
  key: 'current-user',
  default: null,
});

export default stateCurrentUser;
