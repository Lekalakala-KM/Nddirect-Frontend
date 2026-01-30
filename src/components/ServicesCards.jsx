import React from "react";
import img1 from "../assets/promo.jpg";
import img2 from "../assets/leaders2.jpg";
import img3 from "../assets/customer.jpeg";

const servicesCardsData = [
  {
    id: 1,
    title: "Direct Sales Activation",
    description: "We build visibility and trust by promoting products and services through authentic face-to-face customer interactions.",
    image: img1,
  },
  {
    id: 2,
    title: "Customer Acquisition",
    description: "We help brands connect, engage, and grow loyal customers through tailored outreach strategies.",
    image: img2,
  },
  {
    id: 3,
    title: "Customer Service",
    description: "We ensure every customer enjoys a positive buying and post-sale experience, securing repeat business and referrals.",
    image: img3,
  },
];

const ServicesCards = () => {
  return (
    <div id="servicesCards" className="flex justify-center pt-8">
      <div className=" w-full flex flex-wrap justify-center gap-8 md:gap-10 ">
    {servicesCardsData.map((service) => (
      <div
        key={service.id}
        className=" bg-[#211a44] text-[#f0ede8] rounded-[7px] shadow-md overflow-hidden text-center w-full md:w-[270px]"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl text-[#ef9c33] font-semibold mb-2">{service.title}</h3>
          <p className="font-light">{service.description}</p>
        </div>
      </div>
    ))}
  </div>

    </div>
  );
};

export default ServicesCards;