import React from "react";
import { FaCogs, FaLaptopCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCogs size={30} />,
    title: "Bookkeeping",
    description:
      "Ensure accurate and efficient financial record management using advanced tools like QuickBooks and Xero.",
    image: service1,
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Payroll Management",
    description:
      "Streamline employee payroll processes for seamless and timely salary disbursements",
    image: service2,
  },
  {
    icon: <FaRegLightbulb size={30} />,
    title: "Internal Audit and Control Test",
    description:
      "Enhance financial accuracy and compliance with robust internal audits and control assessments.",
    image: service3,
  },
  {
    icon: <FaUsers size={30} />,
    title: "Tax Computation",
    description:
      "Simplify tax preparation with precise computations and compliance with regulations.",
    image:
      "https://profit.pakistantoday.com.pk/wp-content/uploads/2021/03/44968867_m.jpg",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto my-16 px-6">
      {/* Header Text */}
      <div className="text-left mb-2">
        <motion.h5
          className="text-xl text-[#AF5923] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Service List
        </motion.h5>
      </div>

      {/* Big Heading and Description */}
      <div className="md:flex md:items-center mb-8">
        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We Provide the solutions for our Clients
          </motion.h2>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We specialize in providing innovative and effective solutions to
            meet the unique challenges of our clients. Our goal is to deliver
            high-quality services that drive success and growth for businesses.
          </motion.p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#F5EFEF] shadow-lg rounded-lg overflow-hidden flex flex-col group transition duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1, // Stagger animations for each card
            }}
          >
            <div className="flex-grow p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3 flex justify-center items-center w-12 h-12 bg-black rounded-lg p-4 transition duration-300 group-hover:bg-red-600">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <img
              className="w-full h-48 object-cover p-4 rounded-3xl"
              src={service.image}
              alt={service.title}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center sm:gap-4 my-6 flex-col sm:flex-row">
        <motion.p
          className="text-lg font-medium text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Personalized Service, Hassle-Free.
        </motion.p>
        <motion.button
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 rounded-lg mt-4 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
