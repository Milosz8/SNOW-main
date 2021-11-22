import React, { useState } from "react";

import HeroSection from "../components/HeroSection";

import AboutSection from "../components/AboutSection/AboutSection";

import KoncertySection from "../components/Koncerty/KoncertySection";

import GalerySection from "../components/Galery/GalerySection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <GalerySection />
      <KoncertySection />
    </>
  );
};

export default Home;
