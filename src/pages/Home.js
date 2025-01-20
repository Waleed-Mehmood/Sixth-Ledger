import { React, useRef } from "react";
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
import OurProcess from "../components/OurProcess";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SubNavbar />
      <div ref={heroRef}>
        <HeroSection
          scrollToSection={scrollToSection}
          refs={{ heroRef, servicesRef, aboutRef, contactRef }}
        />
      </div>
      <MovingLogos />
      <div ref={servicesRef}>
        <Services />
      </div>
      <MovingText />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <WhyChooseUs />
      <OurProcess/>
      <TeamSection />
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <BlogSection />
      <Footer />
    </>
  );
}
