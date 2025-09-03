import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const words = [
    "RESOLVE",
    "INFORMATICS",
    "PROBLEM",
    "SOLUTION",
    "QUESTION",
    "CONSULTING",
    "STRATEGY",
    "ANSWER",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <style>
        {`
          @keyframes panImage {
            0% {
              background-position: 100% center;
            }
            100% {
              background-position: 0% center;
            }
          }
          .animate-panImage {
            animation: panImage 20s linear infinite alternate;
            will-change: background-position;
          }
        `}
      </style>
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-100 md:pt-0 overflow-x-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-panImage"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/04/57/93/78/360_F_457937822_6guyVRMr4cCdCr36zPg7Er7WRaf0FbSn.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark Overlay */}

        <div className="relative z-20 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:pl-20">
          <div className="max-w-2xl text-center lg:text-left space-y-6">
            <motion.h1
              className="text-4xl text-white sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >Transforming Ideas into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >At <span className="font-semibold">iWEX Infomatics</span>, we craft cutting-edge software and provide expert ERPNext implementation, customization, and training to help businesses streamline operations and accelerate growth.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition-all">
                <a href="/enquiry">Get a Free Demo</a>
              </button>
              <button className="bg-white/10 border border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Animated Word List */}
          <div className="flex flex-col gap-0 text-center lg:items-end mt-8 lg:mt-100">
            {words.map((word, index) => (
              <motion.div
                key={index}
                className={`tracking-widest ${index === activeIndex
                  ? "text-blue-400 scale-110 text-2xl lg:text-3xl font-bold"
                  : "text-gray-400 text-lg lg:text-xl"
                  }`}
                animate={
                  index === activeIndex
                    ? { scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }
                    : {}
                }
                transition={{ duration: 0.8 }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;