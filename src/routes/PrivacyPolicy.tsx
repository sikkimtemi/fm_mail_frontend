import { VFC } from 'react';
import Header1 from '../components/Header1';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';
import Footer from '../components/Footer';

// プライバシーポリシー
const PrivacyPolicy: VFC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <PrivacyPolicyContent />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default PrivacyPolicy;
