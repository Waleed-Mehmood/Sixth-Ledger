import React from "react";
import { motion } from "framer-motion";
import presentation from '../assets/present.png';

const WhyChooseUs = () => {
  const cardData = [
    { title: "Digital agency services", icon: "🌐" },
    { title: "Creative digital agency", icon: "🎨" },
    { title: "Creating a user-friendly design", icon: "👥" },
    { title: "Expert developers", icon: "💻" },
  ];

  return (
    <section className="bg-[#222327] text-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8 gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <h3 className="text-orange-500 text-lg font-semibold">Why choose Us</h3>
          <h2 className="text-4xl font-bold mt-4 leading-snug">
            Developing a design that is{" "}
            <span className="text-orange-500">easy</span> to use and navigate
          </h2>
          <p className="text-gray-400 mt-4">
            We believe that growth is not a destination, but a continuous process.
            With our expertise, experience, and tailored solutions, we help you unlock
            new opportunities, overcome challenges, and achieve your ambitions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-3xl text-orange-500">{item.icon}</div>
                <p className="text-white font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <img
            src={presentation}
            alt="Why Choose Us"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
