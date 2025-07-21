import React from 'react';
import { LuHandshake } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

function NavBar({white}) {
  return (
    <nav className="w-full h-16 text-white flex flex-nowrap items-center justify-between px-0 sm:px-10 md:px-16 z-10 bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <LuHandshake className="text-2xl" />
        <span className="text-xl font-bold">StackHire</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-4 font-semibold text-white">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? 'text-[#30d6c0] opacity-100' : 'opacity-85'} text-md`
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <NavLink to="/login">
          <button className="text-white px-4 py-2 rounded hover:underline">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="bg-[#309689] text-white px-4 py-2 rounded hover:bg-[#0e6d5b]">
            Register
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
