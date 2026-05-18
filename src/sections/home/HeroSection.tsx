import { Phone, ChevronDown } from 'lucide-react'
import { Button } from '@components/ui'
import { SERVICES } from '@constants'

interface HeroSectionProps {
  onNavigateToContact: () => void
}

export function HeroSection({ onNavigateToContact }: HeroSectionProps) {
  return (
    <section className="hero-section-construction">
      <div className="hero-logo-main">
        <img src="/logo.png" alt="ABASSI BTP Logo" className="hero-logo-image" />
      </div>

      <h1 className="hero-title-construction">
        Entreprise de BTP
        <br />
        <span className="hero-location-accent">à Illkirch et en Alsace</span>
      </h1>

      <p className="hero-subtitle-construction">
        Gros œuvre, rénovation et aménagement extérieur pour particuliers et professionnels
      </p>

      <div className="services-pills">
        {SERVICES.map((service) => (
          <span key={service.id} className="service-pill">
            {service.nom}
          </span>
        ))}
      </div>

      <div className="certifications-badges">
        <span className="cert-badge">📅 Depuis 2026</span>
        <span className="cert-badge">🏢 SAS</span>
        <span className="cert-badge">📍 Illkirch • Alsace</span>
      </div>

      <div className="hero-cta-buttons">
        <Button variant="primary" size="lg" onClick={onNavigateToContact}>
          DEMANDER UN DEVIS GRATUIT
        </Button>
        <Button variant="secondary" size="lg" onClick={() => window.location.href = 'tel:0768245995'}>
          <Phone className="w-5 h-5" />
          07 68 24 59 95
        </Button>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">DÉCOUVRIR</span>
        <ChevronDown className="scroll-arrow" />
      </div>
    </section>
  )
}
