import React from 'react';

const statsData = [
  {
    number: '12k+',
    title: 'Clients worldwide',
    desc: 'We proudly serve over 12,000 clients across multiple industries and continents.',
  },
  {
    number: '20k+',
    title: 'Active resume',
    desc: 'Thousands of professionals are actively using our platform to showcase their talent.',
  },
  {
    number: '18k+',
    title: 'Companies',
    desc: 'Trusted by more than 18,000 companies to find the best talent for their teams.',
  },
];

const CompanyStats = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {statsData.map((item, index) => (
          <div key={index} className="text-center md:text-left max-w-xs">
            <h2 className="text-teal-600 text-3xl font-bold">{item.number}</h2>
            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
