import { Button } from '@components/ui'

interface CTASectionProps {
  onNavigateToContact?: () => void
}

export function CTASection({ onNavigateToContact }: CTASectionProps) {
  return (
    <section className="services-cta-section">
      <h2 className="services-cta-title">Un projet en tête ?</h2>
      <p className="services-cta-description">
        Contactez-nous pour obtenir un devis gratuit et personnalisé pour vos travaux.
      </p>
      <div className="services-cta-buttons">
        <Button variant="primary" size="lg" onClick={() => window.location.href = 'tel:0646168723'}>
          Appeler maintenant
        </Button>
        <Button variant="secondary" size="lg" onClick={onNavigateToContact}>
          Demander un devis
        </Button>
      </div>
    </section>
  )
}
