import React from 'react';
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.jpg"
import logo4 from "../assets/logo4.jpg"
import logo5 from "../assets/logo5.jpg"
import logo6 from "../assets/logo6.jpg"

const MovingLogos = () => {
  return (
    <div className="overflow-hidden bg-[#202427] p-animated">
      <div className="flex animate-marquee whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
        {Array(2) // Duplicate the list twice for seamless looping
          .fill([
            logo1,
            logo2,
            logo3,
            logo4,
            logo5,
            logo6,
          ])
          .flat()
          .map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
            />
          ))}
      </div>
    </div>
  );
};

export default MovingLogos;
