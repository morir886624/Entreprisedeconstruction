import { useEffect } from 'react'
import {
  HeroSection,
  ServicesSection,
  BannerSection,
  CertificationsSection,
  CTASection,
} from '@sections/home'
import '@sections/home/home.css'

interface HomeProps {
  onNavigateToContact: () => void
  onNavigateToService: (serviceId: string) => void
}

export function Home({ onNavigateToContact, onNavigateToService }: HomeProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="home-container">
      <div className="home-content">
        <HeroSection onNavigateToContact={onNavigateToContact} />
        <ServicesSection onNavigateToService={onNavigateToService} />
        <BannerSection />
        <CertificationsSection />
        <CTASection onNavigateToContact={onNavigateToContact} />
      </div>
    </div>
  )
}
