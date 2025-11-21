import React from 'react'
import HeroSection from '../components/NotigamPage/HeroSection'
import StatsSection from '../components/NotigamPage/StatsSection'
import ServicesSection from '../components/NotigamPage/ServiceSection'
import DentRepairGallery from '../components/NotigamPage/DentRepairGallery'
import WhyChooseUs from '../components/NotigamPage/WhyChooseUs'
import NottinghamServiceAreas from '../components/NotigamPage/NottinghamServiceAreas'
import TestimonialsSection from '../components/NotigamPage/Review'
import DentRepairCTA from '../components/NotigamPage/DentRepairCTA'
import FAQSection from '../components/NotigamPage/FAQ'

const Notigam = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DentRepairGallery />
      <WhyChooseUs />
      <NottinghamServiceAreas />
      <TestimonialsSection />
      <DentRepairCTA />
      <FAQSection />
    </div>
  )
}

export default Notigam
