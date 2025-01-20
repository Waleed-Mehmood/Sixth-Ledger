import React from "react";
import girlImage from "../assets/image 25.png";
import { MdOutlineShareLocation } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


const ContactSection = () => {
  return (
    <section className="bg-[#212327] text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-orange-500 font-semibold text-lg mb-2">
            Contact With Us
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Leu's Work Together?
          </h1>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-orange-500 p-4 rounded-full mr-4">
              <IoCall className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Have Any Question?</p>
                <p className="text-gray-400">+92 333 2336 927</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-orange-500 p-4 rounded-full mr-4">
                <MdOutlineAttachEmail className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Send Email</p>
                <p className="text-gray-400">abcd@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-orange-500 p-4 rounded-full mr-4">
                <MdOutlineShareLocation className="text-xl" />
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-400">Islamabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center lg:items-start lg:flex-row">
          {/* Form */}
          <div className="bg-white rounded-lg p-6 shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-center mb-6 text-black">
              Contact Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
              />
              <textarea
                placeholder="Message here..."
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
              ></textarea>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Contact
              </button>
            </form>
          </div>

          {/* Girl Image */}
          <div className="mt-6 lg:mt-0 absolute bottom-0 right-0 lg:ml-6 w-1/3 ">
            <img
              src={girlImage}
              alt="Customer Support Girl"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
