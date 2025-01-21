import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = ({ scrollToSection, refs }) => {
  const { contactRef, faqsRef } = refs;
  return (
    <div className="bg-black text-white py-6 px-16 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2">
          <span>Address: DHA Islamabad</span>
          <span className="text-gray-400">/ info@sixthledger.com</span>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end items-center space-x-6 mt-2 md:mt-0">
          <Link className="hover:text-gray-300 transition-colors duration-200" onClick={() => scrollToSection(faqsRef)}>
            FAQ's
          </Link>
          <Link
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
