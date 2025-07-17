import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Marco Kihn',
    role: 'Happy Client',
    title: 'Outstanding Support!',
    text: 'The team was incredibly responsive and helpful. I found my dream job within a week of signing up!',
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Kristin Hester',
    role: 'Happy Client',
    title: 'Super Simple Process',
    text: 'Uploading my resume and applying for jobs took minutes. The process is smooth and efficient.',
    image: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Zion Cisneros',
    role: 'Happy Client',
    title: 'Highly Recommended!',
    text: 'This platform gave me access to top-tier companies I never thought I could reach. Truly a game changer!',
    image: 'https://i.pravatar.cc/100?img=3',
  },
];

function TestiMonials() {
  return (
    <div className="min-h-[95vh] py-20 px-6 md:px-10 bg-[#ebf5f4] text-center">
      {/* Section Header */}
      <h1 className="text-4xl md:text-5xl font-bold">Testimonials from Our Customers</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
        Hear from real users who’ve advanced their careers and hired amazing talent using our platform.
      </p>

      {/* Cards */}
      <div className="mt-15 flex flex-wrap justify-center gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white max-w-sm p-10 rounded-2xl shadow-md text-left flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-3">
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">{item.text}</p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>

              <FaQuoteRight className="text-teal-600 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestiMonials;
