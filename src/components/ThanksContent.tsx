import { VFC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../svg/undraw_balloons_re_8ymj.svg';

const ThanksContent: VFC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="prose mx-auto max-w-screen-md px-4 md:px-8">
      <h1>ご登録ありがとうございます！</h1>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          className="rounded object-cover object-center"
          src={Image}
          alt="Welcome!"
        />
        <Link
          to="/mypage"
          className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm  text-white outline-none hover:bg-blue-600 active:bg-blue-700 md:text-base"
        >
          マイページに進む
        </Link>
      </div>
    </div>
  </section>
);
export default ThanksContent;
