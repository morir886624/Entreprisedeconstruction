import { SectionTitle } from '@components/ui'
import { SERVICES, CONTACT_INFO } from '@constants'
import { serviceImages } from '@data/serviceImages'

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
        {SERVICES.map((service) => {
          const image = serviceImages[service.id]
          return (
            <article
              key={service.id}
              className="service-card"
              onClick={() => onNavigateToService(service.id)}
            >
              <img
                src={image?.src || service.image}
                alt={image?.alt || service.nom}
                className="service-image"
                loading="lazy"
                decoding="async"
              />
              <div className="service-overlay">
                <h3 className="service-name">{service.nom}</h3>
                <button className="service-btn">VOIR +</button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
