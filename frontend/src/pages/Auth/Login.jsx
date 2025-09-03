import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Login = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.dispatchEvent(new Event("storage"));
      }
      localStorage.setItem("token", res.data.token);
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const inputStyle = "w-full px-4 py-1 rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900";
  const buttonPrimary = "w-full bg-blue-900 hover:bg-blue-800 text-white py-1 rounded-lg font-semibold transition";
  const buttonSecondary = "w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 rounded-lg transition";

  return (
    <>
      <Navbar />
      <section className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto border border-gray-200 md:mt-30">
        <div className="text-center mb-6">
          <img className="w-20 mx-auto mb-4" src={Logo} alt="Logo" />
          <h4 className="text-2xl font-semibold text-gray-800">
            Login to iWEX
          </h4>
        </div>
        <form onSubmit={handleLogin} className="space-y-3">
          <input 
            type="text" 
            id="login_email" 
            className={inputStyle} 
            placeholder="Email or Mobile or Username" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required />
          <div className="relative">
            <input
              type="password"
              id="login_password"
              className={inputStyle}
              placeholder="Password"
              value={password} onChange={e => setPassword(e.target.value)}
              required />
            <span
              className="absolute right-4 top-3 text-gray-500 cursor-pointer text-sm"
              onClick={() => {
                const input = document.getElementById("login_password");
                input.type = input.type === "password" ? "text" : "password";
              }}>
              Show
            </span>
          </div>
          <p className="text-right">
            <button
              type="button"
              className="text-blue-900 hover:underline text-sm"
              onClick={() => setView("forgot")}>
              Forgot Password?
            </button>
          </p>
          <button
            type="submit"
            className={buttonPrimary}>
            Login
          </button>
        </form>
        <div className="mt-1 text-center text-gray-500">
          <p className="-mb-2">or</p>
          <button
            onClick={() => setView("email-link")}
            className={buttonSecondary}>
            Login with Email Link
          </button>
        </div>
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup">
            <button
              className="text-blue-900 hover:underline"
              onClick={() => setView("signup")}>
              <strong>Sign up</strong>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
