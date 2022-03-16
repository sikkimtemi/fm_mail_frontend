import { VFC } from 'react';
import Header1 from '../components/Header1';
import TermsContent from '../components/TermsContent';
import Footer from '../components/Footer';

// 利用規約
const Terms: VFC = () => (
  <div>
    <header>
      <Header1 />
    </header>
    <main>
      <TermsContent />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Terms;
