import { FC } from 'react';
import UpgradeContent from '../components/UpgradeContent';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';

// アップグレード
const MyPage: FC = () => (
  <AuthenticatedLayout>
    <UpgradeContent />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default MyPage;
