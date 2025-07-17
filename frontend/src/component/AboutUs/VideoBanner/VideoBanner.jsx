import React from 'react';
import video from '../../../assets/video.mp4';
import { IoPlay } from "react-icons/io5";

function VideoBanner() {
  const videoInfo = [
    {
      id: 1,
      title: "Elit gravida lorem amet porta risus vitae at",
    },
    {
      id: 2,
      title: "Volutpat dui lacus mattis urna platea...",
    },
    {
      id: 3,
      title: "Elementum faucibus netus gravida lacus lorem",
    },
  ];

  return (
    <div className="relative rounded-2xl lg:px-20 md:px-10 px-4 py-20 overflow-hidden text-white">
      {/* Video Section */}
      <div className="relative w-full h-[400px] ">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full rounded-t-2xl bg-[#00000091] z-10">
        </div>

        {/* Centered Text */}
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center mb-4">
            <IoPlay className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Good Life Begins With <br /> A Good Company
          </h1>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="bg-black text-white py-6 px-4 flex flex-col sm:flex-row justify-between gap-4 rounded-b-2xl">
        {videoInfo.map((item) => (
          <div key={item.id} className="flex gap-3 items-start sm:w-1/3">
            <div className="w-7 h-7 flex items-center justify-center bg-teal-600 text-white font-bold rounded">
              {item.id}
            </div>
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <a href="#" className="text-teal-400 text-sm hover:underline">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoBanner;
