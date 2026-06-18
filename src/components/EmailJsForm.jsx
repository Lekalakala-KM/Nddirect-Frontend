import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailJsForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_request", "contact_form", form.current, {
        publicKey: 'hYGK-RCVVRbKbxbtd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log("Failed to send request:", error);
          toast.error("Request failed. Please try again.");
        },
      );
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="relative bg-[#ef9c33] p-8 md:rounded-lg shadow-lg max-w-lg mx-auto my-16"
      >
        <div className="mb-5">
            <p className="text-2xl font-bold uppercase mb-4">
                Service Enquiry
            </p>
            <p className="font-light text-[#f0ede8]">
                We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
        </div>

        <form className="" onSubmit={sendEmail} ref={form}>
          <div className="columns-2">
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="First Name"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />
            <input
              type="text"
              name="surname"
              id="surname"
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
              placeholder="Contact Number"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Email Address"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

          </div>

          <input
              type="text"
              name="company"
              id="company"
              placeholder="Company Name"
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            />

            <select
              name="service"
              id="service"
              required
              className="block w-full p-2 mb-2 bg-[#f0ede8] rounded"
            >
                <option value="">Select a service</option>
              <option value="Direct Sales Activation">Direct Sales Activation</option>
              <option value="Customer Acquisition">Customer Acquisition</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Other">Other</option>
            </select>

          <textarea
            name="details"
            id="details"
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

export default EmailJsForm;
