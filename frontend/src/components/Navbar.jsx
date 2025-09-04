import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const sidebarRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const storedUserStr = localStorage.getItem("user");
    if (storedUserStr && storedUserStr !== "undefined") {
      try {
        setUser(JSON.parse(storedUserStr));
      } catch (err) {
        console.error("Failed to parse user:", err);
        localStorage.removeItem("user");
        setUser(null);
      }
    }

    // Listen for localStorage changes across tabs
    const handleStorageChange = () => {
      const updatedUserStr = localStorage.getItem("user");
      if (updatedUserStr && updatedUserStr !== "undefined") {
        try {
          setUser(JSON.parse(updatedUserStr));
        } catch {
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  //close sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]); 

  const isHome = window.location.pathname === "/";
  const transparentMode = isHome && !scrolled;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowUserMenu(false);
    window.location.href = "/auth"; 
  };

  return (
    <header>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${transparentMode ? "bg-transparent" : "bg-white shadow-md"}`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <a href="/">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
            <li>
              <a href="/about"
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"}`} >
                About Us
              </a>
            </li>
            <li>
              <a href="/products"
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"}`} >
                Products
              </a>
            </li>
            <li>
              <a href="/training"
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"}`} >
                Training
              </a>
            </li>
            <li>
              <a href="/career"
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"}`}>
                Career
              </a>
            </li>

            {/* Contact Dropdown */}
            <div className="relative group">
              <button
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"} font-medium focus:outline-none`} >
                Contact Us
              </button>
              <div
                className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
                <a href="/enquiry"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Enquiry
                </a>
                <a
                  href="#tickets"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Tickets
                </a>
                <a
                  href="/privacy-policy"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Privacy Policy
                </a>
                <a
                  href="/faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm" >
                  FAQ
                </a>
              </div>
            </div>

            <li>
              <a
                href="/blogs"
                className={`${transparentMode ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-black"}`} >
                Blogs
              </a>
            </li>

            {/* Login or User */}
            <li className="relative">
              {user ? (
                <span
                  className={`px-6 py-2 rounded-full font-semibold cursor-pointer border border-blue-400 ${transparentMode ? "text-white" : "text-gray-700"}`}
                  onClick={() => setShowUserMenu(!showUserMenu)}>
                  {user.fullName || user.email}
                </span>
              ) : (
                <a
                  href="/auth"
                  className={`border border-blue-400 px-8 py-2 rounded-full font-semibold ${transparentMode ? "text-white" : "text-gray-700"}`}>
                  Login
                </a>
              )}

              {/* User dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
                    Logout
                  </button>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${transparentMode ? "text-white" : "text-gray-700"} text-2xl`}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6">
            <ul className="space-y-6 font-medium text-gray-700">
              <li>
                <a href="/about" onClick={() => setMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="/training" onClick={() => setMenuOpen(false)}>
                  Training
                </a>
              </li>
              <li>
                <a href="/career" onClick={() => setMenuOpen(false)}>
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/enquiry"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Enquiry
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Tickets
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm" >
                  FAQ
                </a>
              </li>
              <li>
                <a href="/blogs" onClick={() => setMenuOpen(false)}>
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/auth"
                  className="border border-blue-400 px-6 py-2 rounded-full text-blue-500 font-semibold"
                  onClick={() => setMenuOpen(false)}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
