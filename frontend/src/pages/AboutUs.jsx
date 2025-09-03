import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyOverview from "../sections/aboutUs/CompanyOverview";
import Expertise from "../sections/aboutUs/Expertise";
import Countries from "../sections/aboutUs/Countries";
import Milestones from "../sections/aboutUs/Milestones";

export default function AboutUs() {
  useEffect(() => {
      document.title = "About Us | IWEX Infomatics";
    }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        <CompanyOverview />
        <Expertise />
        <Countries />
        <Milestones />
      </div>
      <Footer />
    </>
  );
}
