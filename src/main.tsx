import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import awsExports from './awsExports';
import App from './App';
import Canceled from './routes/Canceled';
import CanceledAuth from './routes/CanceledAuth';
import Doc from './routes/Doc';
import Login from './routes/Login';
import MyPage from './routes/MyPage';
import NoMatch from './routes/NoMatch';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Signup from './routes/Signup';
import Thanks from './routes/Thanks';
import ThanksAuth from './routes/ThanksAuth';
import Terms from './routes/Terms';
import Tokusyouhou from './routes/Tokusyouhou';
import ShowAPIKey from './routes/ShowAPIKey';
import Upgrade from './routes/Upgrade';

// Amplifyの初期設定
Amplify.configure(awsExports);

// React Queryのデフォルト設定
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="api_key" element={<ShowAPIKey />} />
          <Route path="cancel" element={<Canceled message="" />} />
          <Route
            path="canceled_upgrade"
            element={<CanceledAuth message="アップグレードは" />}
          />
          <Route path="doc" element={<Doc />} />
          <Route path="login" element={<Login />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="privacy_policy" element={<PrivacyPolicy />} />
          <Route path="signup" element={<Signup />} />
          <Route path="terms" element={<Terms />} />
          <Route path="thanks" element={<Thanks message="お問い合わせ" />} />
          <Route
            path="thanks_upgrade"
            element={<ThanksAuth message="ご契約" />}
          />
          <Route path="tokusyouhou" element={<Tokusyouhou />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
