import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 text-white text-lg font-semibold mb-4">
            <FiBriefcase size={20} />
            <span>Job</span>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed">
            Discover meaningful opportunities, build your career, and grow with companies that value talent and ambition.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">For Candidates</a></li>
            <li><a href="#">For Employers</a></li>
          </ul>
        </div>

        {/* Job Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Job Categories</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Telecommunications</li>
            <li>Hotels & Tourism</li>
            <li><a href='https://stackhire-8hqy.onrender.com'>As a Recruter</a></li>
            <li>Education</li>
            <li>Financial Services</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest job trends and career tips. Sign up now!
          </p>
          <input
            type="email"
            name='email'
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-md text-white border border-gray-300 mb-4"
          />
          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold">
            Subscribe now
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© Copyright Job Portal 2024. Designed by Rishi Kant</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="underline underline-offset-2">Privacy Policy</a>
          <a href="#" className="underline underline-offset-2">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
