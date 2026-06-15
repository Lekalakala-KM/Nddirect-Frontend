import React from "react";
import summary from "../assets/leaders.jpg";

import { LuPuzzle } from "react-icons/lu";

import InfiniteGallery from "./InfiniteGallery";

const CTA = () => {
  return (
    <div className="py-16" id="about ">
      <div className="lg:flex justify-center items-center  max-w-[1000px] mx-auto gap-5 lg:pt-8 px-4 lg:px-0">
        <div className="px-4 flex flex-col items-center lg:items-start text-center lg:text-start lg:w-[40%]">
          <h2 className="text-4xl font-bold capitalize mb-4 leading-[1.2] text-center lg:text-start lg:max-w-[400px]">
            Marketing that
            <span className="text-[#7f42ce]">
              {" "} drives growth
            </span>{" "} and buids trust
          </h2>
          <p className="mb-4 text-center font-thin text-l lg:text-start lg:w-[400px]">
            We connect businesses with customers through powerful direct sales strategies and exceptional service delivery. We don’t just market — we create lasting relationships that fuel sustainable success.
          </p>
          <a
            href="mailto:info@nddirect.co.za"
            className="flex items-center capitalize border-1 border-[#7f42ce] bg-[#7f42ce] hover:bg-[#f0ede8] transition-all duration-300 hover:text-[#7f42ce] text-[#f0ede8] font-light hover:font-normal py-2 px-8 rounded-full shadow-md transition-all duration-400 ease"
          >
            <LuPuzzle className="me-1"/>
            <span>partner with us</span>
          </a>
        </div>
        <img
          src={summary}
          alt=""
          className="hidden lg:block h-[450px] max-w-[320px] object-cover block self-center rounded-[7px] ms-16 shadow-lg"
        />
      </div>

      <InfiniteGallery/>
    </div>
  );
};

export default CTA;
