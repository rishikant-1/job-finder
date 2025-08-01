// src/components/Layout/AppLayout.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer';

const AppLayout = () => {
  return (
    <div className="w-full h-auto">
      <NavBar />
      {/* <span className='flex py-4 ml-20 cursor-pointer'>|||</span> */}
      <div className='w-full grid grid-cols-12'>
        <div className='lg:col-span-2 md:col-span-3 md:flex hidden bg-amber-100'>
          <Sidebar />
        </div>
        <main className='lg:col-span-10 md:col-span-9 col-span-12 shadow-md py-5'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
