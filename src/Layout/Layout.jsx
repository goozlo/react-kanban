import React from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout__wrapper'>
      <Header classname='layout__header' />
      <SideBar classname='layout__sidebar' />
      <div className='layout__main'>{children}</div>
    </div>
  );
};

export const withLayout = Component => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
