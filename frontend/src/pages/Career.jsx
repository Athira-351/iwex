import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import banner from "../assets/career_banner.png";

const benefits = [
  {
    img: "https://undraw.co/illustrations/team.svg",
    title: "Collaborative Culture",
    desc: "Work with a passionate and talented team that values knowledge sharing and innovation."
  },
  {
    img: "https://undraw.co/illustrations/rocket.svg",
    title: "Career Growth",
    desc: "Access continuous learning, mentorship, and exciting opportunities to grow your career."
  },
  {
    img: "https://undraw.co/illustrations/relaxing.svg",
    title: "Healthy Work-Life Balance",
    desc: "Enjoy flexibility and an environment that prioritizes your well-being."
  }
];

const positions = [
  {
    id: 1,
    title: "ERPNext/Frappe Developer",
    type: "Full Time",
    location: "Kochi",
    department: "IT",
    posted: "2025-08-20",
    desc: "Build and customize ERPNext modules and applications to meet client requirements. Develop new features, troubleshoot issues, and collaborate with the team to ensure smooth implementation. Knowledge in Python, Frappe framework, and ERPNext customization is essential."
  },
  {
    id: 2,
    title: "Frontend Developer",
    type: "Full Time",
    location: "Kochi",
    department: "IT",
    posted: "2025-08-22",
    desc: "Shape the structure and design of web pages, ensuring a seamless and engaging user experience. Expertise in HTML, CSS, JavaScript, Vue/React SPA, Tailwind, and jQuery. Proficient in server-side CSS and SEO principles."
  }
];

const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredPositions = positions
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) => (filterDept === "All" ? true : job.department === filterDept))
    .filter((job) => (filterType === "All" ? true : job.type === filterType))
    .sort((a, b) => {
      if (sortOrder === "newest") return new Date(b.posted) - new Date(a.posted);
      else return new Date(a.posted) - new Date(b.posted);
    });
    useEffect(() => {
        document.title = "Career | IWEX Infomatics";
      }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white flex flex-col">
        <section className="relative h-[80vh] flex items-center justify-center text-center px-6 md:px-20 overflow-hidden">
          <img
            src={banner}
            alt="Career Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-30 transform scale-105 animate-slow-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute top-20 right-16 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-float-slow delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-float-slow delay-1000"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delayChildren: 0.3, staggerChildren: 0.2 }}
            className="relative z-10 max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              Join Our Team
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-6"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg md:text-xl mb-8 text-gray-300"
            >
              Be part of an innovative company that values talent, growth, and creativity.
            </motion.p>

            <motion.a
              href="#positions"
              className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Openings
            </motion.a>
          </motion.div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Work With Us?
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Openings */}
        <section 
          id="positions" 
          className="py-16 px-6 md:px-20 bg-gray-800 rounded-t-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Current Openings
          </h2>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 max-w-5xl mx-auto">
            <input
              type="text"
              placeholder="Search by title or location..."
              className="flex-1 px-4 py-2 rounded-xl text-white placeholder-white border border-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-3 flex-wrap">
              <select
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
                className="px-4 py-2 rounded-xl text-white bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option className="text-black" value="All">All Departments</option>
                <option className="text-black" value="IT">IT</option>
                <option className="text-black" value="HR">HR</option>
                <option className="text-black" value="Marketing">Marketing</option>
              </select>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-xl text-white bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option className="text-black" value="All">All Types</option>
                <option className="text-black" value="Full Time">Full Time</option>
                <option className="text-black" value="Part Time">Part Time</option>
                <option className="text-black" value="Internship">Internship</option>
              </select>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-2 rounded-xl text-white bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option className="text-black" value="newest">Newest First</option>
                <option className="text-black" value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {filteredPositions.map((job, i) => {
              const shortDesc =
                job.desc.length > 150 ? job.desc.slice(0, 150) + "..." : job.desc;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pink-400 mb-2">{job.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {job.type} • {job.location} • Posted: {job.posted}
                    </p>
                    <p className="text-gray-300">
                      {shortDesc}{" "}
                      {job.desc.length > 150 && (
                        <Link
                          to={`/career/${job.id}`}
                          className="text-pink-400 hover:underline">
                          Read more
                        </Link>
                      )}
                    </p>
                  </div>
                  <motion.a
                    href={`/career/${job.id}`}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-110 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              );
            })}
            {filteredPositions.length === 0 && (
              <p className="text-center text-gray-400">No positions found.</p>
            )}
          </div>
        </section>

        {/* Didn’t Find Your Role Section */}
        <section className="relative py-16 px-6 text-center overflow-hidden bg-gradient-to-b from-transparent to-black/20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Didn’t find your role?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              We are always looking for talented people. Send us your resume and we’ll get in touch!
            </p>
            <motion.a
              href="mailto:jobs@iwex.in"
              className="inline-block px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Your Resume
            </motion.a>
          </motion.div>

          {/* Bottom Gradient for Separation */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Career;
