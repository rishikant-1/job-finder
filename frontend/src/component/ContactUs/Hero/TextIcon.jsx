import React from 'react'
import SendMessage from './SendMessage'
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";


function TextIcon() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-20 md:px-10 px-4 mt-8'>
      <div className="w-full px-6 py-16 bg-white text-gray-800">
        {/* Title & Subtitle */}
        <div className="text-left mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl  md:text-4xl font-bold mb-4">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="text-gray-600">
            We are committed to helping you grow and succeed. With expert guidance and strong support, we ensure your journey is smooth..
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Call */}
          <div className="flex items-start gap-4">
            <FiPhone className="text-teal-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Call for inquiry</h4>
              <p className="text-gray-600">+257 388-6895</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FiMail className="text-teal-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Send us email</h4>
              <p className="text-gray-600">kramulous@sbcglobal.net</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4">
            <FiClock className="text-teal-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Opening hours</h4>
              <p className="text-gray-600">Mon – Fri: 10AM – 10PM</p>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-start gap-4">
            <FiMapPin className="text-teal-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Office</h4>
              <p className="text-gray-600">19 North Road Piscataway, NY 08854</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SendMessage />
      </div>
    </div>
  )
}

export default TextIcon