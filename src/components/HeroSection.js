import React, { useState } from "react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-orange-600 font-bold text-xl">Logo</div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
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
            <span className="text-white">Call Us: +92-333-233-6927</span>
          </div>

          {/* Search and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-orange-600">
              <i className="fas fa-search"></i>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white md:hidden focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 py-4 px-6">
            <a
              href="#home"
              className="block text-white hover:text-orange-600 py-2"
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
          backgroundImage:
            "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-start h-full relative z-10 px-6">
          <p className="text-orange-600 text-sm mb-2">This Week Only For World Premier</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Inventive and <span className="text-orange-600">interested</span> in
            innovation
          </h1>
          <p className="text-white text-lg mb-6 max-w-lg">
            SFR is a highly fragmented asset class. It's easy to lose your way
            amidst billions of data points.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
