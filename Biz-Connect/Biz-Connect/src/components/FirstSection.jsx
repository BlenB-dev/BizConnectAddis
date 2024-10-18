import React from "react";
import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";
const FirstSection = () => {
  return (
    <header className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-bold text-center">
            Biz-Connect
          </span>
          <span> Find your Startups And Serviceprovider.</span>
        </h1>

        <div className="flex flex-col md:flex-row mt-8 sm:mt-10 justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-md shadow-orange-400"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-md shadow-orange-400"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </header>
  );
};

export default FirstSection;
