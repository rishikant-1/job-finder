import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer';

const LandingLayout = () => {
  const location = useLocation();


  return (
    <div className='w-full'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
