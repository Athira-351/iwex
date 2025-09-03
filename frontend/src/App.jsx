import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Career from "./pages/Career";
import JobDetails from "./pages/JobDetails";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Enquiry from "./pages/Enquiry";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthContainer from "./pages/AuthContainer";
import BlogDetail from "./pages/BlogDetail";
import Forgot from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import VerifyEmailLink from "./pages/Auth/VerifyEmailLink";


export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/career" element={<Career />} />
      <Route path="/career/:id" element={<JobDetails />} />
      <Route path="/training" element={<Training />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/auth" element={<AuthContainer />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/auth/verify-email-link" element={<VerifyEmailLink setUser={setUser} />} />
      
    </Routes>
  );
}