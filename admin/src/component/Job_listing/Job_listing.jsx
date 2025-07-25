import React from "react";
import { useForm } from "react-hook-form";
import axiosInstace from "../../Api/axiosInstance";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Job_listing = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://job-finder-y1cr.onrender.com/api/admin/job-post", {
        jobTitle: data.jobType,
        companyName: data.company,
        salary: data.salary,
        role: data.role,
        description: data.description,
        skills: data.skills,
        location: data.location,
      },
    {
      withCredentials: true
    })
      console.log(res);

      navigate("/home")
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Job Title"
          {...register("title", { required: "Job title is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}

        <input
          placeholder="Company Name"
          {...register("company", { required: "Company name is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.company && <p className="text-red-600">{errors.company.message}</p>}

        <input
          placeholder="Location"
          {...register("location", { required: true })}
          className="w-full p-2 border rounded"
        />

        <input
          placeholder="Salary"
          type="text"
          {...register("salary")}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Job Description"
          {...register("description", { required: "Description is required" })}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.description && <p className="text-red-600">{errors.description.message}</p>}

        <input
          placeholder="Skills Required (comma-separated)"
          {...register("skills")}
          className="w-full p-2 border rounded"
        />

        <select
          {...register("jobType", { required: true })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>



        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default Job_listing;
