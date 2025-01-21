import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const OurProcess = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-section");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process-section" className="py-16 bg-[#202427]">
      <div className="container mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-12">Our Process</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {/* Step 1 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <img className="w-48 h-32 mx-auto mb-4 rounded-2xl" src="https://www.nutritionsmart.co.za/wp-content/uploads/2020/04/consultation.jpg" alt="Consultation" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Consultation</h3>
            <p className="text-gray-700">We begin by understanding your business needs with a free consultation.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img className="w-48 h-32 mx-auto mb-4 rounded-2xl" src="https://cashflowinventory.com/blog/wp-content/uploads/2023/08/SMEs-Should-Consider-Pre-Developed-Software-over-Custom-Solutions.jpg" alt="Custom Solutions" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Custom Solutions</h3>
            <p className="text-gray-700">We design personalized strategies for bookkeeping, payroll, or financial reporting.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img className="w-48 h-32 mx-auto mb-4 rounded-2xl" src="https://i0.wp.com/www.kettering.com.au/wp-content/uploads/2016/10/Implementation1.jpg?fit=622%2C588&ssl=1" alt="Implementation" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Implementation</h3>
            <p className="text-gray-700">Our expert team handles your accounts using trusted tools like QuickBooks and Xero.</p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img className="w-48 h-32 mx-auto mb-4 rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFyjv2puu1AIaDtNDkVWifz9PEe1riVZMNHShqAFWC2O5s2GWelocx08mIaGY4W6xE_k&usqp=CAU" alt="Continuous Support" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Continuous Support</h3>
            <p className="text-gray-700">Enjoy stress-free management with ongoing assistance, updates, and reports.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
