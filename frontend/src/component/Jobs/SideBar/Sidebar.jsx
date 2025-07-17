import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';
import { IoMdClose } from 'react-icons/io';
import image from '../../../assets/sidebar.jpg';

const Sidebar = ({ isOpen, onClose }) => {
  const categories = ['Commerce', 'Telecomunications', 'Hotels & Tourism', 'Education', 'Financial Services'];
  const jobTypes = ['Full Time', 'Part Time', 'Freelance', 'Seasonal', 'Fixed-Price'];
  const experienceLevels = ['No-experience', 'Fresher', 'Intermediate', 'Expert'];
  const dates = ['All', 'Last Hour', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'];
  const tags = ['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'];

  const [salary, setSalary] = React.useState(0);

  // Hide sidebar on mobile when not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:static md:bg-transparent">
      <div className="bg-[#ebf5f4] w-72 md:w-full h-full p-4 overflow-y-auto md:rounded-xl text-sm space-y-6 relative">
        
        {/* Close button for mobile */}
        <div className="flex justify-end md:hidden">
          <button onClick={onClose}>
            <IoMdClose className="text-xl text-gray-700" />
          </button>
        </div>

        {/* Search Fields */}
        <div>
          <h2 className="text-base font-semibold mb-2">Search by Job Title</h2>
          <div className="flex items-center bg-white pl-2 rounded-md shadow-sm mb-3">
            <IoSearchSharp className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Job title or company"
              className="w-full py-2 pl-2 bg-white rounded-md outline-none text-sm"
            />
          </div>

          <h2 className="text-base font-semibold mb-2">Location</h2>
          <div className="flex items-center bg-white pl-2 rounded-md shadow-sm">
            <SlLocationPin className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Enter location"
              className="w-full py-2 pl-2 bg-white rounded-md outline-none text-sm"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <h2 className="text-base font-semibold mb-3">Category</h2>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-teal-600" />
                  <span>{cat}</span>
                </label>
                <span className="text-sm opacity-80 font-semibold">10</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Type */}
        <div>
          <h2 className="text-base font-semibold mb-3">Job Type</h2>
          <ul className="space-y-2">
            {jobTypes.map((type, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-teal-600" />
                  <span>{type}</span>
                </label>
                <span className="text-sm opacity-80 font-semibold">10</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Level */}
        <div>
          <h2 className="text-base font-semibold mb-3">Experience Level</h2>
          <ul className="space-y-2">
            {experienceLevels.map((level, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-teal-600" />
                  <span>{level}</span>
                </label>
                <span className="text-sm opacity-80 font-semibold">10</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Date Posted */}
        <div>
          <h2 className="text-base font-semibold mb-3">Date Posted</h2>
          <ul className="space-y-2">
            {dates.map((date, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-teal-600" />
                  <span>{date}</span>
                </label>
                <span className="text-sm opacity-80 font-semibold">10</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Salary Range */}
        <div>
          <h2 className="text-base font-semibold mb-3">Salary</h2>
          <div className="flex flex-col space-y-2">
            <input
              type="range"
              min="0"
              max="9999"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full accent-teal-600"
            />
            <div className="flex justify-between items-center">
              <span>Salary: ${salary} - $9999</span>
              <button className="bg-teal-600 text-white text-sm px-3 py-1 rounded hover:bg-teal-700">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div>
          <h2 className="text-base font-semibold mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#d7f0ee] text-teal-800 text-xs md:text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Promotional Image */}
        <div
          className="h-[350px] bg-cover bg-center rounded-xl p-6 text-white"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="text-3xl font-semibold">We are Hiring</h3>
          <p className="text-sm mt-1">Apply Today!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
