import { motion } from "framer-motion";

export default function Card({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="shadow-lg rounded-2xl bg-white p-10 text-center hover:shadow-2xl transition-transform duration-300 border border-gray-100"
    >
      <div className="flex justify-center mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
}
