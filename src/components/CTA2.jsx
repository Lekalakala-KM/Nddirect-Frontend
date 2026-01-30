import React from "react";

import { GoDash } from "react-icons/go";
import { IoMdMail } from "react-icons/io";

const CTA2 = () => {
  return (
    <div className="hero bg-cover bg-center h-[600px] relative bg-[url('/src/assets/team2.jpg')] flex justify-center items-center shadow-lg" id="home">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
      <div className="container px-8 py-10 flex flex-col items-center md:items-start text-center md:text-start z-10 text-[#f0ede8] lg:w-[1000px]">
        <div className="sectionHeadings">
          <h3 className="uppercase font-bold mb-8"><GoDash className="inline"/> we are hiring</h3>
          <p className="text-5xl text-[#7f42ce] font-bold uppercase mb-4 leading-[1.1] max-w-[400px]">
            Join Our Winning Team
          </p>
        </div>
        <p className="mb-2 font-bold text-xl max-w-[600px]">Looking for a career in direct marketing and sales? </p>
        <p className="mb-5 text-l max-w-[600px]">At ND Direct Marketing, we provide training, mentorship, and growth opportunities to help you succeed. Whether you’re starting out or looking to advance, we’ll give you the tools to thrive.
          </p>
        <a
          href="mailto:info@nddirect.co.za?subject=Application for sales position"
          className="flex items-center justify-center capitalize border-1 border-[#7f42ce] bg-[#7f42ce] hover:bg-[#f0ede8] transition-all duration-300 hover:text-[#7f42ce] text-[#f0ede8] font-light hover:font-normal py-2 px-8 rounded-full shadow-md transition-all duration-400 ease"
        >
          <IoMdMail className="me-1 text-sm"/>
          <span>get in touch</span>
        </a>
      </div>
    </div>
  );
};

export default CTA2;
