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
import FAQsSection from "../components/FAQsSection";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const teamRef = useRef(null);
  const faqsRef = useRef(null);
  const processRef = useRef(null);

  // Scroll function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SubNavbar
        scrollToSection={scrollToSection}
        refs={{ contactRef, faqsRef }}
      />
      <div ref={heroRef}>
        <HeroSection
          scrollToSection={scrollToSection}
          refs={{ heroRef, servicesRef, aboutRef, contactRef, teamRef }}
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
      <div ref={processRef}>
        <OurProcess />
      </div>
      <div ref={teamRef}>
        <TeamSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <div ref={faqsRef}>
        <FAQsSection />
      </div>
      <div ref={blogRef}>
        <BlogSection />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        refs={{
          heroRef,
          servicesRef,
          aboutRef,
          contactRef,
          blogRef,
          teamRef,
          faqsRef,
          processRef
        }}
      />
    </>
  );
}
