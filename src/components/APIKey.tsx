import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import Image1 from '../svg/undraw_content_team_3epn.svg';
import Image2 from '../svg/undraw_real_time_analytics_re_yliv.svg';
import Image3 from '../svg/undraw_react_y-7-wq.svg';
import Image4 from '../svg/undraw_remotely_-2-j6y.svg';
import type { User } from '../atom/User';
import stateCurrentUser from '../atom/User';

// 表示するコンテンツが少ないので画像を表示
// 同じ画像ではつまらないので、表示するたびにランダムに切り替える
const randomImage = [Image1, Image2, Image3, Image4][
  Math.floor(Math.random() * 4)
];

const APIKey: VFC = () => {
  const user = useRecoilValue<User | null>(stateCurrentUser);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold">APIキーの確認</h1>
        <p className="mb-4">
          {user ? user.email : null}ご利用可能なAPIキーはこちらです。
        </p>
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
            <tr className="text-gray-700">
              <td className="dark:border-dark-5 border-b-2 p-4">1</td>
              <td className="dark:border-dark-5 border-b-2 p-4">FREE</td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                XXXXXXXXXXXXXXXXXXXXXX
              </td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                <button type="button">copy</button>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="dark:border-dark-5 border-b-2 p-4">2</td>
              <td className="dark:border-dark-5 border-b-2 p-4">PRO</td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </td>
              <td className="dark:border-dark-5 border-b-2 p-4">
                <button type="button">copy</button>
              </td>
            </tr>
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
export default APIKey;
