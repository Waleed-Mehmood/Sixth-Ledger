import React from "react";
import HeroSection from "../components/HeroSection";

import SubNavbar from "../components/SubNavbar";
import MovingText from "../components/MovingText";
import Services from "../components/Services";
import MovingLogos from "../components/MovingLogos";

import Footer from "../components/Footer";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import TeamSection from "../components/TeamSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <>
      <SubNavbar />
      <HeroSection />
      <MovingLogos />
      <Services />

      <MovingText />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}
