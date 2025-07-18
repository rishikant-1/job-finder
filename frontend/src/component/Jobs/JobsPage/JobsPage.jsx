// JobsPage.jsx
import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Jobs from '../../HomePage/JobSection/Jobs';
import { HiOutlineMenu } from 'react-icons/hi';
import TopCompanies from '../Top-Company/TopCompanies';

function JobsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row p-2 md:6 lg:p-10">
        {/* Mobile Toggle Button */}
        <div className="p-4 md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 text-white bg-[#309689] px-4 py-2 rounded"
          >
            <HiOutlineMenu className="text-lg" />
            Filters
          </button>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-full md:w-1/4 p-4">
          <Sidebar isOpen={true} />
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Jobs Section */}
        <div className="w-full md:w-3/4 p-4">
          <Jobs />
          <Jobs />
          <Jobs />
          <Jobs />

          <div className="flex justify-end items-center mt-10 gap-10">
            <div className="flex gap-2">
              <button className="py-1 px-6 bg-white text-[#309689] font-semibold rounded-md border border-[#309689]">1</button>
              <button className="py-1 px-6 bg-[#309689] text-white font-semibold rounded-md">2</button>
            </div>
            <button className="py-1 px-6 bg-white text-[#309689] font-semibold rounded-md border border-[#309689]">Next</button>
          </div>
        </div>
      </div>
      {/* top companies */}
      <TopCompanies />
    </div>
  );
}

export default JobsPage;
