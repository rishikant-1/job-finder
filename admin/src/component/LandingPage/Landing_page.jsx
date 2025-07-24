import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Auth/Navbar';
import image from '../../assets/landingvector.avif';
import { useLocation } from 'react-router-dom';

function Landing_page() {
  const location = useLocation()
  const hideLandingContent = ["/login", "/register"].includes(location.pathname);
  
  return (
    <div className=' w-full'>
      <div className='relative z-10'>
        <Navbar />
      </div>
      <div className='w-full grid lg:grid-cols-2 grid-col-1 mt-10 m-auto'>
        <div className='mx-auto py-15'>
          <Outlet />
          {!hideLandingContent && (
            <div className="mt-20 p-10 rounded-xl my-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                StackHire Admin Panel Access
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Securely manage job listings, monitor activity, and maintain platform integrity.
                Please log in to continue.
              </p>
              <Link
                to="/login"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
              >
                Continue
              </Link>
            </div>
          )}
        </div>
        <img className='w-xl md:flex m-auto hidden' src={image} alt="landing page image" />
      </div>
    </div>
  );
}

export default Landing_page;
