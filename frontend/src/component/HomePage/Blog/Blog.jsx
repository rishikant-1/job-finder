import React from 'react'
import blog from '../../../assets/blog2.jpg'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 md:px-10 px-6 py-20 gap-10 md:gap-20 m-auto'>
      <img src={blog} className='w-[76vh] relative rounded-4xl' alt="blog-image" />
      <div className='flex flex-col gap-10'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl lg:font-bold font-semibold'>Good Life Begins With <br /> A Good Company</h1>
        <p className='font-sans opacity-75'>
          A good company can transform your life in countless ways. It provides not only professional growth but also a sense of belonging and purpose. Being surrounded by supportive colleagues and a positive work environment encourages creativity, collaboration, and personal development. Ultimately, a good company helps you achieve your goals and enjoy your journey...
        </p>
        <div className='flex items-center justify-between'>
          <Link to="job-details" className="py-2 px-3 font-medium bg-[#309688f0] text-white rounded-sm hover:bg-[#309688c4]">Search Job</Link>
          <Link to="/blog" className='text-[#309689] font-md hover:underline mt-2 text-md'>Learn more</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog