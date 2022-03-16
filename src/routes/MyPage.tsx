import { VFC } from 'react';
import Header2 from '../components/Header2';
import Notice from '../components/Notice';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// マイページ
const Doc: VFC = () => (
  <div>
    <header>
      <Header2 />
    </header>
    <main>
      <Notice />
      <Spacer size={250} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Doc;
