import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { SERVICES } from '@constants'
import { serviceImages } from '@data/serviceImages'
import { CTASection } from '@sections/home'
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
      <div className="service-detail-container">
        <div className="service-detail-content">
          <h1>Service non trouvé</h1>
          <button onClick={onNavigateBack} className="back-link">
            <ArrowLeft className="h-5 w-5" />
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail-content">
        <button onClick={onNavigateBack} className="back-link">
          <ArrowLeft className="h-5 w-5" />
          Retour aux services
        </button>

        <div className="service-detail-hero">
          <img
            src={image?.src || service.image}
            alt={image?.alt || service.nom}
            className="service-detail-image"
          />
          <div className="service-detail-overlay"></div>
          <h1 className="service-detail-title">{service.nom}</h1>
        </div>

        <div className="service-detail-description">
          <p>{service.fullDescription}</p>
        </div>

        <CTASection onNavigateToContact={onNavigateToContact} />
      </div>
    </div>
  )
}
