import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatWeDid from '../sections/home/WhatWeDid';
import Services from '../sections/home/Services';
import CustomerReviews from '../sections/home/CustomerReviews';
import Technologies from '../sections/home/Technologies';
import TechShowcase from '../sections/home/TechShowcase';
import StepsSection from '../sections/home/StepsSection';
import StickySection from '../sections/StickySection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <StickySection />
      <WhatWeDid />
      <TechShowcase />
      <Services />
      <CustomerReviews />
      <Technologies />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default Home;