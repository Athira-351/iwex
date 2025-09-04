import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/aboutus_image1.jpg";

const CompanyOverview = () => {
  return (
    <div>
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-blue-900 leading-snug sm:leading-tight">
              About iWEX Infomatics
            </h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700 leading-relaxed">
              At <span className="font-semibold">iWEX Infomatics</span>, we are proud to be among the top ERPNext implementation service providers. As one of the 100+ Frappe Certified Teams and 5,000+ Experienced Service Providers, our expertise is backed by a strong community of 20,000+ ERPNext Contributors. We are also active members of the ERPNext Kerala Chapter.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our dedicated team focuses on thoroughly understanding your business requirements to deliver tailored ERPNext solutions that add significant value. With iWEX Infomatics, you can optimize your business operations, implement international work culture standards, and automate workflows to minimize workload, save time, and conserve energy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-10 md:mt-0 flex justify-center md:justify-end"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={ aboutImage }
              alt="Team Work"
              className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-full"
            />
          </motion.div>
        </section>
      </div>
  );
};

export default CompanyOverview;