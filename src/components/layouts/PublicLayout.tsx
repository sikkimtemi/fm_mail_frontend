import React, { VFC } from 'react';
import Header1 from '../Header1';
import Footer from '../Footer';

type Props = { children: React.ReactNode };

const PublicLayout: VFC<Props> = ({ children }) => (
  <>
    <header>
      <Header1 />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default PublicLayout;
