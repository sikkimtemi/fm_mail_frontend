import React, { VFC, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import type { HubCapsule } from '@aws-amplify/core';
import Header2 from '../Header2';
import Footer from '../Footer';

export type Props = { children: React.ReactNode };

const AuthenticatedLayout: VFC<Props> = ({ children }) => {
  // サインイン中のユーザー情報
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [user, setUser] = useState<any | null>(null);

  // Cognitoからサインイン中のユーザー情報を取得する
  const getUser = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const userData = await Auth.currentAuthenticatedUser();
      // デバッグ用
      void Auth.currentSession().then((data) => {
        console.log(`token: ${data.getIdToken().getJwtToken()}`);
      });
      console.log(userData);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return userData;
    } catch (e) {
      return console.log('Not signed in');
    }
  };

  const listener = (authData: HubCapsule) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      payload: { event, data },
    } = authData;
    switch (event) {
      case 'signIn':
      case 'cognitoHostedUI': {
        const currentUser = getUser();
        setUser(currentUser);
        break;
      }
      case 'signOut':
        setUser(null);
        break;
      case 'signIn_failure':
      case 'cognitoHostedUI_failure':
      default:
        console.log('Sign in failure', data);
        break;
    }
  };

  useEffect(() => {
    Hub.listen('auth', listener);
    void getUser().then((userData) => setUser(userData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <Header2 />
        {
          // 暫定確認用：サインイン中のユーザー名
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          user ? user.username : null
        }
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AuthenticatedLayout;
