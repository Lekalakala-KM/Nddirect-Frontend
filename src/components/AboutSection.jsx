import React from "react";
import summary from "../assets/foneyam.jpg";

import { GoDash } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

import img1 from "../assets/promo.jpg";
import img2 from "../assets/field.jpg";
import img3 from "../assets/foneyam.jpg";
import img4 from "../assets/training2.jpg";  

const AboutSection = () => {
  return (
    <div className=" pt-16 px-4 lg:px-0 max-w-6xl mx-auto" id="about">
      <div className="lg:flex justify-center items-center mx-auto gap-5 lg:pt-8">
        <img
          src={summary}
          alt=""
          className="hidden lg:block h-[450px] max-w-[420px] object-cover block self-center rounded-[7px] ms-16 shadow-lg"
        />
        <div className="px-4 flex flex-col items-center lg:items-start text-center lg:text-start">
          <div className="sectionHeadings">
            <h2 className="uppercase text-[#7f42ce] font-bold mb-4"><GoDash className="inline"/> About us</h2>
            <p className="text-4xl font-bold capitalize mb-4 leading-[1.2] text-center lg:text-start lg:max-w-[400px]">
              What’s In Our DNA
            </p>
          </div>
            
          <p className="mb-5 text-center font-thin text-l lg:text-start lg:max-w-[600px]">
            WND Direct Marketing is a dynamic, 100% South African-owned company dedicated to bridging the gap between businesses and their target markets. We combine strategic marketing campaigns, customer acquisition programs, and exceptional service delivery to ensure sustainable growth for our partners. <br/>

We believe in empowering individuals and communities through opportunity, training, and mentorship—because when people grow, businesses thrive.
          </p>
          <a
            href="tel:0671931316"
            className="flex items-center justify-center capitalize border-1 border-[#7f42ce] bg-[#7f42ce] hover:bg-[#f0ede8] transition-all duration-300 hover:text-[#7f42ce] text-[#f0ede8] font-light hover:font-normal py-2 px-8 rounded-full shadow-md transition-all duration-400 ease"
          >
            <FaPhoneAlt className="me-1 text-sm"/>
            <span>get in touch</span>
          </a>
        </div>
      </div>

      <div className='lg:hidden flex h-[300px] justify-center w-full overflow-hidden mt-16 mx-auto shadow-lg rounded-[7px]'>
        <img src={img1} alt="" className='block object-cover object-top h-full w-full'/>
        <img src={img2} alt="" className='block object-cover object-top h-full w-full'/>
        <img src={img3} alt="" className='block object-cover object-top h-full w-full'/>
        <img src={img4} alt="" className='block object-cover object-top h-full w-full'/>
      </div>
    </div>
  );
};

export default AboutSection;
