import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/logo.png";

const Forgot = ({ setView }) => {
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send login link");
    }
  };
  const inputStyle = "w-full px-4 py-1 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900";
  const buttonPrimary = "w-full bg-blue-900 hover:bg-blue-800 text-white py-1 rounded-lg font-semibold transition";

  return (
    <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-gray-200">
      <div className="text-center mb-6">
        <img className="w-20 mx-auto mb-4" src={Logo} alt="Logo" />
        <h4 className="text-2xl font-semibold text-gray-800">Forgot Password</h4>
      </div>
      <form onSubmit={handleForgot} className="space-y-3">
        <input
          type="email"
          className={inputStyle}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={buttonPrimary}>
          Send Login Link
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        <button className="text-blue-900 hover:underline" onClick={() => setView("login")}>
          Back to Login
        </button>
      </p>
    </section>
  );
};

export default Forgot;
