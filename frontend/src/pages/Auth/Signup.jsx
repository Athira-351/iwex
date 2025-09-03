import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/logo.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Signup = ({ setView }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        email,
        password,
      });

      //  only show success if backend confirms
      if (res.data.success) {
        alert(res.data.message);
        setView("login");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  const inputStyle = "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900";
  const buttonPrimary = "w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition";

  return (
    <>
      <Navbar />
      <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-gray-200 md:mt-30 md:mb-20">
        <div className="text-center mb-6">
          <img className="w-20 mx-auto mb-4" src={Logo} alt="Logo" />
          <h4 className="text-2xl font-semibold text-gray-800">
            Create an iWEX Account
          </h4>
        </div>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            id="signup_fullname"
            className={inputStyle}
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            id="signup_email"
            className={inputStyle}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className={buttonPrimary}>
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          <button
            className="text-blue-900 hover:underline"
            onClick={() => setView("login")}>
            Have an account?
            <a href="/auth">
              <strong>Login</strong>
            </a>
          </button>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
