import React from "react";
import logo from "../assets/Black BG All White Horizontal-100.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact and Information Section */}
        <div className="text-center md:text-left w-full  sm:w-1/3">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start mb-8 md:mb-0 rounded-lg">
            <img
              src={logo}
              alt="logo"
              className="w-52 h-auto rounded-lg mb-2"
            />
          </div>

          <p className="text-sm mb-4 w-full">
          Simplifying Finance, Empowering Growth.
          Trusted bookkeeping and payroll solutions tailored to your success.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaBehanceSquare />
            </a>
            <a href="#" className="hover:text-gray-400">
            <FaSquareInstagram />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left ">
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 mb-4 bg-gray-700 text-white rounded w-full md:w-auto"
          />
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            GO
          </button>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>© 2025 Sixth Ledger.</p>
      </div>
    </footer>
  );
};

export default Footer;
