import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const positions = [
    {
        id: 1,
        title: "ERPNext/Frappe Developer",
        type: "Full Time",
        location: "Kochi, Kerala",
        desc: `
    <p>Are you a skilled developer passionate about <strong>ERPNext</strong> and the <strong>Frappe framework</strong>?<br/>
    Do you have a knack for solving complex business challenges with innovative tech solutions?<br/>
    iWEX Infomatics is looking for a talented ERPNext/Frappe Developer to join our dynamic team in Kochi, Kerala, and drive impactful projects.</p>

    <br/>
    <h3><strong>About Us</strong></h3>
    <p>At iWEX Infomatics, we are committed to delivering top-tier IT and data solutions that propel our clients towards success.<br/>
    Our team thrives in a collaborative environment where creativity, innovation, and excellence are celebrated.</p>

    <br/>
    <h3><strong>What You'll Do</strong></h3>
    <ul>
      <li>• <strong> <strong>Develop & Customize:</strong> Build and customize ERPNext modules and applications to meet client requirements.</li>
      <li>• <strong> <strong>Integration:</strong> Integrate ERPNext with other systems and third-party applications.</li>
      <li>• <strong> <strong>Enhancements:</strong> Develop new features and enhance existing functionalities within the Frappe framework.</li>
      <li>• <strong> <strong>User Support:</strong> Provide technical support and training to end-users.</li>
      <li>• <strong> <strong>Performance Optimization:</strong> Optimize system performance and ensure scalability.</li>
      <li>• <strong> <strong>Collaboration:</strong> Work closely with cross-functional teams to deliver high-quality solutions.</li>
    </ul>

    <br/>
    <h3><strong>Required Skills & Qualifications</strong></h3>
    <ul>
      <li>• <strong> <strong>Educational Background:</strong> Degree in Computer Science, Information Technology, or a related field.</li>
      <li>• <strong> <strong>Technical Proficiency:</strong> Proven experience with ERPNext and Frappe framework.</li>
      <li>• <strong> <strong>Programming Skills:</strong> Proficiency in Python, JavaScript, SQL, GitHub.</li>
      <li>• <strong> <strong>Web Technologies:</strong> Strong understanding of web technologies (HTML, CSS, JavaScript).</li>
      <li>• <strong> <strong>Database Management:</strong> Experience with database management systems like MariaDB/MySQL.</li>
      <li>• <strong> <strong>Problem-Solving:</strong> Excellent analytical and problem-solving skills.</li>
      <li>• <strong> <strong>Communication:</strong> Strong verbal and written communication skills.</li>
      <li>• <strong> <strong>Team Player:</strong> Ability to work effectively in a team-oriented environment.</li>
    </ul>

    <br/>
    <h3><strong>Why Join Us?</strong></h3>
    <ul>
      <li>• <strong> <strong>Innovative Projects:</strong> Work on challenging ERPNext/Frappe projects that make a real impact.</li>
      <li>• <strong> <strong>Professional Growth:</strong> Opportunities for continuous learning and career development.</li>
      <li>• <strong> <strong>Collaborative Culture:</strong> Join a supportive team of experts dedicated to innovation.</li>
      <li>• <strong> <strong>Competitive Benefits:</strong> Attractive salary and comprehensive benefits package.</li>
    </ul>

    <br/>
    <h3><strong>How to Apply</strong></h3>
    <p>If you're ready to take your career to the next level and be part of a dynamic team, we'd love to hear from you!</p>
    <p>Send your resume and a cover letter detailing your experience and why you're a great fit for this role to 
    <a href="mailto:jobs@iwex.in" style="color:#ec4899; font-weight:bold;">jobs@iwex.in</a>.</p>`
    },
    {
        id: 2,
        title: "Frontend Developer",
        type: "Full Time",
        location: "Kochi, Kerala",
        desc: `
        Are you a talented programmer with a keen eye for design? <br />
        Do you thrive in a dynamic environment where creativity meets technology? <br />
        iWEX Infomatics is on the lookout for a skilled Frontend Developer to join our innovative team in Kochi, Kerala, and work on exciting Frappe/ERPNext projects!<br /><br />

        <strong>About Us</strong><br />
        At iWEX Infomatics, we are dedicated to delivering cutting-edge IT and data solutions that drive success for our clients. 
        Our collaborative work environment encourages creativity, growth, and excellence.<br /><br />

        <strong>What You'll Do</strong><br />
        <ul>
            <li>• <strong> Design & Structure:</strong> Shape the structure and design of web pages, ensuring a seamless and engaging user experience.</li>
            <li>• <strong> User-Centric Development:</strong> Develop features that enhance user experience, balancing functionality and aesthetics.</li>
            <li>• <strong> Mobile Optimization:</strong> Ensure web designs are optimized for smartphones and other devices.</li>
            <li>• <strong> Reusable Code:</strong> Build reusable code to streamline future projects.</li>
            <li>• <strong> Efficiency & Speed:</strong> Optimize web pages for maximum speed and scalability.</li>
            <li>• <strong> Brand Consistency:</strong> Maintain brand consistency throughout all designs.</li>
        </ul><br />

        <strong>Required Skills & Qualifications</strong><br />
        <ul>
            <li>• <strong> Educational Background:</strong> Degree in Computer Science or a related field.</li>
            <li>• <strong> Design Principles:</strong> Strong understanding of key design principles.</li>
            <li>• <strong> Technical Proficiency:</strong> Expertise in HTML, CSS, JavaScript, Vue/React SPA, Tailwind, and jQuery.</li>
            <li>• <strong> CSS & SEO:</strong> Proficient in server-side CSS and SEO principles.</li>
            <li>• <strong> Graphic Design:</strong> Experience with graphic design applications like Adobe Illustrator.</li>
            <li>• <strong> Responsive Design:</strong> Skilled in responsive and adaptive design techniques.</li>
            <li>• <strong> Problem-Solving:</strong> Strong analytical and problem-solving skills.</li>
            <li>• <strong> Communication:</strong> Excellent verbal communication and interpersonal skills.</li>
        </ul><br />

        <strong>Why Join Us?</strong><br />
        <ul>
            <li>• <strong> Innovative Projects:</strong> Work on groundbreaking Frappe/ERPNext projects that challenge and inspire.</li>
            <li>• <strong> Collaborative Team:</strong> Join a team of talented developers, designers, and UX experts.</li>
            <li>• <strong> Professional Growth:</strong> Opportunities for continuous learning and career advancement.</li>
            <li>• <strong> Competitive Benefits:</strong> Attractive salary and comprehensive benefits package.</li>
        </ul><br />

        <strong>How to Apply</strong><br />
        <p>Ready to take your frontend development skills to the next level? We'd love to hear from you!</p>
        <p>Send your resume and a cover letter detailing your experience and why you're a great fit for this role to 
        <a href="mailto:jobs@iwex.in" style="color:#ec4899; font-weight:bold;">jobs@iwex.in</a>.</p>`
    },
];
const JobDetails = () => {
  const { id } = useParams();
  const job = positions.find((job) => job.id === parseInt(id));

  // Set dynamic page title inside the component
  useEffect(() => {
    if (job) {
      document.title = `${job.title} | Careers at IWEX Infomatics`;
    } else {
      document.title = "Job Not Found | IWEX Infomatics";
    }
  }, [job]);

  if (!job) {
    return <div className="text-center text-white py-20 text-xl">Job not found</div>;
  }

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-16">
                <div className="relative py-1 bg-blue-900 text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0 pointer-events-none"></div>
                    <div className="relative z-10 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                {job.title}
                            </h1>
                            <p className="text-gray-300">
                                {job.type} • {job.location}
                            </p>
                        </div>
                        <div className="relative z-20 px-4 md:px-20 py-10">
                            <a
                                href="mailto:jobs@iwex.in"
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 prose prose-lg max-w-none text-white">
                    <div
                        className="text-black text-lg md:text-lg leading-relaxed space-y-6 md:px-12 lg:px-20"
                        dangerouslySetInnerHTML={{ __html: job.desc }} />
                    <div className="flex flex-col justify-between md:flex-row items-center gap-6 pt-6 lg:px-20 py-12">
                        <Link
                            to="/career"
                            className="text-blue-500 hover:underline text-lg md:text-xl">
                            Back to Careers
                        </Link>
                        <a
                            href="mailto:jobs@iwex.in"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JobDetails;
