import React from 'react';
import { FaCogs, FaLaptopCode, FaRegLightbulb, FaUsers } from 'react-icons/fa';
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

const services = [
  { icon: <FaCogs size={30} />, title: 'Accounting And Bookkeeping', description: 'We provide tailored solutions that meet your business needs.', image: service1 },
  { icon: <FaLaptopCode size={30} />, title: 'Marketing And Advertising', description: 'Our web development services include building scalable and responsive websites.', image: service2 },
  { icon: <FaRegLightbulb size={30} />, title: 'IT Support And Consulting', description: 'We help businesses identify opportunities for innovation and growth.', image: service3 },
  { icon: <FaUsers size={30} />, title: 'Human Resource', description: 'We foster strong collaboration between teams to achieve better outcomes.', image: service4 }
];

const Services = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      {/* Header Text */}
      <div className="text-left mb-2">
        <h5 className="text-xl text-[#AF5923] font-medium">Our Service List</h5>
      </div>

      {/* Big Heading and Description */}
      <div className="md:flex md:items-center mb-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">We Provide the solutions for our Clients</h2>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p className="text-lg text-gray-700">
            We specialize in providing innovative and effective solutions to meet the unique challenges of our clients.
            Our goal is to deliver high-quality services that drive success and growth for businesses.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#F5EFEF] shadow-lg rounded-lg overflow-hidden flex flex-col group transition duration-300 hover:shadow-xl"
          >
            <div className="flex-grow p-6">
              <div className="flex items-center mb-4">
                <div
                  className="mr-3 flex justify-center items-center w-12 h-12 bg-black rounded-lg p-4 transition duration-300 group-hover:bg-red-600"
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <img className="w-full h-48 object-cover p-4 rounded-3xl" src={service.image} alt={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
