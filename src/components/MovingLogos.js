import React from 'react';
import logo1 from '../assets/service1.png'; // Update with your logo file paths
import logo2 from '../assets/service2.png';
import logo3 from '../assets/service3.png';
import logo4 from '../assets/service4.png';

const MovingLogos = () => {
  return (
    <div className="overflow-hidden bg-black p-animated">
      <div className="flex animate-marquee whitespace-nowrap space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNg26QpJCwpt-cOZw7CeWoHialVI3V5ewmw&s"
          alt="Logo 1"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3_gzaVH6uDGflZ_UFk7Q1p5-AhYRium43g&s"
          alt="Logo 2"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXenNOMyeccmFTvkx9V-Y4y1Dyroa6BU73Q&s"
          alt="Logo 3"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b5CRs_bGti33D_qYGc5-qhJgyddiL20GPw&s"
          alt="Logo 4"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfJ3Cw7obNrFmE_UOXOE1h1X4F-hJ6PhUyQ&s"
          alt="Logo 4"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1mFSN_IX894SRrAeeeY_14I-Xs61c3ZAyg&s"
          alt="Logo 4"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uIwTfXA2OzfQTgBPDfhVvaleCoCc8LbM3Q&s"
          alt="Logo 4"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpVsrT5bea_o_5HyEiAo41ju06od_s3j3yg&s"
          alt="Logo 4"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default MovingLogos;
