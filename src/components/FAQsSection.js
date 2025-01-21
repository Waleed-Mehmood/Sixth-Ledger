import React, { useState } from 'react';
import faq from '../assets/faq.jpg';

const FAQsSection = () => {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img
              src={faq}
              alt="FAQ section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16 text-center lg:text-left">
                <h6 className="text-lg font-medium text-[#f87217] mb-2">FAQs</h6>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                  Looking for answers?
                </h2>
              </div>
              <div>
                {[
                  {
                    id: 1,
                    question: "Why is bookkeeping essential for my business?",
                    answer:
                      "Bookkeeping helps track income, expenses, and cash flow, ensuring accurate financial records for informed decision-making and tax compliance.",
                  },
                  {
                    id: 2,
                    question: "What services do you offer besides bookkeeping?",
                    answer:
                      "Alongside bookkeeping, we provide payroll management, financial reporting, and assistance with tax preparation to streamline your finances.",
                  },
                  {
                    id: 3,
                    question: "Is my financial data secure with your services?",
                    answer:
                      "Yes, we use encrypted systems and strict privacy protocols to ensure the security and confidentiality of your data.",
                  },
                  {
                    id: 4,
                    question: "What types of businesses can benefit from your services?",
                    answer:
                      "Our solutions cater to small and medium-sized businesses across various industries, tailored to your specific needs.",
                  },
                  {
                    id: 5,
                    question: "How can I get started with your services?",
                    answer:
                      "Contact us for a free consultation. We’ll assess your requirements and provide a customized plan for your bookkeeping and payroll needs.",
                  },
                  {
                    id: 6,
                    question: "Can you help with tax preparation and filing?",
                    answer:
                      "While our primary focus is bookkeeping, we collaborate with trusted tax professionals to ensure your financial records are tax-ready.",
                  },
                ].map(({ id, question, answer }) => (
                  <div
                    key={id}
                    className={`accordion py-8 border-b border-solid border-gray-200 ${
                      openAccordion === id ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(id)}
                      className="accordion-toggle group inline-flex items-center justify-between text-md sm:text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                    >
                      <h5>{question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${
                          openAccordion === id ? "rotate-180 text-indigo-600" : ""
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-500 ${
                        openAccordion === id ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <p className="text-base font-normal text-gray-600">
                        {answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
