import React from 'react';
import Top from '../Nav/Header';
import Nav from '../Nav/MainNavigation';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Navigation component at the top */}
      <Nav />
      {/* Render child components */}
      {children}
      {/* Top component at the bottom */}
      <Top />
    </div>
  );
};

export default MainLayout;
