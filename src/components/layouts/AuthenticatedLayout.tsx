import React, { VFC, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import Header2 from '../Header2';
import Footer from '../Footer';

export type Props = { children: React.ReactNode };
type Payload = { email: string };
type IdToken = { payload: Payload };
type SignInUserSession = { idToken: IdToken };
type User = { signInUserSession: SignInUserSession };

const AuthenticatedLayout: VFC<Props> = ({ children }) => {
  // サインイン中のユーザー情報
  const [user, setUser] = useState<User | null>(null);

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // サインイン済みかどうかチェックする
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const checkSignIn = async () => {
      console.log('check signed in start');
      try {
        // サインイン済みのユーザー情報を取得する
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const currentUser: User = await Auth.currentAuthenticatedUser();
        // ユーザー情報を取得できたState Hookにセット（これをトリガーにもう一つのEffect Hookが動く）
        setUser(currentUser);
        console.log('Sign in success', currentUser);
      } catch (e) {
        // サインインしていない場合はログイン画面に遷移させる
        console.log('Not signed in', e);
        await Auth.federatedSignIn();
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void checkSignIn();
  }, []);

  // ユーザー情報を取得できたらローディング表示をやめる
  useEffect(() => {
    if (user) setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <>
      <header>
        <Header2 />
        {
          // 暫定確認用：サインイン中のユーザー名
          user ? user.signInUserSession.idToken.payload.email : null
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
