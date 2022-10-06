import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../Button';
import Component from '../useState';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Button />
    <Button className="button_primaryS" />
    <Button className="button_secondary" />
    <Button className="button_destructive" />
    <Component />
    <Footer />
  </>
);

export default Layout;
