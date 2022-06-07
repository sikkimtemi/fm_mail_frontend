import { FC } from 'react';
import UserInfoContent from '../components/UserInfoContent';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';

// ユーザー情報
const UserInfo: FC = () => (
  <AuthenticatedLayout>
    <UserInfoContent />
  </AuthenticatedLayout>
);

export default UserInfo;
