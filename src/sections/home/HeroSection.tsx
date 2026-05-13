import { Phone, ChevronDown } from 'lucide-react'
import { Button } from '@components/ui'
import { SERVICES } from '@constants'

interface HeroSectionProps {
  onNavigateToContact?: () => void
}

export function HeroSection({ onNavigateToContact }: HeroSectionProps) {
  return (
    <section className="hero-section-construction">
      <div className="hero-logo-main">
        <img src="/logo.png" alt="Athies Batiment Logo" className="hero-logo-image" />
      </div>

      <h1 className="hero-title-construction">
        Couvreur, Maçon & Menuisier
        <br />
        <span className="hero-location-accent">à Laon et dans l'Aisne (02)</span>
      </h1>

      <p className="hero-subtitle-construction">
        Travaux de rénovation, construction et isolation pour particuliers et professionnels
      </p>

      <div className="services-pills">
        {SERVICES.map((service) => (
          <span key={service.id} className="service-pill">
            {service.nom}
          </span>
        ))}
      </div>

      <div className="certifications-badges">
        <span className="cert-badge">✔ Certifié RGE</span>
        <span className="cert-badge">✔ Certifié Eco-artisan</span>
        <span className="cert-badge">📍 Laon • Reims • Soissons</span>
      </div>

      <div className="hero-cta-buttons">
        <Button variant="primary" size="lg" onClick={onNavigateToContact}>
          DEMANDER UN DEVIS GRATUIT
        </Button>
        <Button variant="secondary" size="lg" onClick={() => window.location.href = 'tel:0646168723'}>
          <Phone className="w-5 h-5" />
          06.46.16.87.23
        </Button>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">DÉCOUVRIR</span>
        <ChevronDown className="scroll-arrow" />
      </div>
    </section>
  )
}
