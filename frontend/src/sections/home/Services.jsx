import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaTools,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaServer,
  FaHandHoldingUsd,
} from "react-icons/fa";

const services = [
  {
    title: "Business Consultation",
    desc: "Our experts provide consulting to help businesses streamline operations, improve efficiency, and achieve their goals with ERPNext.",
    icon: <FaHandHoldingUsd size={48} className="text-teal-300 drop-shadow-glow" />,
  },
  {
    title: "ERPNext Implementation Support",
    desc: "We offer personalized implementation support to ensure a smooth and successful transition to ERPNext, minimizing disruption and maximizing benefits.",
    icon: <FaCogs size={48} className="text-teal-300 drop-shadow-glow" />,
  },
  {
    title: "Customization & Integration",
    desc: "We specialize in tailoring ERPNext to meet the unique needs of your business, seamlessly integrating it with your existing systems and workflows.",
    icon: <FaNetworkWired size={48} className="text-teal-300 drop-shadow-glow" />,
  },
  {
    title: "Server Maintenance",
    desc: "We support you in the technical aspects of keeping the system maintaining server, and keeping apps updated by fixing bugs and upgrading version.",
    icon: <FaServer size={48} className="text-teal-300 drop-shadow-glow" />,
  },
  {
    title: "Training",
    desc: "We have proper training program that ensures the efficient and effective use of the ERP system for users.",
    icon: <FaChalkboardTeacher size={48} className="text-teal-300 drop-shadow-glow" />,
  },
  {
    title: "Integration",
    desc: "We integrate customized hardware devices & 3rd party apps to ERPNext seamlessly, making your workflows more efficient and automated.",
    icon: <FaTools size={48} className="text-teal-300 drop-shadow-glow" />,
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div>
        <ul className="mt-6 flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-teal-600 opacity-60 transition-all"></div>
    ),
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0F2C55] to-[#00172F] flex items-center justify-center overflow-hidden px-4 py-16"
    >
      {/* Animated background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-24 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-200 bg-clip-text text-transparent animate-gradient">
          Our Services
        </h2>

        {/* Desktop Slider */}
        <div className="hidden sm:block">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-3 py-3">
                <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl h-[380px] flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-teal-400/50">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-teal-100 text-lg leading-7">{service.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile List */}
        <div className="flex flex-col space-y-6 sm:hidden">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 hover:border-teal-400/50 transition-all duration-500">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-teal-100 text-base leading-6">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Get Started with ERPNext
          </a>
        </div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.8));
        }
        /* Slick dots customization */
        .slick-dots li {
          margin: 0 6px;
        }
        .slick-dots li div {
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active div {
          opacity: 1;
          transform: scale(1.3);
          background-color: #14b8a6; /* Tailwind teal-500 */
        }
      `}</style>
    </section>
  );
};

export default Services;