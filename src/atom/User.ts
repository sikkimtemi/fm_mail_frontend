import { atom } from 'jotai';

type Payload = { email: string };
type IdToken = { payload: Payload };
type SignInUserSession = { idToken: IdToken };
export type CognitoUser = {
  signInUserSession: SignInUserSession;
  username: string;
};

const stateCurrentUser = atom<CognitoUser | null>(null);

export default stateCurrentUser;
