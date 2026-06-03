import { useEffect, useState } from 'react'
import { ArrowLeft, CheckCircle, ChevronDown, ChevronUp, MapPin } from 'lucide-react'
import { SERVICES } from '@constants'
import { serviceImages } from '@data/serviceImages'
import { CTASection } from '@sections/home'
import { Seo } from '@components/seo'
import './ServiceDetail.css'

interface ServiceDetailProps {
  serviceId: string
  onNavigateBack: () => void
  onNavigateToContact: () => void
}

export function ServiceDetail({ serviceId, onNavigateBack, onNavigateToContact }: ServiceDetailProps) {
  const service = SERVICES.find(s => s.id === serviceId)
  const image = service ? serviceImages[service.id] : null
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!service) {
    return (
      <>
        <Seo
          title="Service non trouvé - ABASSI BTP"
          description="Ce service n'existe pas. Découvrez nos prestations BTP à Strasbourg et en Alsace."
          path={`/services/${serviceId}`}
        />
        <div className="service-detail-container">
          <div className="service-detail-content">
            <h1>Service non trouvé</h1>
            <button onClick={onNavigateBack} className="back-link">
              <ArrowLeft className="h-5 w-5" />
              Retour à l'accueil
            </button>
          </div>
        </div>
      </>
    )
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Seo
        title={`${service.nom} à Strasbourg - ABASSI BTP`}
        description={`${service.description}. ${service.fullDescription.slice(0, 140)}...`}
        path={`/services/${service.id}`}
        image={image?.src}
      />
      <div className="service-detail-container">
        <div className="service-detail-content">
          <button onClick={onNavigateBack} className="back-link">
            <ArrowLeft className="h-5 w-5" />
            Retour aux services
          </button>

          <article className="service-detail-article">
            <div className="service-detail-hero">
              <img
                src={image?.src || service.image}
                alt={image?.alt || service.nom}
                className="service-detail-image"
                loading="lazy"
                decoding="async"
              />
              <div className="service-detail-overlay"></div>
              <h1 className="service-detail-title">{service.nom}</h1>
            </div>

            <div className="service-detail-description">
              {service.fullDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {service.avantages && service.avantages.length > 0 && (
              <section className="service-section">
                <h2 className="service-section-title">Nos engagements pour ce service</h2>
                <div className="service-avantages-grid">
                  {service.avantages.map((av, i) => (
                    <div key={i} className="service-avantage-card">
                      <CheckCircle className="service-avantage-icon" />
                      <div>
                        <h3 className="service-avantage-titre">{av.titre}</h3>
                        <p className="service-avantage-detail">{av.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.etapes && service.etapes.length > 0 && (
              <section className="service-section">
                <h2 className="service-section-title">Notre processus d'intervention</h2>
                <ol className="service-etapes-list">
                  {service.etapes.map((etape) => (
                    <li key={etape.numero} className="service-etape-item">
                      <div className="service-etape-numero">{etape.numero}</div>
                      <div className="service-etape-body">
                        <h3 className="service-etape-titre">{etape.titre}</h3>
                        <p className="service-etape-desc">{etape.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {service.materiaux && service.materiaux.length > 0 && (
              <section className="service-section">
                <h2 className="service-section-title">Matériaux et techniques utilisés</h2>
                <ul className="service-materiaux-list">
                  {service.materiaux.map((mat, i) => (
                    <li key={i} className="service-materiau-item">
                      <span className="service-materiau-dot"></span>
                      {mat}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.faq && service.faq.length > 0 && (
              <section className="service-section">
                <h2 className="service-section-title">Questions fréquentes</h2>
                <div className="service-faq-list">
                  {service.faq.map((item, i) => (
                    <div key={i} className="service-faq-item">
                      <button
                        className="service-faq-question"
                        onClick={() => toggleFaq(i)}
                        aria-expanded={openFaq === i}
                      >
                        <span>{item.question}</span>
                        {openFaq === i ? (
                          <ChevronUp className="service-faq-chevron" />
                        ) : (
                          <ChevronDown className="service-faq-chevron" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="service-faq-reponse">
                          <p>{item.reponse}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.zones && service.zones.length > 0 && (
              <section className="service-section service-zones-section">
                <div className="service-zones-header">
                  <MapPin className="service-zones-icon" />
                  <h2 className="service-section-title service-section-title--inline">
                    Zone d'intervention
                  </h2>
                </div>
                <p className="service-zones-intro">
                  ABASSI BTP intervient pour vos travaux de {service.nom.toLowerCase()} dans les communes suivantes et leurs environs :
                </p>
                <div className="service-zones-grid">
                  {service.zones.map((zone, i) => (
                    <span key={i} className="service-zone-tag">{zone}</span>
                  ))}
                </div>
              </section>
            )}
          </article>

          <CTASection onNavigateToContact={onNavigateToContact} />
        </div>
      </div>
    </>
  )
}
