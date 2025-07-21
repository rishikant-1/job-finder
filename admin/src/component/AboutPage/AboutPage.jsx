import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      <p className="text-lg text-gray-600 mb-4">
        Welcome to <span className="font-semibold text-violet-600">StackHire</span> – where innovation meets opportunity.
        We are a passionate team of developers, designers, and tech enthusiasts dedicated to helping individuals and businesses find the right talent and grow their careers.
      </p>

      <p className="text-lg text-gray-600 mb-4">
        Our mission is to simplify job discovery and streamline recruitment through powerful tools and user-friendly interfaces.
        Whether you're a company searching for top-notch professionals or a candidate ready for your next big opportunity — we’ve got you covered.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">What We Do</h2>

      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        <li>Offer an intuitive platform for posting and managing job listings</li>
        <li>Connect employers with the right talent through smart filtering</li>
        <li>Help job seekers present their profiles effectively</li>
        <li>Deliver modern UI/UX for seamless experiences</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div>
            <h3 className="text-lg font-medium text-violet-600">Innovation</h3>
            <p className="text-sm mt-1">We embrace new ideas and technology to drive progress.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-violet-600">Integrity</h3>
            <p className="text-sm mt-1">We operate with honesty and transparency at every level.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-violet-600">Impact</h3>
            <p className="text-sm mt-1">We aim to make a positive difference in people’s lives and careers.</p>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} StackHire. All rights reserved.
      </p>
    </div>
  );
};

export default AboutPage;
