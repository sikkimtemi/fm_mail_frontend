import { VFC } from 'react';
import Image1 from '../svg/undraw_message_sent_re_q2kl.svg';
import Image2 from '../svg/undraw_freelancer_re_irh4.svg';
import Image3 from '../svg/undraw_happy_feeling_slmw.svg';
import Image4 from '../svg/undraw_happy_news_re_tsbd.svg';

// 表示するコンテンツが少ないので画像を表示
// 同じ画像ではつまらないので、表示するたびにランダムに切り替える
const randomImage = [Image1, Image2, Image3, Image4][
  Math.floor(Math.random() * 4)
];

const Notice: VFC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="prose mx-auto max-w-screen-md px-4 md:px-8">
      <h1>お知らせ</h1>
      <p>ご利用中のプランはFREEプランです。</p>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          className="rounded object-cover object-center"
          src={randomImage}
          alt="お知らせ"
        />
      </div>
    </div>
  </section>
);
export default Notice;
