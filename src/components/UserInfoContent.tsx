import { FC } from 'react';
import { useAtom } from 'jotai';
import stateUserAttribute from '../atom/UserAttribute';
import Image from '../svg/undraw_browsing_re_eycn.svg';
import Spacer from './Spacer';
import openBillingPortal from '../function/StripeUtil';
import stateCurrentUser from '../atom/User';

const Notice: FC = () => {
  const [user] = useAtom(stateCurrentUser);
  // ユーザー属性からemailと現在のプランを取り出す
  const [userAttribute] = useAtom(stateUserAttribute);
  const email = userAttribute?.email;
  const planType = userAttribute?.planType;

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold">ユーザー情報</h1>
        <p className="mb-4">ご利用中のプランは{planType}プランです。</p>
        <p className="mb-4">メールアドレスは {email} です。</p>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            src={Image}
            alt="ユーザー情報"
          />
        </div>
        <Spacer size={50} />
        <hr />
        <Spacer size={50} />
        <h2 className="mb-8 text-2xl font-bold text-red-500">
          アカウントの削除
        </h2>
        PROプランをご契約の場合は、事前に請求ポータルでサブスクリプションを解約してください。
        <br />
        アカウントを削除すると同じIDによるアカウント新規登録はできなくなります。
        <div className="mt-5 flex items-center justify-between sm:col-span-2">
          <button
            type="button"
            className={`inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700 ${
              planType === 'PRO' ? '' : 'hidden'
            }`}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => openBillingPortal(user)}
          >
            請求ポータル
          </button>
          <button
            type="button"
            className={`inline-flex rounded border-0 bg-red-400 py-3 px-6 text-lg text-white hover:bg-red-500 focus:outline-none active:bg-red-600 ${
              planType === 'FREE' ? '' : 'hidden'
            }`}
          >
            アカウント削除
          </button>
        </div>
      </div>
    </section>
  );
};
export default Notice;
