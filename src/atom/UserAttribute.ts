import { atom } from 'jotai';

export type CognitoUserAttribute = {
  planType: string | undefined;
  stripeCustomerId: string | undefined;
};

const stateUserAttribute = atom<CognitoUserAttribute | null>(null);

export default stateUserAttribute;
