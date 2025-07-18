import React, { useEffect, useState } from 'react'
import Hero from './Hero/Hero'
import Jobs from './JobSection/Jobs'
import { Link } from 'react-router-dom'
import Category from './Category/Category'
import Blog from './Blog/Blog'
import CompanyStats from './CompanyStats'
import Banner from './Banners/Banner'
import TestiMonials from './TestiMonials/TestiMonials'
import NewsInfoBlock from './Info-Block/NewaInfoBlock'
import axios from 'axios'

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/admin/get-all-jobs")
        setData(res.data.data.totalJobs)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  
  return (
    <div>
      <Hero />
      <div className='container mx-auto sm:p-20 p-10'>
        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Recent Jobs Available</h1>
        <div className='mt-4 flex items-start justify-between mb-15'>
          <p className='text-gray-600 text-sm max-w-xs w-full'>Explore the latest job openings in various fields. Find your dream job today!</p>
          <Link to="/jobs" className='text-[#309689] sm:font-semibold font-medium text-nowrap hover:underline mt-2 text-md sm:text-xl'>View All</Link>
        </div>
        {
          data?.map((data, index) => <Jobs key={index} data={data} />)
        }
        
      </div>
      <Category />
      <Blog />
      <CompanyStats />
      <Banner />
      <TestiMonials />
      <NewsInfoBlock />
    </div>
  )
}

export default Home