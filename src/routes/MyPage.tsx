import { VFC } from 'react';
import Header2 from '../components/Header2';
import Notice from '../components/Notice';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// マイページ
const MyPage: VFC = () => (
  <>
    <header>
      <Header2 />
    </header>
    <main>
      <Notice />
      <Spacer size={50} />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default MyPage;
