import React, { VFC, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { Navigate } from 'react-router-dom';
import Header2 from '../Header2';
import Footer from '../Footer';
import Spinner from '../Spinner';
import stateCurrentUser from '../../atom/User';
import type { CognitoUser } from '../../atom/User';

export type Props = { children: React.ReactNode };
type UserValue = CognitoUser | null;
type UserUpdate = CognitoUser | null;
type UserResult = void;

const AuthenticatedLayout: VFC<Props> = ({ children }) => {
  // サインイン中のユーザー情報
  const [user, setUser] = useAtom<UserValue, UserUpdate, UserResult>(
    stateCurrentUser,
  );

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 要ログインフラグ
  const [loginRequired, setLoginRequired] = useState<boolean>(false);

  // サインイン済みかどうかチェックする
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const checkSignIn = async () => {
      try {
        // サインイン済みのユーザー情報を取得する
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const currentUser: CognitoUser = await Auth.currentAuthenticatedUser();
        // ユーザー情報をJotaiで管理（これをトリガーにもう一つのEffect Hookが動く）
        setUser(currentUser);
      } catch (e) {
        // サインインしていない場合はログイン画面に遷移させる
        setLoginRequired(true);
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void checkSignIn();
  }, [setUser]);

  // サインイン済みチェックが終わったらローディング表示をやめる
  useEffect(() => {
    if (user || loginRequired) setIsLoading(false);
  }, [user, loginRequired]);

  // ローディング表示
  if (isLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }

  // 要ログインの場合はログイン画面に遷移
  if (loginRequired) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <header>
        <Header2 />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AuthenticatedLayout;
