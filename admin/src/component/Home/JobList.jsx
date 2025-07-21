import React from "react";


const JobList = ({ jobs }) => {


  return (
    <section className="grid grid-cols-6 rounded-md shadow-md py-4">

      <div className="px-6 py-4 flex items-center gap-4 col-span-2">
        <span className="h-10 w-10 text-2xl font-semibold rounded-full bg-purple-200 flex items-center justify-center">rt</span>
        <div>
          <div className="font-medium text-gray-900">{jobs.companyName}</div>
          <div className="text-gray-500 text-xs">StackHire@gmail.com</div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="text-gray-900">{jobs.jobTitle}</div>
        <div className="text-gray-500 text-xs">{jobs.location}</div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {jobs.isActive}
        </span>
      </div>
      <div className="px-6 py-4 text-gray-900">{jobs.jobType}</div>
      <div className="px-6 py-4 text-sm text-violet-600 hover:underline cursor-pointer">Edit</div>

    </section>
  );
};

export default JobList;
