import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    tripClass: "",
    startDestination: "",
    endDestination: "",
    vehicle: "bmw 3 series",
    pickupDate: "",
    fullname: "",
    tel: "",
    tripType: "one-way",
    pickupTime: "",
    email: "",
    waitingTime: "",
    specialInstructions: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_booking", "contact_form", formData, "XaE6KUFQNDhk6zZ_E")
      .then(
        () => {
          toast.success("Booking confirmed!");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Booking failed. Please try again.");
        }
      );
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="relative bg-[#ef9c33] p-8 md:rounded-lg shadow-lg max-w-lg mx-auto my-16"
      >
        <div className="mb-5">
            <p className="text-3xl text-[#f0ede8] font-bold capitalize mb-4">
                Request Quote:
            </p>
            <p className="font-semibold">Please fill in your details below</p>
        </div>

        <form className="" onSubmit={handleSubmit}>
          <div className="columns-2">
            <input
              type="text"
              required
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />
          </div>
          <div className="columns-2">
            <input
              type="tel"
              required
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Contact Number"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

            <input
              type="email"
              required
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

          </div>

          <input
              type="text"
              name="company"
              id="company"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            >
              <option value="Direct Sales Activation">Direct Sales Activation</option>
              <option value="Customer Acquisition">Customer Acquisition</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Other">Other</option>
            </select>

          <textarea
            name="details"
            id="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="How can we assist you?"
            className="block w-full my-2 p-2 bg-[#f0ede8] rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-black hover:underline text-[#f0ede8] font-medium uppercase tracking-wider  py-2 px-10 rounded-full transition-all duration-400 ease mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
