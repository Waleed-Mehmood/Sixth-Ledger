import React from "react";
import { motion } from "framer-motion";
import lowerimage from '../assets/image (2).png';
import upperImage from '../assets/image (3).png';
const AboutSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Image Section */}
        <motion.div
          className="lg:w-1/2 flex gap-4 justify-center relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-64 h-64 bg-gray-200 rounded-xl shadow-lg overflow-hidden">
            <img
              src={lowerimage}
              alt="Business Consulting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block relative w-48 h-48 p-3 bg-gray-200 rounded-xl shadow-lg overflow-hidden -ml-12 mt-16">
            <img
              src={upperImage}
              alt="Teamwork"
              className="w-full h-full object-cover"
            />
           
          </div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-orange-600 text-lg font-semibold">About us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight">
          Simplifying Financial{" "}
            <span className="text-orange-600">Management</span> for Growth
          </h2>
          <p className="text-gray-600 mt-4">
          At Sixth Ledger, we combine expertise and advanced tools like <strong>QuickBooks and Xero</strong> to deliver <strong>comprehensive financial services.</strong> From <strong>accurate bookkeeping and custom Excel solutions</strong> to <strong>efficient payroll management,</strong> our team ensures every aspect of your business’s financial needs is handled with precision.
          </p>
          <p className="text-gray-600 mt-4">
          With professional services like <strong>budgeting and forecasting, year-end financial statements, and strategic competitor analysis,</strong> we empower startups and established enterprises alike to thrive in a competitive market.
          </p>
          <p className="text-gray-600 mt-4">
          Led by a team of experienced ACCA Affiliates in Pakistan, we prioritize accuracy, compliance, and efficiency. Partner with us for tailored financial solutions, ensuring clarity and success every step of the way.
          </p>
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-medium">Business Consulting</p>
              <p className="text-gray-600">90%</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-orange-600 h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-600">▶️</div>
              <div>
                <p className="font-bold text-gray-800">
                  Accounting and Bookkeeping
                </p>
                <p className="text-gray-500 text-sm">
                  Services related to financial record-keeping, bookkeeping
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-600">▶️</div>
              <div>
                <p className="font-bold text-gray-800">
                  Human Resources (HR) Consulting
                </p>
                <p className="text-gray-500 text-sm">
                  Assistance with HR-related tasks such as recruitment.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700">
              Get Started
            </button>
            <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white">
              Discover More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
