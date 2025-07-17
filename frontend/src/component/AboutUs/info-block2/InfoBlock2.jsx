import React from 'react';
import { FaAward, FaFileAlt, FaUserTie, FaBuilding } from 'react-icons/fa';
import image1 from '../../../assets/info2_1.jpg';
import image2 from '../../../assets/info2_2.jpg';
import image3 from '../../../assets/info2_3.jpg';

function InfoBlock2() {
  const benefits = [
    { icon: <FaAward className="text-xl" />, name: 'Quality Job' },
    { icon: <FaFileAlt className="text-xl" />, name: 'Resume builder' },
    { icon: <FaBuilding className="text-xl" />, name: 'Top Companies' },
    { icon: <FaUserTie className="text-xl" />, name: 'Top Talents' },
  ];


  return (
    <div className='w-full bg-white py-12 lg:px-20 md:px-10 px-4 flex flex-col md:flex-row gap-10 items-center'>

      {/* Left Side Images */}
      <div className='flex gap-4 order-2'>
        <div className='flex flex-col gap-4 w-1/2'>
          <img src={image2} alt='job-img-2' className='rounded-2xl h-[190px] object-cover' />
          <img src={image3} alt='job-img-3' className='rounded-2xl h-[190px] object-cover' />
        </div>
        <img src={image1} alt='job-img-1' className='rounded-2xl w-1/2 h-[400px] object-cover' />
      </div>

      {/* Right Side Text */}
      <div className='md:w-1/2 text-center md:text-left order-1'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#0f766e]'>
          We’re Only Working <br /> With The Best
        </h2>
        <p className='text-gray-600 mb-6'>
          Ulricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit.
        </p>

        {/* Benefits */}
        <div className='grid grid-cols-2 gap-4 ml-20 md:ml-0'>
          {benefits.map((b, i) => (
            <div key={i} className='flex items-center gap-2'>
              {b.icon}
              <span className='text-sm font-medium text-gray-800'>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoBlock2;
