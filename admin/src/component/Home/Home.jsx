import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import JobList from './JobList';
import axios from 'axios';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/admin/job-post"); 
        console.log("Fetched jobs:", res.data);
        setJobs(res.data?.data || []); // assuming backend returns { data: [...] }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobData();
  }, []);

  return (
    <div className="w-full flex">
      <div className="flex-1 p-4">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export default Home;
