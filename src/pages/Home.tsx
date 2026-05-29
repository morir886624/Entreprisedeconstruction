import { useEffect } from 'react'
import {
  HeroSection,
  ServicesSection,
  BannerSection,
  CertificationsSection,
  CTASection,
} from '@sections/home'
import { Seo } from '@components/seo'
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
      <Seo
        title="ABASSI BTP - Entreprise de BTP à Strasbourg et en Alsace"
        description="Entreprise de BTP spécialisée en maçonnerie, ravalement, isolation, bardage, terrassement et rénovation à Strasbourg, Illkirch et en Alsace. Devis gratuit."
        path="/"
      />
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
