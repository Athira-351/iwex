import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import dashboard from "../../assets/dashboard.png";
import kanban from "../../assets/Kanban.png";
import pos from "../../assets/POS.png";
import userManagement from "../../assets/user-management.png";
import projects from "../../assets/Projects.png";
import orders from "../../assets/sales-order.png";

const FeatureSection = () => {
  const features = [
    { name: "Dashboard", img: dashboard },
    { name: "Kanban", img: kanban },
    { name: "Point of Sales", img: pos },
    { name: "User Management", img: userManagement },
    { name: "Projects", img: projects },
    { name: "Orders", img: orders },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Complete, Versatile, and Powerful</h2>
          <p className="text-lg text-gray-600">Designed for both simplicity and power</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(feature)}
                className={`flex items-center justify-between px-5 py-3 rounded-lg font-medium transition-all border shadow-sm
                ${
                  activeFeature.name === feature.name
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span>{feature.name}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform ${
                    activeFeature.name === feature.name ? "translate-x-1" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeFeature.img}
                src={activeFeature.img}
                alt={activeFeature.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg shadow-xl max-h-[500px] object-contain"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;