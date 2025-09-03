import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaGlobe, FaRocket, FaChartLine, FaCogs } from "react-icons/fa";
import milestone from "../../assets/milestone-icon.webp";

const milestones = [
    {
        icon: <FaCheckCircle size={24} />,
        title: "1st Frappe Certified Consultant for ERPNext",
        description: "Recognized as a trusted expert in ERPNext solutions."
    },
    {
        icon: <FaUsers size={24} />,
        title: "One of the 1,000+ Experienced Service Providers",
        description: "Proudly among the top global ERPNext service providers."
    },
    {
        icon: <FaGlobe size={24} />,
        title: "One of the Active ERPNext Chapter Member",
        description: "Contributing actively to ERPNext community chapters."
    },
    {
        icon: <FaRocket size={24} />,
        title: "Many years’ experience in ERPNext implementation",
        description: "Successfully implemented ERPNext for businesses globally."
    },
    {
        icon: <FaChartLine size={24} />,
        title: "ERPNext for Business Growth",
        description: "Leveraging ERPNext’s extensive features to scale businesses."
    },
    {
        icon: <FaCogs size={24} />,
        title: "Configure, Implement, Customize & Train Users",
        description: "End-to-end ERPNext services for seamless adoption."
    }
];

const Milestones = () => {
    return (
        <section className="relative py-24 px-6 bg-blue-900 overflow-hidden">

            <div className="absolute top-10 left-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative text-4xl font-bold left-15 mb-15 -mt-10 text-white flex items-center gap-4"
            >
                <img src={milestone} alt="milestone-icon" width={50} />
                Our Milestones
            </motion.h2>

            <div className="relative max-w-6xl mx-auto flex flex-col gap-10">
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg"
                        >
                            {milestone.icon}
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-xl rounded-3xl py-6 px-8 flex-1 border border-gray-100 relative hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold mb-2 text-blue-900">
                                {milestone.title}
                            </h3>
                            <p className="text-gray-600">
                                {milestone.description}
                            </p>
                            <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-3xl -z-10"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Milestones;