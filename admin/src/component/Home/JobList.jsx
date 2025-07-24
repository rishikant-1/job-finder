import React from "react";


const JobList = ({ jobs }) => {


  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-y-2 md:gap-y-0 px-4 py-4 border-b">
      {/* Company Name */}
      <div className="flex items-center gap-4 md:col-span-2">
        <span className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-xl">
          {
            jobs.companyName
              .split(" ")
              .map(name => name[0])
              .join("")
          }
        </span>
        <div>
          <p className="font-medium">{jobs.companyName}</p>
          <p className="text-xs text-gray-500">StackHire@gmail.com</p>
        </div>
      </div>

      {/* Job Title */}
      <div>
        <p className="font-semibold">{jobs.jobTitle}</p>
        <p className="text-xs text-gray-500">{jobs.location}</p>
      </div>

      {/* Status */}
      <div>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
      ${jobs.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {jobs.isActive ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Role */}
      <div>{jobs.jobType}</div>

      {/* Action */}
      <div className="text-violet-600 text-sm hover:underline cursor-pointer">Edit</div>
    </section>

  );
};

export default JobList;
