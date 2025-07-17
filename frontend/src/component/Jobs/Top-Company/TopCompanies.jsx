import React from 'react';
import { FaInstagram, FaApple, FaHamburger } from 'react-icons/fa';
import { SiTesla } from 'react-icons/si';

const companies = [
  {
    icon: <FaInstagram size={28} />,
    name: 'Instagram',
    jobs: 8,
    description: 'Join the creative force that’s redefining visual storytelling and social reach.',
  },
  {
    icon: <SiTesla size={28} />,
    name: 'Tesla',
    jobs: 18,
    description: 'Be a part of cutting-edge innovations transforming transportation and energy.',
  },
  {
    icon: <FaHamburger size={28} />,
    name: "McDonald's",
    jobs: 12,
    description: 'Support a global brand committed to quality, service, and sustainability.',
  },
  {
    icon: <FaApple size={28} />,
    name: 'Apple',
    jobs: 9,
    description: 'Shape the future of technology with design and innovation at the core.',
  },
];

function TopCompanies() {
  return (
    <section className="bg-[#e9f6f5] py-10 px-4 md:px-8 lg:px-16 pb-20">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Top Companies Hiring</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Discover top employers actively looking for talent like you. Explore exciting opportunities with leading global brands.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
          >
            <div className="bg-black text-white p-2 rounded-lg mb-4">
              {company.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{company.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{company.description}</p>
            <span className="text-teal-700 bg-[#d7f0ee] px-4 py-1 text-sm rounded-full font-medium">
              {company.jobs} open jobs
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;
