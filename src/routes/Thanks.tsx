import { VFC } from 'react';
import Header2 from '../components/Header2';
import ThanksContent from '../components/ThanksContent';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// ユーザー登録後の確認画面
const Doc: VFC = () => (
  <div>
    <header>
      <Header2 />
    </header>
    <main>
      <ThanksContent />
      <Spacer size={250} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Doc;
