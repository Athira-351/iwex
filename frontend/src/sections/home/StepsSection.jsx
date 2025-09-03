import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Fill in Your Requirements and Contact Details",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20h9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Compare and Choose a Plan",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12v6a2 2 0 002 2h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h10M3 9h10" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Make Payment and Start with Us",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-indigo-600"
        viewBox="0 0 24 24"
      >
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          fill="currentColor"
        >
          $
        </text>
      </svg>
    ),
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-950 mb-16 text-center tracking-tight">How to Approach Us</h2>
        <div className="relative">
          <div className="absolute left-7 top-0 w-1 bg-indigo-200 h-full rounded"></div>
          <div className="flex flex-col space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="flex items-start relative"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white font-bold text-xl shadow-lg z-10">
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-px h-full bg-indigo-200 mt-1"></div>
                  )}
                </div>
                <div className="ml-8 p-6 bg-indigo-50 rounded-xl shadow-md flex-1 cursor-default hover:shadow-indigo-400 transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="bg-white rounded-full p-2 shadow-md mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-gray-900 font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;