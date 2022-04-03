import { VFC } from 'react';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';
import PublicLayout from '../components/layouts/PublicLayout';

// プライバシーポリシー
const PrivacyPolicy: VFC = () => (
  <PublicLayout>
    <PrivacyPolicyContent />
  </PublicLayout>
);

export default PrivacyPolicy;
