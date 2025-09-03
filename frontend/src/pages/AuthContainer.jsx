import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import LoginWithEmail from "./Auth/LoginWithEmail";

const AuthContainer = () => {
  const [view, setView] = useState("login");
  const [resetToken, setResetToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const reset = params.get("reset");

    if (reset && token) {
      setResetToken(token);
      setView("reset");
    } else if (token) {
      axios
        .get(`http://localhost:5000/api/auth/verify-link?token=${encodeURIComponent(token)}`)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.history.replaceState({}, "", "/");
          alert("Logged in via email link");
          setView("login");
        })
        .catch(() => alert("Invalid or expired link"));
    }
  }, []);

  const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const handleReset = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
          token: resetToken,
          newPassword,
        });
        alert(res.data.message);
        setView("login");
      } catch (err) {
        alert(err.response?.data?.message || "Failed to reset password");
      }
    };
    return (
      <form onSubmit={handleReset} className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto">
        <h4 className="text-2xl font-semibold text-center mb-6">Reset Password</h4>
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-3 border rounded-lg"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg mt-4">
          Update Password
        </button>
      </form>
    );
  };

  const renderView = () => {
    switch (view) {
      case "login": return <Login setView={setView} />;
      case "signup": return <Signup setView={setView} />;
      case "forgot": return <ForgotPassword setView={setView} />;
      case "email-link": return <LoginWithEmail setView={setView} />;
      case "reset": return <ResetPassword />;
      default: return <Login setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
        {renderView()}
      </div>
    </div>
  );
};

export default AuthContainer;
