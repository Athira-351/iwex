import React from "react";
import { motion } from "framer-motion";
import pythonLogo from "../../assets/python.png";
import djangoLogo from "../../assets/django.png";
import reactLogo from "../../assets/react.png";
import postgresqlLogo from "../../assets/frappe.png";
import mysqlLogo from "../../assets/mysql.png";
import erpnextLogo from "../../assets/erpnext.png";
import php from "../../assets/php.png";

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Technologies = () => {
  const techStack = [
    { name: "Python", logo: pythonLogo },
    { name: "Django", logo: djangoLogo },
    { name: "React", logo: reactLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "ERPNext", logo: erpnextLogo },
    { name: "PHP", logo: php },
  ];

  return (
    <section className="relative py-20 bg-white text-blue-950 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-blue-50 opacity-30 pointer-events-none"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Section - Heading + Text */}
          <div className="md:col-span-1 flex flex-col justify-center text-left space-y-6">
            <motion.h2
              className="text-4xl font-extrabold tracking-wide"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies We Use
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We use industry-leading technologies to build scalable, secure, and
              high-performing solutions tailored to your business needs.
            </motion.p>
          </div>

          {/* Right Section - Tech Grid */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  {/* Glassmorphism Card */}
                  <motion.div
                    className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl cursor-pointer
                    hover:shadow-blue-400/50 transition-shadow duration-300"
                    {...floatAnimation}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-16 w-16 object-contain"
                      draggable={false}
                    />
                  </motion.div>
                  <p className="mt-4 text-sm font-semibold text-gray-800 tracking-wide select-none">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;