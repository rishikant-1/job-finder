import React from 'react'
import NavBar from '../NavBar';
import JobsPage from './JobsPage/JobsPage';

function JobMainPage() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-50 bg-zinc-900'>
        <NavBar />
        <h1 className='text-5xl font-bold text-center mt-8 text-white opacity-75'>Jobs...!</h1>
      </div>
      <JobsPage />
    </div>
  )
}

export default JobMainPage