import { useEffect, useState, FC } from 'react';
import { useAtom } from 'jotai';
import ky from 'ky';
import stateCurrentUser from '../atom/User';
import Spinner from './Spinner';
import Image1 from '../svg/undraw_content_team_3epn.svg';
import Image2 from '../svg/undraw_real_time_analytics_re_yliv.svg';
import Image3 from '../svg/undraw_react_y-7-wq.svg';
import Image4 from '../svg/undraw_remotely_-2-j6y.svg';
import ApiKeyList from './ApiKeyList';

type ApiKeyInfo = {
  Type: string;
  ApiKey: string;
};
type Result = { Items: ApiKeyInfo[] };
type Resp = { result: Result };

// 表示するコンテンツが少ないので画像を表示
// 同じ画像ではつまらないので、表示するたびにランダムに切り替える
const randomImage = [Image1, Image2, Image3, Image4][
  Math.floor(Math.random() * 4)
];

const ApiKey: FC = () => {
  // サインイン中のユーザー情報
  const [user] = useAtom(stateCurrentUser);

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // APIキー
  const [apiKeys, setApiKeys] = useState<ApiKeyInfo[] | null>(null);

  // DynamoDBアクセス用URL
  const url = `${import.meta.env.VITE_DYNAMODB_BASE_URL}/apikey`;

  // DynamoDBからAPIキーを取得する
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const getApiKeys = async () => {
      try {
        if (user) {
          // Lambda経由でDynamoDBにアクセスする
          const res: Resp = await ky
            .get(url, {
              headers: {
                Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
              },
            })
            .json();
          if (res.result.Items) setApiKeys(res.result.Items);
        }
      } catch (e) {
        // APIキー取得に失敗したらnullをセット
        setApiKeys(null);
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void getApiKeys();
  }, [url, user]);

  // APIキーを取得できたらローディング表示をやめる
  useEffect(() => {
    if (apiKeys) setIsLoading(false);
  }, [apiKeys]);

  // ローディング表示
  if (isLoading) {
    return (
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="mb-8 text-4xl font-bold">APIキーの確認</h1>
          <p className="mb-4">ご利用可能なAPIキーはこちらです。</p>
          <Spinner />
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              src={randomImage}
              alt="APIキーの確認"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold">APIキーの確認</h1>
        <p className="mb-4">ご利用可能なAPIキーはこちらです。</p>
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
                コピー
              </th>
            </tr>
          </thead>
          <tbody>
            {apiKeys &&
              apiKeys.map((item: ApiKeyInfo, index: number) => (
                <ApiKeyList item={item} index={index} key={item.ApiKey} />
              ))}
          </tbody>
        </table>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            src={randomImage}
            alt="APIキーの確認"
          />
        </div>
      </div>
    </section>
  );
};
export default ApiKey;
