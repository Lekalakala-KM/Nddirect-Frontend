import React from "react";
import SocialIcons from "./SocialIcons";

const HeroSection = () => {

  return (
    <div className="hero bg-cover bg-center h-[600px] relative bg-[url('/src/assets/team.jpg')] flex justify-center items-center shadow-lg" id="home">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25"></div>
      <div className="flex flex-col justify-center items-center text-[#f0ede8] z-10">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-4 uppercase text-center text-[#7f42ce]">
          ND DIRECT MARKETING
        </h1>
        <p className="text-3xl md:text-6xl font-bold px-5 mb-8 text-center text-[#f0ede8] max-w-[1000px]">
          Connecting People. Growing Brands. Creating Opportunities.
        </p>
      </div>
      <div
        id="heroIcons"
        className="absolute bottom-16 left-10"
      >
        <SocialIcons />
      </div>
    </div>
  );
};

export default HeroSection;
