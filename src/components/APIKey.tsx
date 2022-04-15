import { VFC, Suspense } from 'react';
// import type { ICredentials } from '@aws-amplify/core';
import Image1 from '../svg/undraw_content_team_3epn.svg';
import Image2 from '../svg/undraw_real_time_analytics_re_yliv.svg';
import Image3 from '../svg/undraw_react_y-7-wq.svg';
import Image4 from '../svg/undraw_remotely_-2-j6y.svg';
import APIKeyList from './APIKeyList';
import Spinner from './Spinner';

// 表示するコンテンツが少ないので画像を表示
// 同じ画像ではつまらないので、表示するたびにランダムに切り替える
const randomImage = [Image1, Image2, Image3, Image4][
  Math.floor(Math.random() * 4)
];

const APIKey: VFC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 className="mb-8 text-4xl font-bold">APIキーの確認</h1>
      <p className="mb-4">ご利用可能なAPIキーはこちらです。</p>
      <Suspense fallback={<Spinner />}>
        <APIKeyList />
      </Suspense>
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
export default APIKey;
