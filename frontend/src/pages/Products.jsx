import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import manufacturing from "../assets/productsManufacturing.jpg";
import service from "../assets/productsService.jpg";
import healthcare from "../assets/productsHealthcare.jpg";
import education from "../assets/productsEducation.png";

const services = [
  {
    title: "Manufacturing",
    image: manufacturing,
    desc: `We provide comprehensive ERPNext implementation support for manufacturing businesses. Our team of experts work closely with you to optimize your production workflows, inventory management, and quality control processes. This helps drive efficiency and profitability across your operations.<br /><br />
          We have deep experience serving clients in discrete and/or process manufacturing industries. This ensures a seamless transition to the powerful ERPNext platform, allowing you to unlock the full potential of this robust ERP system.<br /><br />
          Whether you're a small workshop or a large-scale production facility, our implementation services are tailored to your unique needs. We'll guide you through every step, from system configuration to user training, so you can start reaping the benefits of ERPNext as quickly as possible.`,
  },
  {
    title: "Distribution/Supply Chain",
    image: manufacturing,
    desc: `We provide expert ERPNext implementation support for businesses in the services and/or project-based industries. Our team of experienced consultants work closely with you to streamline your operations, improve resource planning, and enhance project management across various service sectors.<br /><br />
           We offer comprehensive ERPNext setup and configuration, resource planning optimization, advanced project management tools, and sales and service automation. Our expertise ensures a seamless transition to ERPNext, including after-sales support, warranty tracking, and periodic maintenance. We provide ongoing training and support to ensure your team fully leverages the platform's capabilities.<br /><br />
           Our deep expertise in implementing ERPNext for sales and service businesses ensures a seamless transition to the system. From initial configuration to ongoing user training, we'll guide you every step of the way to ensure you unlock the full potential of this robust ERP solution.`,
  },
  {
    title: "Services & Projects",
    image: service,
    desc: `We provide expert ERPNext implementation support for businesses in the services and/or project-based industries. Our team of experienced consultants work closely with you to streamline your operations, improve resource planning, and enhance project management across various service sectors.<br /><br />
          We offer comprehensive ERPNext setup and configuration, resource planning optimization, advanced project management tools, and sales and service automation. Our expertise ensures a seamless transition to ERPNext, including after-sales support, warranty tracking, and periodic maintenance. We provide ongoing training and support to ensure your team fully leverages the platform's capabilities.<br /><br />
          Our deep expertise in implementing ERPNext for sales and service businesses ensures a seamless transition to the system. From initial configuration to ongoing user training, we'll guide you every step of the way to ensure you unlock the full potential of this robust ERP solution.`,
  },
  {
    title: "Healthcare",
    image: healthcare,
    desc: `Elevate patient care with state-of-the-art medical facilities designed for comfort and efficiency. Our healthcare solutions prioritize creating environments that are welcoming and optimized for delivering the highest quality of care. From thoughtful space planning to the integration of the latest medical technologies, we work closely with our clients to bring their vision for the ideal healthcare experience to life.<br /><br />
          Empower your staff to provide exceptional care through optimized processes and integrated systems. By streamlining workflows, enhancing communication, and leveraging intelligent ERP solutions, we enable your team to focus on what matters most - providing personalized, compassionate care to every patient that walks through your doors.<br /><br />
          Deliver a seamless, personalized healthcare experience that puts patients at the center. We understand that each patient has unique needs and preferences. That's why our solutions are designed to deliver a tailored experience, from efficient appointment scheduling to customized treatment plans and aftercare support. By anticipating and addressing the evolving needs of your patients, you can build lasting trust and loyalty.`,
  },
  {
    title: "Education",
    image: education,
    desc: `We provide comprehensive ERPNext implementation support for educational institutions, helping them streamline their operations and improve student and faculty experiences. Our team of experts works closely with schools, colleges, and universities to understand their unique needs and tailor the solution accordingly.<br /><br />
          From managing student admissions and enrollment to tracking attendance, grades, and financial aid, we ensure a seamless digital transformation for your institution. Our end-to-end implementation services cover everything from system configuration and data migration to user training and ongoing support.<br /><br />
          By leveraging the power of ERPNext, we empower educational organizations to enhance their operational efficiency, increase transparency, and deliver a better experience for all stakeholders. Our goal is to help you unlock the full potential of your institution and drive long-term success.`,
  },
  {
    title: "Non-profit",
    image: manufacturing,
    desc: `ERPNext is an exceptional ERP solution for non-profit organizations, providing a comprehensive platform to streamline your operations and maximize your impact. With powerful features designed specifically for the unique needs of the non-profit sector, ERPNext empowers you to elevate your mission-driven work.<br /><br />
           Seamlessly manage your donors, grants, and volunteers through our integrated modules. Track donations, automate acknowledgements, and generate robust reporting to ensure full transparency for your stakeholders. Our grant management tools make it easy to stay on top of funding requirements and deadlines, while our volunteer coordination features simplify scheduling, communication, and recognition.<br /><br />
           Leverage ERPNext's financial management capabilities to maintain tight control over your budgets and expenditures. Automate invoicing, accounts payable, and payroll to free up your team to focus on your core programs and services. With powerful reporting and analytics, you can make data-driven decisions to drive your non-profit's growth and sustainability.`,
  },
];

const modules = [
  {
    title: "Selling & Buying",
    image: manufacturing,
    desc: `Streamline your entire procurement and sales processes with ERPNext's comprehensive Buying and Selling modules. Gain complete visibility and control over every stage, from material requisition and supplier quotes to purchase orders, sales invoices, and customer payments. The Buying module allows you to manage the full purchasing lifecycle from raising material requests, getting supplier quotes, and placing purchase orders to tracking goods receipt, payments, and taxes. Stay on top of your inventory, warehousing, and logistics with real-time insights. The Selling module empowers you to handle quotes, sales orders, delivery notes, and customer invoices all in one place. Automate your sales workflows, manage customer information, and gain valuable business intelligence to drive growth.`,
  },
  {
    title: "HR & Paroll",
    image: manufacturing,
    desc: `Streamline your workforce management with ERPNext's comprehensive HR and Payroll modules. Automate critical HR processes, from hiring and onboarding to employee records, leave management, and performance reviews. Stay compliant with local labor laws and regulations while empowering your team to reach new heights. The Payroll module seamlessly integrates with HR, enabling you to manage employee compensation, generate payslips, and handle statutory deductions and contributions. Gain visibility into your labor costs, streamline payroll processing, and ensure accurate and timely payments to your employees.`,
  },
  {
    title: "Website",
    desc: `Elevate your online presence and engage your audience with the powerful Website module in ERPNext. Build a fully customizable website that seamlessly integrates with your business operations. Showcase your products, services, and company information to attract new leads and delight existing customers. The Website module offers a user-friendly interface to manage your website content, create landing pages, and publish blogs. Leverage search engine optimization (SEO) tools to improve your online visibility and drive more traffic. Integrate your website with the CRM module to capture leads, streamline sales processes, and nurture customer relationships. Empower your team to update website content, monitor performance, and make real-time changes without relying on external developers. Deliver a consistent brand experience across your digital touchpoints and strengthen your online reputation.`,
  },
  {
    title: "Financial Accounting",
    desc: `Gain complete control over your financial operations with the robust Accounts module in ERPNext. Streamline your accounting workflows, from invoicing and payments to general ledger, taxation, and reporting. Automate critical processes like accounts receivable, accounts payable, and bank reconciliation to enhance efficiency and accuracy. The Accounts module seamlessly integrates with other ERPNext modules, providing you with a unified view of your business finances. Manage your chart of accounts, track income and expenses, and generate comprehensive financial statements and reports. Stay on top of your cash flow, monitor key performance indicators, and make informed decisions to drive profitability and growth.`,
  },
  {
    title: "Customer Relationship Management (CRM)",
    desc: `The ERPNext CRM module is your all-in-one solution for managing your sales pipeline, leads, and customer interactions. Easily track new opportunities, schedule follow-ups, and nurture relationships to drive business growth. With features like email integration, activity logs, and customizable workflows, you can optimize your sales process and deliver exceptional customer service.`,
  },
  {
    title: "Inventory",
    desc: `Streamline your operations with our all-in-one inventory management platform. Seamlessly integrate eCommerce, accounting, shipping, and more to gain complete visibility and control over your inventory across multiple locations.</b></b>
           Maximize efficiency, reduce errors, and make informed decisions that drive your business forward. Our flexible solution is designed to meet the unique needs of any industry.`,
  },
];

const Products = () => {
  useEffect(() => {
          document.title = "Products | IWEX Infomatics";
        }, []);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-gray-50 text-gray-900">
        <motion.section
  className="relative bg-blue-900 py-20 sm:py-32 text-center overflow-hidden"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Glassy overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-snug"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      Business Management System
    </motion.h1>

    <motion.p
      className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      ERPNext, ready for the following Business Verticals
    </motion.p>

    <motion.a
      href="/enquiry"
      className="inline-block bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-gray-100 transition text-sm sm:text-base -mb-[3rem] sm:mb-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Book a Demo
    </motion.a>
  </div>
</motion.section>


        <section className="py-16 px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Our ERPNext Solutions
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg flex flex-col hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-t-xl w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-700 mb-6"
                    dangerouslySetInnerHTML={{ __html: service.desc }}
                  ></p>
                  <motion.button
                    className="mt-auto bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="/enquiry">
                      Book a Demo
                    </a>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Carousel */}
        <section className="py-16 px-4 md:px-16 bg-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            ERPNext Modules
          </h2>
          <Slider {...carouselSettings}>
            {modules.map((module, idx) => (
              <div key={idx} className="px-4">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-[550px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}>
                  <h3 className="text-xl font-semibold mb-4">
                    {module.title}
                  </h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: module.desc }}></p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
