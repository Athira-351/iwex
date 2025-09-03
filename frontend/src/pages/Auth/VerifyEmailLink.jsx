import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmailLink = ({ setUser }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyLink = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/verify-link?token=${token}`);
        localStorage.setItem("token", res.data.token); // Save user session locally
        localStorage.setItem("user", JSON.stringify(res.data.user)); // store user info
        setUser(res.data.user);
        // alert("Login successful!");
        navigate("/");
      } catch (err) {
        alert(err.response?.data?.message || "Invalid / expired link");
        navigate("/auth");
      }
    };

    if (token) verifyLink();
  }, [token]);

  return <p className="text-center mt-10">Verifying your login link...</p>;
};

export default VerifyEmailLink;
