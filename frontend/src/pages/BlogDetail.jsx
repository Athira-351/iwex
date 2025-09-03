import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/Blog1.png";
import blog2 from "../assets/Blog2.png";
import blog3 from "../assets/Blog3.png";
import authorImage from "../assets/AmeerBabu_photo.jpg";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title:
      "Transform your Manufacturing Business with ERPNext Implementation Services from iWEX Infomatics",
    date: "April 5, 2015",
    readTime: "4 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "Featured · General",
    image: image,
    desc1: `Looking to streamline your manufacturing operations? iWEX Infomatics offers top-notch ERPNext 
            implementation services tailored to manufacturing businesses. Find out how we can help you enhance 
            efficiency, optimize workflows, and boost productivity with our expert solutions.`,
    desc2: `<div class="space-y-12">
    <h2 class="text-3xl font-extrabold mb-4 text-blue-500">
      Why ERP is Crucial for Manufacturing Businesses
    </h2>

  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-blue-900">Streamlining Operations</h3>
      <p class="text-gray-700">
        Manufacturing businesses are complex entities with numerous moving parts. From inventory management to 
        production scheduling, every detail needs to be meticulously managed. An ERP system like ERPNext integrates 
        all these functions into a single platform, ensuring that data flows seamlessly across departments. 
        This integration reduces errors, improves communication, and helps in making informed decisions.
      </p>
    </div>

    <div class="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-green-900">Enhancing Efficiency</h3>
      <p class="text-gray-700">
        Efficiency is the name of the game in manufacturing. With ERPNext, tasks that once took hours can be completed in minutes. 
        Automation of routine tasks such as order processing, inventory tracking, and report generation frees up your staff 
        to focus on more strategic activities. The result? Increased productivity and a significant boost to your bottom line.
      </p>
    </div>

    <div class="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-yellow-900">Real-Time Data Access</h3>
      <p class="text-gray-700">
        In manufacturing, timely access to accurate data is critical. ERPNext provides real-time data access, allowing you to 
        monitor production processes, track inventory levels, and respond swiftly to any issues that arise. This real-time 
        visibility helps in maintaining high operational standards and minimizing downtime.
      </p>
    </div>
  </div>

  <div class="bg-white space-y-6">
    <h1 class="text-3xl font-bold text-blue-500">Key Features of ERPNext for Manufacturing</h1>
    
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">Inventory Management</h2>
      <p class="text-gray-700">
        One of the standout features of ERPNext is its robust inventory management capabilities. 
        It allows you to keep track of raw materials, work-in-progress, and finished goods with ease. 
        Automated reordering ensures you never run out of critical components, and detailed inventory 
        reports help in optimizing stock levels.
      </p>

      <h2 class="text-2xl font-semibold text-gray-800">Production Planning</h2>
      <p class="text-gray-700">
        ERPNext excels in production planning and scheduling. It enables you to create detailed production 
        plans, allocate resources efficiently, and monitor progress in real time. This leads to better utilization 
        of resources, reduced production costs, and timely delivery of products.
      </p>

      <h2 class="text-2xl font-semibold text-gray-800">Quality Control</h2>
      <p class="text-gray-700">
        Maintaining high-quality standards is paramount in manufacturing. ERPNext's quality control module helps you 
        implement stringent quality checks at various stages of production. This ensures that only products meeting your 
        quality standards reach the market, enhancing customer satisfaction and brand reputation.
      </p>

      <h2 class="text-2xl font-semibold text-gray-800">Cost Management</h2>
      <p class="text-gray-700">
        Keeping a tight grip on costs is essential for profitability. ERPNext provides detailed cost tracking and analysis, 
        helping you identify areas where savings can be made. By analyzing production costs, overheads, and other expenses, 
        you can make data-driven decisions to improve profitability.
      </p>
    </div>
  </div>
<div class="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
  <h1 class="text-3xl font-bold text-blue-500">Why Choose iWEX Infomatics for ERPNext Implementation?</h1>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">Expertise and Experience</h3>
      <p class="text-gray-700">
        iWEX Infomatics has a proven track record of successful ERPNext implementations across various industries, 
        with a special focus on manufacturing. Our team of experts understands the unique challenges faced by manufacturers 
        and tailors the ERPNext solution to meet your specific needs.
      </p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">Customized Solutions</h3>
      <p class="text-gray-700">
        We believe that no two businesses are alike. That's why we offer customized ERPNext implementation services. 
        Our team works closely with you to understand your business processes, identify pain points, 
        and develop a tailored solution that addresses your specific requirements.      </p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">Comprehensive Support</h3>
      <p class="text-gray-700">
        Implementing an ERP system is a significant undertaking, and iWEX Infomatics is with you every step of the way. 
        From initial consultation and planning to deployment and post-implementation support, we ensure a smooth transition 
        and minimal disruption to your operations.
      </p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">Training and Development</h3>
      <p class="text-gray-700">
        A successful ERP implementation goes beyond just deploying the software. We provide comprehensive training to your staff, 
        ensuring they are well-equipped to utilize ERPNext to its full potential. Our ongoing support and training programs help your 
        team stay updated with the latest features and best practices.
      </p>
    </div>
  </div>
</div>

  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-blue-500">Success Stories</h1>
    
    <div class="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold text-purple-900 mb-2">Case Study 1: ABC Manufacturing</h3>
      <p class="text-gray-700">
        ABC Manufacturing, a mid-sized company specializing in automotive parts, was struggling with inefficiencies and production delays. 
        After partnering with iWEX Infomatics for ERPNext implementation, they saw a 30% reduction in production lead times and a 20% increase 
        in overall efficiency. Real-time data access and automated inventory management were key factors in this transformation.
      </p>
    </div>

    <div class="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold text-pink-900 mb-2">Case Study 2: XYZ Industries</h3>
      <p class="text-gray-700">
        XYZ Industries, a large-scale manufacturer of consumer electronics, faced challenges in maintaining quality standards and managing costs. 
        iWEX Infomatics implemented a customized ERPNext solution that streamlined their quality control processes and provided detailed cost analysis. 
        As a result, XYZ Industries achieved a 15% reduction in production costs and a significant improvement in product quality.
    </div>
  </div>

  <div class="bg-white p-8 rounded-2xl shadow-lg space-y-4">
    <h1 class="text-3xl font-bold text-blue-500 mb-4">Frequently Asked Questions (FAQs)</h1>
    
    <div class="space-y-5">
      <div>
        <h3 class="text-xl font-semibold text-gray-800">What is ERPNext?</h3>
        <p class="text-gray-700">
          ERPNext is an open-source Enterprise Resource Planning (ERP) software that integrates various business processes into a single system. 
          It's designed to help businesses manage their operations more efficiently.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-800">How can ERPNext benefit manufacturing businesses?</h3>
        <p class="text-gray-700">
          ERPNext offers numerous features specifically tailored for manufacturing, such as inventory management, production planning, 
          quality control, and cost management. These features help streamline operations, enhance efficiency, and improve profitability.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-800">Why choose iWEX Infomatics for ERPNext implementation?</h3>
        <p class="text-gray-700">
          iWEX Infomatics has extensive experience in ERPNext implementations, particularly in the manufacturing sector. 
          We offer customized solutions, comprehensive support, and training to ensure a smooth and successful implementation.
        </p>
      </div>
    <div>
        <h3 class="text-xl font-semibold text-gray-800">How long does the ERPNext implementation process take?</h3>
        <p class="text-gray-700">
          The duration of the implementation process varies depending on the complexity of your business processes and specific requirements. 
          Typically, it can take anywhere from a few weeks to several months.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-800">Is ERPNext suitable for small manufacturing businesses?</h3>
        <p class="text-gray-700">
          Absolutely! ERPNext is highly scalable and can be customized to meet the needs of both small and large manufacturing businesses. 
          Its flexibility makes it an ideal choice for businesses of all sizes.
        </p>
      </div>
    </div>
  </div>
  <div>
    <h2 class="text-2xl font-bold mb-4 text-blue-500">Wrapping Up</h2>
    <p class="text-gray-700">
      In the competitive world of manufacturing, leveraging the right technology is crucial for success. iWEX Infomatics' ERPNext implementation 
      services offer a comprehensive solution to streamline your operations, enhance efficiency, and drive growth. With our expertise and customized 
      approach, we ensure that your ERPNext implementation is a resounding success. Ready to transform your manufacturing business? Contact iWEX Infomatics today!
    </p>
  </div>
</div>
`
  },
  {
    id: 2,
    title: "Sudden Shutdowns Affect Millions of Windows Computers",
    date: "July 20, 2025",
    readTime: "3 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "Technology",
    image: blog2,
    desc1: `A major tech issue has affected millions of Windows computer systems worldwide, causing a sudden shutdown or restart.`,
    desc2: `<div class="space-y-12">
  <h2 class="text-3xl font-extrabold mb-4 text-blue-500">
    The Global Tech Issue: What Happened?
  </h2>

  <!-- Issue Overview Section -->
  <div class="grid md:grid-cols-3 gap-6">
    <div class="bg-red-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-red-900">The Sudden Shutdowns</h3>
      <p class="text-gray-700">
        Early this morning, users across the globe began reporting sudden and unexpected shutdowns or restarts of their Windows computer systems. 
        This issue appears to be widespread, affecting various industries and sectors, from small businesses to large enterprises.
      </p>
    </div>
    <div class="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-yellow-900">Initial Findings</h3>
      <p class="text-gray-700">
        Preliminary investigations suggest that the problem may be linked to a recent update or a critical system vulnerability. 
        The exact cause remains under investigation, but experts are working round the clock to identify and resolve the issue.
      </p>
    </div>
    <div class="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-orange-900">Impact on Businesses and Individuals</h3>
      <p class="text-gray-700">
        The sudden shutdowns have disrupted workflows, caused data loss, and in some cases, led to hardware damage. 
        Businesses relying on Windows systems for their operations have been hit hard, with productivity taking a significant hit. 
        For individuals, the issue has caused frustration and inconvenience, disrupting both work and leisure activities.
      </p>
    </div>
  </div>

  <div class="bg-white space-y-6">
    <h1 class="text-3xl font-bold text-blue-500">
      Why ERPNext Sites on Linux and Mac OS Are Unaffected
    </h1>
    <div class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800">Stability and Security</h2>
      <p class="text-gray-700">
        ERPNext sites running on Linux and Mac OS have remained stable and unaffected by this issue. 
        These operating systems are renowned for their robust security and stability, which likely shielded them from the current crisis impacting Windows systems.
      </p>

      <h2 class="text-2xl font-semibold text-gray-800">Open-Source Advantage</h2>
      <p class="text-gray-700">
        Linux, being an open-source operating system, benefits from a large community of developers who continuously monitor, detect, and address vulnerabilities swiftly. 
        This proactive approach to security ensures that issues are often resolved before they can impact users.
      </p>

      <h2 class="text-2xl font-semibold text-gray-800">Mac OS Reliability</h2>
      <p class="text-gray-700">
        Similarly, Mac OS is known for its reliability and strong security measures. The combination of hardware and software optimisation in Apple products helps in mitigating such widespread issues.
      </p>
    </div>
  </div>

  <div class="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
    <h1 class="text-3xl font-bold text-blue-500">What You Can Do Now</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Immediate Steps</h3>
        <p class="text-gray-700">
          <ul>
            <li>Stay Informed: Keep an eye on updates from Microsoft and other reliable tech sources. Understanding the issue will help you take appropriate actions.</li>
            <li>Backup Data: Ensure all critical data is backed up. Use cloud services or external drives to safeguard your information.</li>
            <li>Avoid Rebooting: If your system is currently operational, avoid unnecessary reboots until more information is available.</li>
            <li>Disconnect Unnecessary Devices: External devices and peripherals should be disconnected to prevent potential data loss or hardware damage.</li>
          </ul>
        </p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-2 text-gray-900">Long-Term Measures</h3>
        <p class="text-gray-700">
          <ul>
            <li>Update Regularly: Always keep your operating system and software updated. Regular updates often include patches that fix vulnerabilities.</li>
            <li>Consider Alternatives: If feasible, explore using alternative operating systems like Linux or MacOS, especially for critical business applications.</li>
            <li>Invest in Security: Use reliable security software and practices to protect your systems from potential threats.</li>
          </ul>
        </p>
      </div>
    </div>
  </div>

  <div class="bg-white space-y-6">
    <h1 class="text-3xl font-bold text-blue-500">How iWEX Infomatics Can Help</h1>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-2 text-blue-900">Expert Support</h3>
        <p class="text-gray-700">
          At iWEX Infomatics, we understand the critical nature of such disruptions. Our team of experts is available to provide support and guidance during this crisis. 
          Whether you need assistance with data recovery, system stability, or exploring alternative solutions, we've got you covered.
        </p>
      </div>
      <div class="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold mb-2 text-green-900">ERPNext Implementation on Linux and Mac OS</h3>
        <p class="text-gray-700">
          Considering the stability and security of Linux and Mac OS, this might be an excellent time to explore ERPNext implementation on these platforms. 
          Our team specialises in seamless ERPNext deployments that ensure your business operations remain uninterrupted and secure.
        </p>
      </div>
    </div>
  </div>

  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-blue-500">Wrapping Up</h1>
    <p class="text-gray-700">
      Today's major tech issue serves as a stark reminder of the vulnerabilities in our digital landscape. 
      While millions of Windows users grapple with sudden shutdowns, ERPNext sites on Linux and Mac OS showcase the resilience of these alternative operating systems. 
      Staying informed, backing up data, and considering robust platforms like Linux and Mac OS can help mitigate such risks in the future. 
      If you're looking for expert guidance or considering an ERPNext implementation, iWEX Infomatics is here to help.
    </p>
    <p class="text-gray-700">
      Stay safe and informed!
    </p>
  </div>
</div>
`
  },
  {
    id: 3,
    title: "Major Changes Introduced by Bharatiya Nyaya Sanhita",
    date: "July 1, 2024",
    readTime: "6 min read",
    author: "Ameer Babu",
    authorImage: authorImage,
    category: "General",
    image: blog3,
    desc1: `How ERPNext can help your business adapt to the Bharatiya Nyaya Sanhita 2023?`,
    desc2: `<div class="space-y-12"> 

  <p class="mb-6 text-gray-800">
    ﻿Big changes for Indian businesses! The Bharatiya Nyaya Sanhita (BNS) 2023 is now in effect, bringing a more streamlined and tech-focused legal system. <br />
    Here's what you need to know:
  </p>

  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-blue-900">Faster Justice</h3>
      <p class="text-gray-700">
        BNS mandates quicker turnaround times for trials and charge framing.
      </p>
    </div>

    <div class="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
      <h3 class="text-xl font-semibold mb-2 text-green-900">Digital is Key</h3>
      <p class="text-gray-700">
        Online FIR filing, electronic summons, and mandatory videography at crime scenes are emphasized.
      </p>
    </div>
  </div>
  
  <div class="bg-white p-6 rounded-xl shadow space-y-6">
    <p class="text-gray-800">
      This is where <strong>ERPNext</strong>, a powerful open-source ERP system, can be a game-changer for your business.
    </p>
    
    <div class="space-y-4">
      <ul class="list-disc list-inside space-y-2">
        <li class="text-gray-700">
          <strong>Enhanced Recordkeeping:</strong> Maintain detailed records of transactions, contracts, and employee data for seamless compliance.
        </li>
        <li class="text-gray-700">
          <strong>Improved Audit Trails:</strong> Track every change within the system, ensuring a clear audit trail for legal scrutiny.
        </li>
        <li class="text-gray-700">
          <strong>Automated Workflows:</strong> Streamline internal processes for quicker response to legal inquiries.
        </li>
      </ul>
    </div>

    <div class="space-y-2">
      <p class="text-gray-800">By implementing ERPNext, you can:</p>
      <ul class="list-disc list-inside space-y-2">
        <li class="text-gray-700">
          <strong>Demonstrate Transparency:</strong> Showcase a commitment to ethical practices and responsible business conduct.
        </li>
        <li class="text-gray-700">
          <strong>Reduce Legal Risk:</strong> Mitigate potential liabilities with robust recordkeeping and compliance measures.
        </li>
        <li class="text-gray-700">
          <strong>Boost Efficiency:</strong> Free up time and resources by automating administrative tasks related to legal matters.
        </li>
      </ul>
    </div>

    <div class="text-gray-800 space-y-2">
      <p>The BNS signifies a new chapter in Indian law. Embrace the change and empower your business with ERPNext.</p>
      <p class="text-sm text-gray-500">#BNS2023 #ERPNext #Frappe #BusinessCompliance #DigitalIndia</p>
    </div>
  </div>
</div>
`
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-pink-50">
        <h2 className="text-2xl font-bold text-red-600">Blog not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-br overflow-hidden">
        {/* Glassy overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl"></div>

        <motion.div
          className="relative max-w-6xl mx-auto px-6 py-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-5 py-2 mb-5 text-sm font-semibold bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-blue-900 rounded-full shadow-lg backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {blog.category}
          </motion.span>
          <motion.h4
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 leading-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {blog.title}
          </motion.h4>
          <motion.div
            className="flex items-center gap-2 mb-8 -mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-gray-700 text-sm px-4 py-1 bg-white/50 rounded-full backdrop-blur-md shadow">
              {blog.date} · {blog.readTime}
            </p>
          </motion.div>
          <motion.p
            className="text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {blog.desc1}
          </motion.p>
          <motion.div
            className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-purple-200/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          <motion.article
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div dangerouslySetInnerHTML={{ __html: blog.desc2 }} />
          </motion.article>
          <div className="text-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-2xl shadow-lg text-center mt-8">
            <h2 className="text-2xl font-bold mb-2">Need help staying secure and resilient?</h2>
            <p className="mb-4">Contact iWEX Infomatics today and explore ERPNext on Linux and Mac OS!</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-gray-100 transition">Get Support</a>
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              to="/blogs"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-200 backdrop-blur-md"
            >
              ← Back to Blogs
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;