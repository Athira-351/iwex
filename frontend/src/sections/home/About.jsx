import  React from "react";
import { motion } from "framer-motion";
import ErpImg from "../../assets/erpimage.jpg"

const About = () => {
  return (
    <section id="about" className="md:h-screen sticky top-0 flex items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)", }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 mb-12 md:mt-0 md:mb-0">
        
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute w-80 h-80 border-4 border-indigo-500 rounded-3xl transform rotate-6 shadow-lg"></div>

          <motion.img
            src={ErpImg}
            alt="About Us"
            className="relative w-80 h-80 object-cover rounded-3xl shadow-xl transform -rotate-6 hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05, rotate: -5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        ><motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >About <span className="text-blue-500">iWEX Infomatics</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >At <b>iWEX Infomatics</b>, we combine innovation, technology, and creativity to deliver cutting-edge solutions that drive real business growth. Our team of experts specializes in providing tailored software solutions to meet the unique needs of each client.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >With a proven track record across multiple industries and countries, we are passionate about solving challenges and shaping the future through technology.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-900 transition-colors duration-300"
          >Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;