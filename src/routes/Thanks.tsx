import { VFC } from 'react';
import ThanksContent from '../components/ThanksContent';
import Spacer from '../components/Spacer';
import PublicLayout from '../components/layouts/PublicLayout';

// ユーザー登録後の確認画面
const Thanks: VFC = () => (
  <PublicLayout>
    <ThanksContent />
    <Spacer size={250} />
  </PublicLayout>
);

export default Thanks;
