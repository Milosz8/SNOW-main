import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavMenu from "../components/Navbar";
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavMenu toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <GalerySection />
      <KoncertySection />
    </>
  );
};

export default Home;
