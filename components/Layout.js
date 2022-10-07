import React from 'react';
import Home from '../pages';

const Layout = ({ children }) => {
  return (
    <>
      <h1>R&M</h1>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
