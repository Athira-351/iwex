import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const countries = [
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "Oman", flag: "https://flagcdn.com/om.svg" },
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
    { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { name: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
    { name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
    { name: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
];

const Countries = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
                <div className="w-full md:w-1/4 flex flex-col justify-start">
                    <h2 className="text-4xl font-bold text-blue-900 leading-snug mb-4 relative">
                        Global Presence
                        <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mt-3 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 text-lg mt-4">
                        We operate across multiple countries, ensuring global connectivity and local expertise.
                    </p>
                </div>

                {/* Auto-scrolling Carousel */}
                <div className="w-full md:w-3/4 overflow-hidden relative">
                    <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        ref={containerRef}
                        className="flex gap-6 sm:gap-8 md:gap-12"
                        animate={{ x: [-0, -width] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                duration: window.innerWidth < 768 ? 8 : 20,
                            },
                        }}
                    >
                        {[...countries, ...countries].map((country, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-32 text-center group cursor-pointer"
                                whileHover={{ scale: 1.15 }}
                            >
                                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-lg bg-white mb-4 overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-110">
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                                <p className="font-semibold text-gray-700 text-sm group-hover:text-blue-700">
                                    {country.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Countries;