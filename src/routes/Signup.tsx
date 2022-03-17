import { VFC } from 'react';
import Header1 from '../components/Header1';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// 新規ユーザー登録画面
const Signup: VFC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <Spacer size={250} />
      <SignupForm />
      <Spacer size={250} />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Signup;
