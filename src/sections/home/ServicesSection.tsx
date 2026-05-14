import { SectionTitle } from '@components/ui'
import { SERVICES, CONTACT_INFO } from '@constants'

interface ServicesSectionProps {
  onNavigateToService: (serviceId: string) => void
}

export function ServicesSection({ onNavigateToService }: ServicesSectionProps) {
  return (
    <section className="services-section">
      <SectionTitle
        title="NOS SERVICES"
        subtitle={CONTACT_INFO.bio}
      />
      <div className="services-grid">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => onNavigateToService(service.id)}
          >
            <img src={service.image} alt={service.nom} className="service-image" />
            <div className="service-overlay">
              <h3 className="service-name">{service.nom}</h3>
              <button className="service-btn">VOIR +</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
