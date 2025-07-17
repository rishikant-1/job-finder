import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { MdOutlineCheckCircle } from 'react-icons/md';

const steps = [
  {
    icon: <FiUserPlus className="text-3xl text-[#0f766e]" />,
    title: 'Create Account',
    desc: 'Start your journey by creating a free account in seconds.',
  },
  {
    icon: <HiOutlineDocumentArrowUp className="text-3xl text-[#0f766e]" />,
    title: 'Upload Resume',
    desc: 'Easily upload your resume to get matched with the right jobs.',
  },
  {
    icon: <HiOutlineBriefcase className="text-3xl text-[#0f766e]" />,
    title: 'Find Jobs',
    desc: 'Browse thousands of jobs and find your best fit.',
  },
  {
    icon: <MdOutlineCheckCircle className="text-3xl text-[#0f766e]" />,
    title: 'Apply Job',
    desc: 'Submit applications directly and track progress easily.',
  },
];

function HowItWork() {
  return (
    <section className="bg-[#ebf5f4] py-12 lg:px-20 md:px-10 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">How it works</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Follow four simple steps to land your dream job with ease and confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm py-8 px-4">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWork;
