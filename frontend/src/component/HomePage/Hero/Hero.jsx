import React from 'react';
import img1 from '../../../assets/img1.jpg';
import NavBar from '../../NavBar';
import { Link } from 'react-router-dom';
import { PiShoppingBagOpenBold } from 'react-icons/pi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FcGoogle } from 'react-icons/fc';
import { RiMicrosoftFill } from 'react-icons/ri';
import { FaInstagram, FaAmazon } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

function Hero() {
  const company = [
    { icon: <FcGoogle className="text-xl" />,
       label: 'Google' 
    },
    {
      icon: <RiMicrosoftFill className="text-xl text-blue-400" />,
      label: 'Microsoft',
    },
    {
      icon: <FaAmazon className="text-xl text-yellow-600" />,
      label: 'Amazon',
    },
    {
      icon: <FaInstagram className="text-xl text-pink-500" />,
      label: 'Instagram',
    },
    {
      icon: <FaLinkedinIn className="text-xl text-blue-500" />,
      label: 'LinkedIn',
    },
  ]
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative flex flex-col items-center justify-between h-full text-white z-10">
        {/* Top Nav */}
        <NavBar />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-2">
            Find Your Dream Job Today!
          </h1>
          <p className="text-sm sm:text-md mb-6">
            Connecting talent with opportunity: Your gateway to career success
          </p>

          {/* Search */}
          <div className="flex items-center justify-center rounded-md">
            <input
              className="bg-white text-black rounded-l-md outline-0 placeholder:text-gray-600 w-72 sm:w-96 pl-2 py-2"
              type="text"
              placeholder="Job title or company"
            />
            <button className="bg-[#309689] py-2 px-3 rounded-r-md">
              Search
            </button>
          </div>

          {/* Popular Searches */}
          <div className="flex items-center flex-wrap justify-center gap-2 mt-3 text-sm">
            <span>Popular Searches:</span>
            <Link to="#features" className="text-[#309689] hover:underline">
              Software Engineer
            </Link>
            <span>|</span>
            <Link to="#features" className="text-[#309689] hover:underline">
              Data Scientist
            </Link>
            <span>|</span>
            <Link to="#features" className="text-[#309689] hover:underline">
              Product Manager
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <PiShoppingBagOpenBold className="text-4xl text-white p-2 rounded-full bg-[#309689]" />
              <div className="text-xs flex flex-col items-start">
                <p>25,840</p>
                <p>Jobs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPeopleGroup className="text-4xl text-white p-2 rounded-full bg-[#309689]" />
              <div className="text-xs flex flex-col items-start">
                <p>1,050</p>
                <p>Candidates</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineBuildingOffice2 className="text-4xl text-white p-2 rounded-full bg-[#309689]" />
              <div className="text-xs flex flex-col items-start">
                <p>1,840</p>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full px-6 py-4 bg-black">
          {company.map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white px-4 py-2 rounded-md cursor-pointer bg-gray-700"
            >
              {company.icon}
              <span>{company.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
