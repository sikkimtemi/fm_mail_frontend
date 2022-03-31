import { VFC } from 'react';
import Header1 from '../components/Header1';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

// ログイン画面
const Login: VFC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <Spacer size={250} />
      <LoginForm />
      <Spacer size={250} />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Login;
