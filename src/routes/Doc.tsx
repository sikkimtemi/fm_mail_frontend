import { VFC } from 'react';
import Header1 from '../components/Header1';
import DocContent from '../components/DocContent';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// 使い方ガイド
const Doc: VFC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <DocContent />
      <Spacer size={250} />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Doc;
