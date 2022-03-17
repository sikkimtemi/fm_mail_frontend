import { VFC } from 'react';
import Header1 from '../components/Header1';
import TokusyouhouContent from '../components/TokusyouhouContent';
import Footer from '../components/Footer';

// 特定商取引法に基づく表記
const Tokusyouhou: VFC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <TokusyouhouContent />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Tokusyouhou;
