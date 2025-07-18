import React from 'react'
import NavBar from '../NavBar'
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBrain,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaFileAlt,
  FaGift,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function JobDetail() {
  return (
    <div>
      <div className='bg-zinc-900'>
        <NavBar />
      </div>
      <section className="max-w-5xl mx-auto p-6 my-10 bg-white border rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Full Stack Developer (MERN Stack)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaBuilding /> Company:
            </div>
            <p>CodeSqudz Technologies</p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaMapMarkerAlt /> Location:
            </div>
            <p>Remote / Delhi NCR</p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaBriefcase /> Job Type:
            </div>
            <p>Full-time</p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaBrain /> Experience:
            </div>
            <p>1–3 Years</p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaMoneyBillWave /> Salary:
            </div>
            <p>₹25,000 – ₹50,000/month</p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              <FaClock /> Apply Before:
            </div>
            <p>31st July 2025</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <FaTools /> Skills Required:
          </div>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
            <li>MERN Stack – MongoDB, Express, React, Node.js</li>
            <li>JavaScript, REST APIs, Git</li>
            <li>HTML, CSS, Tailwind</li>
            <li>JWT, Mongo Atlas, Authentication</li>
            <li>Bonus: Docker, AWS, CI/CD</li>
          </ul>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <FaFileAlt /> Job Description:
          </div>
          <p className="text-sm text-gray-700">
            Hum ek passionate developer dhund rahe hain jo real-world scalable web
            apps banane me expert ho. Tumhe full ownership milegi features ki,
            aur team ke sath collaborate karoge from idea to deployment.
          </p>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <FaGift /> Perks:
          </div>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
            <li>Remote Work</li>
            <li>Flexible Timing</li>
            <li>Startup Environment</li>
            <li>Learning Budget & Mentorship</li>
          </ul>
        </div>

        <div className="mt-6 mb-10">
          <div className="flex items-center gap-2 font-semibold text-gray-700 mb-1">
            <FaEnvelope /> Apply Karein:
          </div>
          <p className="text-sm">
            Send your resume to:{" "}
            <Link
              to="mailto:jobs@codesqudz.com"
              className="text-blue-600 underline"
            >
              jobs@codesqudz.com
            </Link>{" "}
            ya fill karo form:{" "}
            <Link
              to="/apply-form"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Form
            </Link>
          </p>
        </div>
        <Link
          to="/home"
          className="rounded-md py-1 px-3 bg-blue-500 text-white mt-"
        >
          Back
        </Link>
      </section>
    </div>
  )
}

export default JobDetail