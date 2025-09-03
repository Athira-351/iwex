import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaTelegramPlane, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-5 border-b border-gray-700 pb-2 tracking-wide">
            About Us
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            iWEX Infomatics is committed to delivering cutting-edge software
            solutions, empowering businesses with technology that drives
            innovation and success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5 border-b border-gray-700 pb-2 tracking-wide">Quick Links</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { label: "Products", href: "/products" },
              { label: "Training", href: "/training" },
              { label: "Career", href: "/career" },
              { label: "Contact Us", href: "/enquiry" },
              { label: "Enquiry", href: "/enquiry" },
              { label: "Tickets", href: "/tickets" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "FAQ", href: "/faq" },
              { label: "Blogs", href: "/blogs" },
              { label: "Login", href: "/auth" },
              { label: "Get a Free Demo", href: "/enquiry" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-5 border-b border-gray-700 pb-2 tracking-wide">
            Get Updates by Email
          </h2>
          <p className="text-gray-400 text-sm mb-5">
            Subscribe to our newsletter and stay updated with our latest products, services, and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 w-full sm:flex-1 transition"/>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-md text-white font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-5 border-b border-gray-700 pb-2 tracking-wide">Contact Us</h2>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <span className="select-text">
                <address className="not-italic leading-relaxed">
                  #XXI/152, Panadans,<br />
                  Cochin University Post,<br />
                  India - 682022
                </address>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500 text-lg" />
              <span className="select-text">
                +91-9744783338
              </span>
            </li>
            <li className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-lg" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaTelegramPlane className="text-sky-500 text-lg" />
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Telegram
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-red-400 text-lg" />
              <a href="mailto:emails@iwex.in" className="hover:text-white transition">
                emails@iwex.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} iWEX Infomatics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
