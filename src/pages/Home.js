import React from 'react'
import HeroSection from '../components/HeroSection'
import SubNavbar from '../components/SubNavbar'
import MovingText from '../components/MovingText'
import Services from '../components/Services'
import MovingLogos from '../components/MovingLogos'

export default function Home() {
  return (
    <>
   <SubNavbar />
   <HeroSection />
   <MovingText />
   <Services />
   <MovingLogos />
   </>
  )
}
