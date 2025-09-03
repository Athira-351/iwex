import React from "react";
import Hero from "./home/Hero";
import About from "./home/About";

const StickySection = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 h-[100vh] md:h-screen">
        <Hero />
      </div>
      <div className="md:h-screen">
        <About />
      </div>
    </div>
  );
};

export default StickySection;