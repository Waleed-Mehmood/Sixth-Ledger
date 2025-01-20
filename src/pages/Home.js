import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <>
   <HeroSection />
   <AboutSection />
   <WhyChooseUs />
   <TeamSection />
   <ContactSection />
   <BlogSection />
   <Footer />
   </>
  )
}
