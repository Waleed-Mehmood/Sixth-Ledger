// MovingText.js
import React from 'react';

const MovingText = () => {
  return (
    <div className="overflow-hidden bg-black p-animated">
      <div className="flex animate-marquee whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 text-white text-1xl sm:text-2xl md:text-3xl font-semibold">
        {Array(10) // Duplicate the text list for seamless looping
          .fill([
            "Bookkeeping",
            "Payroll Management",
            "Internal Audit and Control Test",
            "Tax Computation",
          ])
          .flat()
          .map((text, index) => (
            <div key={index}>{text}</div>
          ))}
      </div>
    </div>
  );
};

export default MovingText;
