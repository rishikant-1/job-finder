import React from 'react';

function InfoBlock() {
  const infoImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div className="w-full h-auto bg-white py-40 lg:px-20 md:px-10 px-4">

      {/* Info Content */}
      <section className="flex flex-col items-center gap-8">
        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left w-full">
          <div className="max-w-xl mx-auto md:mx-0">
            <h2 className="text-4xl font-bold mb-4 text-[#0f766e]">Why Choose Us?</h2>
            <h2 className='text-2xl font-bold mb-4'>The Smarter Way to Hire and Get Hired</h2>
          </div>
          <div className="max-w-2xl mx-auto md:mx-0">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is to simplify the hiring process for both candidates and employers.
              With intuitive tools, detailed listings, and personalized recommendations.
              We connect talent with opportunity, ensuring a seamless experience from application to placement.
              Whether you're a fresher or an experienced professional, our platform ensures visibility, transparency,
              and value throughout your job-seeking journey.
            </p>
          </div>
        </div>
        <div className="w-full h-[400px]">
          <img
            src={infoImage}
            alt="about us"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </section>
    </div>
  );
}

export default InfoBlock;
