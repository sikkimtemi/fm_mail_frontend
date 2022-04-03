import { VFC } from 'react';
import LoginForm from '../components/LoginForm';
import Spacer from '../components/Spacer';
import PublicLayout from '../components/layouts/PublicLayout';

// ログイン画面
const Login: VFC = () => (
  <PublicLayout>
    <Spacer size={250} />
    <LoginForm />
    <Spacer size={250} />
  </PublicLayout>
);

export default Login;
