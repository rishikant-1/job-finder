import React, { useEffect, useState } from 'react';
import JobList from './JobList';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await axios.post("/api/admin/getjob-single-admin");

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
      <ul className='grid grid-cols-6 list-none mt-20'>
            <li className="col-span-2 pl-6 text-left text-xl font-bold text-gray-700">Company Name</li>
            <li className="text-left pl-6 font-semibold text-gray-700">Job Title</li>
            <li className="text-left pl-6 font-semibold text-gray-700">Status</li>
            <li className="text-left pl-6 font-semibold text-gray-700">Role</li>
            <li className="text-left pl-6 font-semibold text-gray-700">Action</li>
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
