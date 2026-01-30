import React from 'react'

import ContactForm from './ContactForm'

import { GoDash } from 'react-icons/go'
import { ImLocation, ImPhone } from 'react-icons/im'
import { IoIosMail } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa'
import SocialIcons from './SocialIcons'

const Contact = () => {
  return (
    <div id="contacts" className='py-16'>
        <div className="sectionHeadings text-center">
            <h2 className="uppercase text-[#7f42ce] font-bold mb-4"><GoDash className="inline"/> Contact us</h2>
            <p className="text-4xl font-bold capitalize mb-4 leading-[1.2] max-w-[600px] mx-auto">
              We’re Ready to Listen, Support, and Deliver.
            </p>
        </div>

        <div className="flex flex-col justify-evenly items-center lg:flex-row gap-10 max-w-6xl mx-auto mt-10">
            <div className='order-2 lg:order-none px-4 lg:px-0 text-center lg:text-start'>
                <div className="sectionHeadings">
                    <h2 className="capitalize text-3xl font-bold mb-2"> points of contact us</h2>
                    <span className="block mb-8 bg-[#7f42ce] w-[130px] h-[4px] mx-auto lg:mx-0"></span>
                </div>  

                <div className="md:ms-4 lg:max-w-[250px]">
                    <a
                        href="tel:0671931316"
                        className="mb-3 block font-thin hover:text-[#b37e56] transition-all duration-300"
                    >
                        <FaWhatsapp className="inline me-2 text-xl text-[#7f42ce]" />
                        067 193 1316
                    </a>

                    <a
                        href="https://wa.me/+27671931316"
                        className="mb-3 block font-thin hover:text-[#b37e56] transition-all duration-300"
                    >
                        <ImPhone className="inline me-2 text-xl text-[#7f42ce]" />
                        067 193 1316
                    </a>

                    <a
                        href="mailto:info@nddirect.co.za"
                        className="mb-3 block font-thin hover:text-[#b37e56] transition-all duration-300"
                    >
                        <IoIosMail className="inline me-2 text-xl text-[#7f42ce]" /> info@nddirect.co.za
                    </a>

                    <a
                    href="https://maps.app.goo.gl/bbXyprVUsxCZ4aw18"
                    target="_blank"
                    className="flex justify-center lg:justify-start items-center  mb-3 block font-thin hover:text-[#b37e56] transition-all duration-300"
                    >
                        <ImLocation className="block lg:me-2 text-xl text-[#7f42ce]" /> 
                        <span className='block max-w-[200px]'>
                            A26 J.D.N House, Shortmarket Street, Cape Town, 7100
                        </span>
                    </a>

                    <SocialIcons/>
                </div>
            </div>
            <ContactForm className="order-1 lg:order-none"/>
        </div>
    </div>
  )
}

export default Contact