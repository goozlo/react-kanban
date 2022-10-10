import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Component from '../useState';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Component />
    <Footer />
  </>
);

export default Layout;
