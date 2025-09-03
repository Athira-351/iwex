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
        <section className="relative py-16 px-6 sm:px-6 bg-blue-900 overflow-hidden">

            <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative text-2xl sm:text-4xl font-bold mb-12 text-white flex items-center gap-3 sm:gap-4 md:left-[6rem] -mt-[2rem]"
            >
                <img src={milestone} alt="milestone-icon" className="w-8 sm:w-12" />
                Our Milestones
            </motion.h2>

            <div className="relative max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10 -mt-5">
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className={`flex flex-col sm:flex-row items-center sm:items-stretch gap-6 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                            }`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white items-center justify-center shadow-md"
                        >
                            {milestone.icon}
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-white shadow-md sm:shadow-xl rounded-2xl sm:rounded-3xl py-5 px-6 sm:py-6 sm:px-8 flex-1 border border-gray-100 relative hover:shadow-2xl transition-all duration-300 text-center sm:text-left"
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-900">
                                {milestone.title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {milestone.description}
                            </p>
                            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-2xl -z-10"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Milestones;