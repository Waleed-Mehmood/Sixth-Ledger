import React from "react";
import { motion } from "framer-motion";
import presentation from "../assets/present.png";

const WhyChooseUs = () => {
  const cardData = [
    { title: "Bookkeeping", icon: "📑" },
    { title: "Payroll Management", icon: "💳" },
    { title: "Internal Audit and Control Test", icon: "🛂" },
    { title: "Tax Computation", icon: "💻" },
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
          <h3 className="text-orange-500 text-lg font-semibold">
            Why choose Us
          </h3>
          <h2 className="text-4xl font-bold mt-4 leading-snug">
            Why Partner With Us? Empowering Your{" "}
            <span className="text-orange-500">Business</span> Through Reliable
            Financial Solutions
          </h2>
          <p className="text-gray-400 mt-4">
            We provide expert financial solutions tailored to your needs,
            including accurate bookkeeping, seamless payroll management,
            thorough audits, and precise tax computations. Simplify your
            finances and focus on growth with our trusted support.
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
