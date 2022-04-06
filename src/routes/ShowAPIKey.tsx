import { VFC } from 'react';
import APIKey from '../components/APIKey';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';

// APIキー確認ページ
const ShowAPIKey: VFC = () => (
  <AuthenticatedLayout>
    <APIKey />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default ShowAPIKey;
