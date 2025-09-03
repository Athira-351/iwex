import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 100, suffix: "+", label: "Projects", description: "Successfully completed." },
  { number: 8, suffix: "", label: "Countries", description: "Expanded our reach." },
  { number: 4, suffix: "", label: "Verticals", description: "Business Industries" },
  { number: 100, suffix: "+", label: "Collaborators", description: "Joined our efforts." },
  { number: 200, suffix: "+", label: "Formats", description: "Developed and implemented." },
  { number: 100, suffix: "+", label: "Customizations", description: "Tailored to specific needs." },
];

const useCountUp = (end, start, duration = 1500) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }
    let current = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, start, duration]);
  return count;
};

const StatCard = ({ number, suffix, label, description, delay, start }) => {
  const count = useCountUp(number, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-blue-500/40 border border-white/20 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="text-5xl font-extrabold text-blue-300 mb-3">
        {count}{suffix}
      </div>
      <h4 className="text-2xl font-semibold text-white">{label}</h4>
      <p className="text-blue-200 mt-2 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const WhatWeDid = () => {
  const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="what-we-did"
      ref={ref}
      className="relative py-20 overflow-hidden text-white"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center animate-panImage"
        style={{
          backgroundImage: "url('https://bitvera.co/wp-content/uploads/2024/11/erp.jpg')",
        }}>  
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0A0F2D]/80 to-black/70 z-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 mb-4"
        >
          What We Did?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-blue-200 max-w-2xl mx-auto mb-16"
        >
          We accomplished the following milestones across multiple sectors of business excellence.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 0.15}
              start={startCount}  // start counting only after section visible
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes panImage {
            0% { background-position: 100% center; }
            100% { background-position: 0% center; }
          }
          .animate-panImage {
            animation: panImage 30s linear infinite alternate;
            will-change: background-position;
          }
        `}
      </style>
    </section>
  );
};

export default WhatWeDid;