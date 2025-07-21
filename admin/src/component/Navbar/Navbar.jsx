import React from 'react';
import { LuHandshake } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="w-full h-16 bg-black flex flex-nowrap items-center justify-between px-0 sm:px-10 md:px-16 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white">
        <LuHandshake className="text-2xl" />
        <span className="text-xl font-bold">StackHire</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-4 font-semibold text-white">
        <NavLink
          to="home"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="job-listing"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Jobs Listing
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <span className='w-10 h-10 font-semibold text-2xl rounded-full bg-[#309689] p-1 flex items-center justify-between'>RK</span>
        <div className='flex flex-col'>
          <p className='text-white font-thin'>Welcome!</p>
          <h2 className='text-white font-serif'>Rishi Kant</h2>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
