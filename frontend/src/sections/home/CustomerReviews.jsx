
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    title: "Excellent Service",
    content:
      "We partnered with iWEX Infomatics to implement ERPNext in our manufacturing operations, and the results have been outstanding. The team conducted a thorough requirement study and configured the system perfectly to meet our needs. Their data migration process was seamless, and the user training sessions ensured our staff was up to speed quickly. The customization they provided has streamlined our production processes, reducing data entry process and increasing efficiency. iWEX Infomatics is a true partner in our success, and I highly recommend their services to any manufacturing business looking to optimize their operations.",
    author: "Martin C Antony",
    role: "CEO, RGM Garments Co Ltd",
  },
  {
    title: "Dedicated Implementation",
    content:
      "iWEX Infomatics has been a game-changer for our distribution network. Their expertise in ERPNext implementation has revolutionized our inventory and logistics management. Their skill in preparing business documentation content is highly appreciated, adding clarity and professionalism to our communication processes. The team's dedication to understanding our unique challenges and delivering tailored solutions has significantly enhanced our efficiency and customer satisfaction. Their support team is always responsive and helpful, making them an invaluable and friendly partner for our business.",
    author: "George Cherian",
    role: "IT Head, Global Distribution LLC",
  },
  {
    title: "Great Experience",
    content:
      "As a services company, we needed an ERP system that could handle the complexities of our operations. iWEX Infomatics delivered beyond our expectations with their ERPNext customization services. They took the time to understand our specific needs and provided a solution that streamlined our sales processes and improved service delivery. The mobile app development they offered has empowered our sales team to access critical information on the go, enhancing our responsiveness and customer service. iWEX Infomatics' expertise have made a substantial difference in our business operations, and we couldn't be happier with the results.",
    author: "S. Kussaga",
    role: "Director, CM Group",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white text-blue-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl text-blue-950 font-extrabold mb-12 bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >Customer Reviews
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{review.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {review.content}
              </p>
              <div className="mt-4 text-left">
                <p className="font-medium text-blue-800">{review.author}</p>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
