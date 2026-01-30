import React from 'react'
import ServicesCards from './ServicesCards';

import { GoDash } from "react-icons/go";
import { FaPhoneAlt } from 'react-icons/fa';
import { LuPuzzle } from 'react-icons/lu';


const Services = () => {
  return (
    <section className='py-16' id='services'>
      <div className="sectionHeadings text-center">
        <h2 className="uppercase text-[#7f42ce] font-bold mb-4"><GoDash className="inline"/> Our Services</h2>
        <p className="text-4xl font-bold capitalize mb-5">
          What we do best
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <ServicesCards />
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
        {/* <a
          href="mailto:info@nddirect.co.za"
          className="min-w-[191px] flex items-center capitalize border-1 border-[#7f42ce] bg-[#7f42ce] hover:bg-[#f0ede8] transition-all duration-300 hover:text-[#7f42ce] text-[#f0ede8] font-light hover:font-normal py-2 px-8 rounded-full shadow-md transition-all duration-400 ease"
        >
          <LuPuzzle className="me-1"/>
          <span>partner with us</span>
        </a> */}

        <a
            href="tel:0671931316"
            className="min-w-[191px] flex items-center justify-center capitalize border-1 border-[#ef9c33] bg-[#ef9c33] hover:bg-[#f0ede8] transition-all duration-300 hover:text-[#ef9c33] text-[#f0ede8] font-light hover:font-normal py-2 px-8 rounded-full shadow-md transition-all duration-400 ease"
          >
            <FaPhoneAlt className="me-1 text-sm"/>
            <span>get in touch</span>
          </a>
    
      </div>
    </section>

  )
}

export default Services