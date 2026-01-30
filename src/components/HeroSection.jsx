import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
// import { GiSurferVan } from "react-icons/gi";
import { MdOutlineEditLocationAlt } from "react-icons/md";

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
        className="absolute bottom-16 left-10 gap-5 flex text-xs text-[#f0ede8] justify-center items-center"
      >
        {/* <span className="capitalize text-l">follow us on</span> */}
        {/* <span className="line bg-[#f0ede8] w-10 h-[1px]"></span> */}
        <a
          href="#"
          target="_blank"
          className="linkedIn text-2xl hover:text-[#f0ede8] text-[#ef9c33] hover:text-xl transition-all duration-300"
        >
           <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/parwendo_/"
          target="_blank"
          className="instagram text-2xl hover:text-[#f0ede8] text-[#ef9c33] hover:text-xl transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567669467718"
          target="_blank"
          className="facebook text-2xl hover:text-[#f0ede8] text-[#ef9c33] hover:text-xl transition-all duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://wa.me/27730687922"
          target="_blank"
          className="whatsapp text-2xl hover:text-[#f0ede8] text-[#ef9c33] hover:text-xl transition-all duration-300"
        >
          <ImWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
