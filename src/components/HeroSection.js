import React, { useState } from "react";
import bg from "../assets/image.png";
import logo from "../assets/Black BG All White Horizontal-100.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  FaSearch,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#202427] bg-opacity-90 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-orange-600 font-bold text-xl">
            <img src={logo} alt="logo" className="w-44 h-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-orange-600">
              Home
            </a>
            <a href="#about" className="text-white hover:text-orange-600">
              About
            </a>
            <a href="#contact" className="text-white hover:text-orange-600">
              Contact
            </a>
            <a href="#more" className="text-white hover:text-orange-600">
              More
            </a>
          </div>

          {/* Search and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-white">
              Call Us: +92-333-233-6927
            </span>
            <button className="text-white hover:text-orange-600">
              <FaSearch />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white lg:hidden focus:outline-none"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 bg-opacity-90 py-4 px-6">
            <a
              href="#home"
              className="block text-white hover:text-orange-600 py-2 "
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white hover:text-orange-600 py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-orange-600 py-2"
            >
              Contact
            </a>
            <a
              href="#more"
              className="block text-white hover:text-orange-600 py-2"
            >
              More
            </a>
            <span className="block text-white py-2">
              Call Us: +92-333-233-6927
            </span>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Social Media Buttons */}
        <div className="hidden md:flex absolute left-4 top-1/4 flex-col items-center space-y-4 z-10">
          <a
            href="#"
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white cursor-pointer"
          >
            <FaFacebookF className="cursor-pointer" />
          </a>
          <a
            href="#"
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto flex flex-col justify-center items-start h-full relative z-10 px-6 sm:px-10 lg:px-24">
          <p className="text-orange-600 text-md mb-2 pt-6">
            This Week Only For World Premier
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
            Inventive and <span className="text-orange-600">interested</span>
            <br /> in innovation
          </h1>
          <p className="text-white text-sm sm:text-lg mb-6 max-w-lg">
            SFR is a highly fragmented asset class. It's easy to lose your way
            amidst billions of data points.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
            Get Started
          </button>
          <div className="md:hidden flex space-x-4 z-10 w-full justify-center align-items-center mt-4">
            <a
              href="#"
              className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
