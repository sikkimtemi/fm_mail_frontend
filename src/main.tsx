import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsExports from './awsExports';
import App from './App';
import Doc from './routes/Doc';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import NoMatch from './routes/NoMatch';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Signup from './routes/Signup';
import Thanks from './routes/Thanks';
import Terms from './routes/Terms';
import Tokusyouhou from './routes/Tokusyouhou';

Amplify.configure(awsExports);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="doc" element={<Doc />} />
        <Route path="login" element={<Login />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="signup" element={<Signup />} />
        <Route path="terms" element={<Terms />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="tokusyouhou" element={<Tokusyouhou />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
