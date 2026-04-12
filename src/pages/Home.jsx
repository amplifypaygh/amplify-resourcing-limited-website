import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
