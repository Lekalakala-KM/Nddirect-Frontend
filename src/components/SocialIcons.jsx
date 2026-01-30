import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
// import { GiSurferVan } from "react-icons/gi";
// import { MdOutlineEditLocationAlt } from "react-icons/md";

const SocialIcons = () => {
  return (
    <div className="gap-5 flex text-xs text-[#f0ede8] justify-center items-center mt-10">
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
  )
}

export default SocialIcons