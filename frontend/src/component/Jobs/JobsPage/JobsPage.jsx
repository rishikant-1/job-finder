// JobsPage.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Jobs from '../../HomePage/JobSection/Jobs';
import { HiOutlineMenu } from 'react-icons/hi';
import TopCompanies from '../Top-Company/TopCompanies';
import axios from 'axios';

function JobsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [jobs, setJobs] = useState([])
  const [currentPageJobs, setCurrentPageJobs] = useState(1)
  const jobsPerPage = 6;

  const lastIndex = currentPageJobs * jobsPerPage;
  const firstIndex = lastIndex - jobsPerPage;
  const currentJobs = jobs.slice(firstIndex, lastIndex)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/admin/get-all-jobs")
        setJobs(res.data.data.totalJobs)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

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
          {
            currentJobs?.map((data, index) => <Jobs key={index} data={data} />)
          }

          <div className="flex justify-end items-center mt-10 gap-5 pr-10">
            {
              [...Array(Math.ceil(jobs.length/jobsPerPage))].map((_, index) => (
                <button key={index} 
                onClick={() => setCurrentPageJobs(index + 1)}
                className='px-4 rounded-md bg-[#30968849]'>
                  {index+1}
                </button>
              ))
            }
          </div>
        </div>
      </div>
      {/* top companies */}
      <TopCompanies />
    </div>
  );
}

export default JobsPage;
