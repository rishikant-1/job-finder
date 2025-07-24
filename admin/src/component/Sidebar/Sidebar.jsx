import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaPlus, FaBriefcase, FaSignOutAlt, FaBars } from 'react-icons/fa';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <FaHome /> },
    { name: 'Post Job', path: '/post-job', icon: <FaPlus /> },
    { name: 'Manage Jobs', path: '/jobs', icon: <FaBriefcase /> },
  ];
  const handleLogOut = async () => {
    const response = await axios.post('/api/admin/logout')
    if (response.status === 200) {
      localStorage.removeItem("admin")
      toast.success("LogOut Success", { autoClose: 1000 })
      setTimeout(() => {
        navigate("/")
      }, 1500)

    }

  }
  return (
    <>
      <div className='h-screen'>
        <ToastContainer />
        <div className="p-4 text-xl font-bold border-b">StackHire</div>
        <nav className="mt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 p-3 mx-2 rounded-lg hover:bg-blue-100 transition 
                ${location.pathname === link.path ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
          <NavLink
            onClick={handleLogOut}
            className='flex items-center gap-3 p-3 mx-2 rounded-lg hover:bg-blue-100 transition 
               text-red-500 hover:text-gray-700'
          >
            <FaSignOutAlt />
            <span>LogOut</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
