import React, { useEffect, useState } from 'react';
import JobList from './JobList';
import { Link } from 'react-router-dom'
import axiosInstace from '../../Api/axiosInstance';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await axios.post("https://job-finder-y1cr.onrender.com/api/admin/getjob-single-admin");

        setJobs(res.data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobData();
  }, []);
  console.log(jobs);

  return (
    <div className="w-full flex flex-col px-10">
      <div className="flex justify-between items-center mt-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">All Jobs</h2>
          <p className="text-sm text-gray-500">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <Link to='/job-listing' className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded">
          Create Job
        </Link>
      </div>
      {/* Visible only on desktop */}
      <ul className="grid-cols-6 list-none mt-20 px-4 text-sm font-semibold text-gray-700 
        hidden md:grid">
        <li className="col-span-2 text-left">Company Name</li>
        <li className="text-left">Job Title</li>
        <li className="text-left">Status</li>
        <li className="text-left">Role</li>
        <li className="text-left">Action</li>
      </ul>

      <div className="flex-1">
        {
          jobs.map((data, index) => <JobList key={index} jobs={data} />)
        }
      </div>
    </div>
  );
}

export default Home;
