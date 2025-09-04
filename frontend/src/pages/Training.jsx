import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/Training-overview.png";
import image2 from "../assets/Training-short-term.png";
import image3 from "../assets/Training-long-term.png";
import heroImage from "../assets/ErpTrainingBanner.png";

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
      <section className="relative py-28 md:py-36 text-center overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-indigo-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/4"></div>
        </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          >
            ERPNext Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 text-white max-w-3xl mx-auto text-base sm:text-lg md:text-xl"
          >
            Learn ERPNext your way – from a quick overview to advanced deep dives.
            Pick the program that fits your pace and career goals.
          </motion.p>
        </section>

        <section className="bg-gradient-to-b from-white to-indigo-50 py-16 px-6 md:px-20">
          <div className="flex flex-col space-y-20">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-4 border-indigo-100"
                >
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full max-w-sm md:h-64 object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 w-full md:w-2/3 hover:shadow-3xl transition-all">
                  <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-2">{prog.title}</h2>
                  <span className="inline-block mb-4 px-3 py-1 text-sm sm:text-base font-medium text-indigo-700 bg-indigo-100 rounded-full">
                    {prog.duration}
                  </span>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm md:text-base">
                    {prog.content.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <motion.a
                    href="/enquiry"
                    className="mt-6 inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-3 px-7 rounded-full shadow-lg transition-all"
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
      <Footer />
    </>
  );
};

export default Training;