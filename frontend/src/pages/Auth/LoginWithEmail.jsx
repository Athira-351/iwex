import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/logo.png";

const LoginWithEmail = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const inputStyle = "w-full px-4 py-1 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900";
  const buttonPrimary = "w-full bg-blue-900 hover:bg-blue-800 text-white py-1 rounded-lg font-semibold transition";

  const handleSendLink = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login-link", { email });
      setSuccessMessage(`A login link has been sent to ${email}. Please check your email to log in.`);
      setEmail("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send link");
    }
  };

  return (
    <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-gray-200">
      <div className="text-center mb-6">
        <img className="w-20 mx-auto mb-4" src={Logo} alt="Logo" />
        <h4 className="text-2xl font-semibold text-gray-800">
          Login with Email Link
        </h4>
      </div>
      <form onSubmit={handleSendLink} className="space-y-3">
        <input
          type="email"
          id="login_with_email_link_email"
          className={inputStyle}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className={buttonPrimary}>
          Send Login Link
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-green-600 text-center">{successMessage}</p>
      )}

      <p className="mt-6 text-center text-gray-600">
        <button 
          className="text-blue-900 hover:underline" 
          onClick={() => setView("login")}>
          Back to Login
        </button>
      </p>
    </section>
  );
};

export default LoginWithEmail;
