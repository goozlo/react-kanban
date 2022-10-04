import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
