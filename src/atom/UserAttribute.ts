import { atom } from 'jotai';

export type CognitoUserAttribute = {
  planType: string | undefined;
  stripeSessionId: string | undefined;
};

const stateUserAttribute = atom<CognitoUserAttribute | null>(null);

export default stateUserAttribute;
