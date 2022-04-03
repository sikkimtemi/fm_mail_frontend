import { VFC } from 'react';
import Notice from '../components/Notice';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';

// マイページ
const MyPage: VFC = () => (
  <AuthenticatedLayout>
    <Notice />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default MyPage;
