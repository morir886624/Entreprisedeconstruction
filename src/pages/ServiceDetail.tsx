import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
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
              <p>{service.fullDescription}</p>
            </div>
          </article>

          <CTASection onNavigateToContact={onNavigateToContact} />
        </div>
      </div>
    </>
  )
}
