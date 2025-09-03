import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const faqData = [
  {
    question: "How do I implement ERPNext?",
    answer:
      "ERPNext is designed for self-implementation, and most companies don’t need any help, just a bit of determination. To help you, there are tons of videos and other resources that will help you. If you sign up for a paid account, we conduct one-on-one sessions to help you configure the system.",
  },
  {
    question: "Will self hosting be better?",
    answer:
      "It depends. ERPNext is 100% Free and Open Source and depending on your scale and capability, self-hosting may be the right solution for you. Learn more about the enterprise services. If you are running a company, the cloud-hosting will be suitable for you. If you setup ERPNext on your own, then you start with a base cost of around $40/month for a VPS, then you’ll need to pay extra for email, security and backups services. After that you’ll spend a few hours installing and setting up everything, and also set aside a few hours of your time each month for maintenance + software updates, or maybe get someone to do that for you. Which gets expensive pretty quick. Frappe Cloud on the other hand, takes away all of that so you can focus on what you do best.",
  },
  {
    question: "Can I get a one-on-one demo?",
    answer:
      "Yes, we would be happy to schedule a remote, one-on-one demo. Just send us a request for one.",
  },
  {
    question: "Do you have discounts for education institutes?",
    answer:
      "Yes, ERPNext support non-profit and education institute with a 30% discount. Contact Us to apply.",
  },
  {
    question: "Is ERPNext available in my language?",
    answer:
      "Most likely yes! ERPNext has been translated to more than 70 languages with the help of the community.",
  },
  {
    question: "Can I pay via credit card or wire transfer?",
    answer:
      "Yes, you can make payment from your account using your credit/debit card or online banking. Connect us for more details.",
  },
];

const FAQ = () => {
  useEffect(() => {
      document.title = "FAQ | IWEX Infomatics";
    }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6 w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-4 w-full">
              <div className="w-full">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-black-700 hover:text-blue-900"
                >
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transform transition-transform ${ openIndex === index ? "rotate-180" : "" }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`mt-2 text-gray-600 w-full transition-all duration-300 ${ openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden" }`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
