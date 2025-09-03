import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/Training-overview.png";
import image2 from "../assets/Training-short-term.png";
import image3 from "../assets/Training-long-term.png";

const programs = [
    {
        title: "Quick Overview of ERPNext",
        duration: "1–2 days",
        image: image1,
        content: [
            "Introduction to ERPNext",
            "Overview of key modules (CRM, Sales, Purchase, Inventory, Accounting, HR)",
            "Basic navigation and user interface",
            "High-level business processes",
            "Quick setup guide",
            "Q&A session"
        ],
    },
    {
        title: "Short Course of ERPNext",
        duration: "1–2 weeks (5–10 days)",
        image: image2,
        content: [
            "Detailed introduction to ERPNext",
            "In-depth exploration of core modules (CRM, Sales, Purchase, Inventory, Accounting, HR)",
            "Basic configurations and settings",
            "Common workflows and use cases",
            "Introduction to user roles and permissions",
            "Basic customization options",
            "Hands-on exercises and practical sessions",
            "Q&A sessions after each module"
        ],
    },
    {
        title: "Long Course of ERPNext",
        duration: "4–6 weeks",
        image: image3,
        content: [
            "Comprehensive overview of ERPNext",
            "Deep dive into all modules (including Manufacturing, Projects, Asset Management)",
            "Advanced configurations and settings",
            "Detailed workflows and process automation",
            "User roles, permissions, and security settings",
            "Advanced customization (Custom fields, scripts, reports)",
            "Integration with other systems (API, third-party integrations)",
            "Troubleshooting common issues",
            "Real-world case studies and best practices",
            "Extensive hands-on exercises and projects",
            "Assessments and feedback sessions",
            "Final Q&A"
        ],
    }
];

const Training = () => {
  useEffect(() => {
    document.title = "ERPNext Training | IWEX Infomatics";
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen relative overflow-hidden">
        <section className="relative py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-indigo-900"
          >
            ERPNext Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 -mb-[5rem] sm:mb-0"
          >
            Learn ERPNext your way – from a quick overview to advanced deep dives.
            Pick the program that fits your pace and career goals.
          </motion.p>
        </section>

        <section className="px-6 md:px-20 py-0 mb-10 relative">
          <div className="flex flex-col space-y-24 relative before:absolute before:top-80 before:bottom-0 before:left-1/2 before:w-1 before:bg-indigo-200 before:rounded-full">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-indigo-100"
                >
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-[24rem] h-[220px] object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-2/3 hover:shadow-2xl transition">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-2">{prog.title}</h2>
                  <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
                    {prog.duration}
                  </span>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                    {prog.content.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <motion.a
                    href="/enquiry"
                    className="mt-6 inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Training;