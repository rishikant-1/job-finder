import React from 'react'
import banner from '../../../assets/banner2.jpg'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='sm:p-20 p-10 h-fit w-full'>
      <div style={{ backgroundImage: `url(${banner})`}} className='sm:p-15 p-8 bg-cover bg-center bg-no-repeat rounded-3xl w-full max-h-[350px] h-[350px] flex flex-col items-center justify-center gap-4 text-center tracking-wide'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl sm:mt-0 mt-3 font-bold text-white'>Create A Better <br /> Future For Yourself</h1>
        <p className='text-white mt-1 sm:mt-4 text-sm opacity-80 max-w-xl'>
          Discover your dream job and unlock new opportunities to shape your career. Helping you take the next step toward professional success and personal growth.
        </p>
        <Link to="job-details" className="py-2 px-3 font-medium bg-[#309688f0] text-white rounded-sm hover:bg-[#309688c4]">Search Job</Link>
      </div>
    </div>
  )
}

export default Banner