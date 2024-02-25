import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className={`mx-auto flex min-h-screen max-w-screen-xl flex-col ${(location.pathname === '/') ? 'mt-14' :""}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
