import { useEffect, useState, VFC } from 'react';
import { useAtom } from 'jotai';
import ky from 'ky';
import type { CognitoUser } from '../atom/User';
import stateCurrentUser from '../atom/User';
import Spinner from './Spinner';

type ApiKey = {
  Type: string;
  ApiKey: string;
};
type Result = {
  Items: ApiKey[];
};
type Resp = {
  result: Result;
};

const APIKeyList: VFC = () => {
  // サインイン中のユーザー情報
  const [user] = useAtom<CognitoUser | null>(stateCurrentUser);

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // APIキー
  const [apiKeys, setApiKeys] = useState<ApiKey[] | null>(null);

  // DynamoDBからAPIキーを取得する
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const getApiKeys = async () => {
      console.log('get api key start.');
      try {
        if (user) {
          // Lambda経由でDynamoDBにアクセスする
          const res: Resp = await ky
            .get(
              ' https://zytxynwnz3.execute-api.ap-northeast-1.amazonaws.com/api/apikey',
              {
                headers: {
                  Authorization: `Bearer ${user?.signInUserSession.idToken.jwtToken}`,
                },
              },
            )
            .json();
          console.log('Your API Key: ', res);
          if (res.result.Items) setApiKeys(res.result.Items);
        }
      } catch (e) {
        // サインインしていない場合はログイン画面に遷移させる
        console.log('get api key failed.', e);
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void getApiKeys();
  }, [user]);

  // APIキーを取得できたらローディング表示をやめる
  useEffect(() => {
    if (apiKeys) setIsLoading(false);
  }, [apiKeys]);

  // ローディング表示
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="mb-8 rounded-lg bg-white p-4 shadow">
      <thead>
        <tr>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            No.
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            プラン種別
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            APIキー
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            アクション
          </th>
        </tr>
      </thead>
      <tbody>
        {apiKeys &&
          apiKeys.map((item, index: number) => (
            <tr className="text-gray-700">
              <td className="dark:border-dark-5 border-b-2 p-4">{index + 1}</td>
              <td className="dark:border-dark-5 border-b-2 p-4">{item.Type}</td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                {item.ApiKey}
              </td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                <button type="button">copy</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default APIKeyList;
