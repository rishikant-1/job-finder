import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPlus, FaBriefcase, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <FaHome /> },
    { name: 'Post Job', path: '/post-job', icon: <FaPlus /> },
    { name: 'Manage Jobs', path: '/jobs', icon: <FaBriefcase /> },
    { name: 'Logout', path: '/logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <>
      
      <div className='h-screen'>
        
        <div className="p-4 text-xl font-bold border-b">Job Admin</div>

        <nav className="mt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 p-3 mx-2 rounded-lg hover:bg-blue-100 transition 
                ${location.pathname === link.path ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
