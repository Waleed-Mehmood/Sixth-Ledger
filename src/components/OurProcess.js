import React, { useEffect, useState } from 'react';

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
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-12">Our Process</h2>
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-10 ${isVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
            <img className="w-48 h-32 mx-auto mb-4 rounded-3xl" src="https://www.nutritionsmart.co.za/wp-content/uploads/2020/04/consultation.jpg" alt="Consultation" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Consultation</h3>
            <p className="text-gray-700">We begin by understanding your business needs with a free consultation.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
            <img className="w-48 h-32 mx-auto mb-4 rounded-3xl" src="https://cashflowinventory.com/blog/wp-content/uploads/2023/08/SMEs-Should-Consider-Pre-Developed-Software-over-Custom-Solutions.jpg" alt="Custom Solutions" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Custom Solutions</h3>
            <p className="text-gray-700">We design personalized strategies for bookkeeping, payroll, or financial reporting.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
            <img className="w-48 h-32 mx-auto mb-4 rounded-3xl" src="https://i0.wp.com/www.kettering.com.au/wp-content/uploads/2016/10/Implementation1.jpg?fit=622%2C588&ssl=1" alt="Implementation" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Implementation</h3>
            <p className="text-gray-700">Our expert team handles your accounts using trusted tools like QuickBooks and Xero.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105">
            <img className="w-48 h-32 mx-auto mb-4 rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFyjv2puu1AIaDtNDkVWifz9PEe1riVZMNHShqAFWC2O5s2GWelocx08mIaGY4W6xE_k&usqp=CAU" alt="Continuous Support" />
            <h3 className="text-2xl font-semibold mb-4 text-black">Continuous Support</h3>
            <p className="text-gray-700">Enjoy stress-free management with ongoing assistance, updates, and reports.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
