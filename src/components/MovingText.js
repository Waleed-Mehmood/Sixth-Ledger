// MovingText.js
import React from 'react';

const MovingText = () => {
  return (
    <div className="overflow-hidden bg-black p-animated">
      <div className="flex animate-marquee whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20 text-white text-1xl sm:text-2xl md:text-3xl font-semibold">
        <div>Accounting And Bookkeeping</div>
        <div>Marketing And Advertising</div>
        <div>IT Support And Consulting</div>
        <div>Human Resource</div>
      </div>
    </div>
  );
};

export default MovingText;
