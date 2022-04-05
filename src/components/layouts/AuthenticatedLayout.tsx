import React, { VFC, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import type { HubCapsule, HubPayload } from '@aws-amplify/core';
import Header2 from '../Header2';
import Footer from '../Footer';

export type Props = { children: React.ReactNode };
type User = { username: string };

const AuthenticatedLayout: VFC<Props> = ({ children }) => {
  // サインイン中のユーザー情報
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onAuthEvent = async (payload: HubPayload) => {
    const { event } = payload;
    switch (event) {
      case 'signIn':
      case 'cognitoHostedUI': {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const userData: User = await Auth.currentAuthenticatedUser();
          setUser(userData);
          setIsLoading(false);
        } catch (e) {
          console.log('Not signed in');
        }
        break;
      }
      case 'signOut':
        setUser(null);
        setIsLoading(false);
        break;
      case 'signIn_failure':
      case 'cognitoHostedUI_failure':
      default:
        setIsLoading(false);
        console.log('Sign in failure', payload.data);
        break;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    Hub.listen('auth', (hubData: HubCapsule) => {
      const { payload } = hubData;
      void onAuthEvent(payload);
    });
  }, []);

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <>
      <header>
        <Header2 />
        {
          // 暫定確認用：サインイン中のユーザー名
          user ? user.username : null
        }
        {isLoading}
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AuthenticatedLayout;
