import React from 'react';
import Home from '../pages';

const Layout = ({ children }) => {
  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
