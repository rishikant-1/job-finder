import React from 'react'
import { CiBookmarkPlus } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { LuClock } from "react-icons/lu";
import { TbDeviceIpadHorizontalCode } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Jobs({ data }) {
  
  return (
    <div className="py-5 px-0 sm:py-10 sm:px-10 mb-5 shadow-sm rounded-lg grid gap-8">
      <div className="flex items-center justify-between">
        <span className="text-[#309689] rounded-sm py-1 px-2 bg-[#3096881d] text-xs sm:text-base">10 min ago</span>
        <CiBookmarkPlus className="text-2xl sm:text-3xl font-light" />
      </div>
      <div className="flex items-center rounded-lg gap-3 py-2">
        <img className="w-8 h-8 sm:w-10 sm:h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0w6qiEjDWopTV3tllAh_sKaQbe3dI588aJA&s" alt="cart-logo" />
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{data?.jobTitle}</h2>
          <p className="opacity-75 text-xs sm:text-base">{data?.companyName}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] items-start">
        {/* Info section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-3 text-xs sm:text-sm opacity-80">
          <p className="flex items-center">
            <TbDeviceIpadHorizontalCode className="text-lg sm:text-xl text-[#309689] mr-2" />
            {data?.jobTitle}
          </p>
          <p className="flex items-center">
            <LuClock className="text-lg sm:text-xl text-[#309689] mr-2" />
            {data?.jobType}
          </p>
          <p className="flex items-center">
            <TfiWallet className="text-lg sm:text-xl text-[#309689] mr-2" />
            ${data?.salary} - $329990
          </p>
          <p className="flex items-center">
            <SlLocationPin className="text-lg sm:text-xl text-[#309689] mr-2" />
            {data?.location}
          </p>
        </div>

        {/* Button section */}
        <div className="w-full md:w-auto">
          <Link
            to={`/job-details/${data?._id}`}
            className="w-full block text-center py-2 px-3 font-medium bg-[#309688f0] text-white rounded-sm hover:bg-[#309688c4] text-xs sm:text-base"
          >
            Job Details
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Jobs