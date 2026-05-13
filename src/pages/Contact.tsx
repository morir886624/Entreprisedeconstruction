import { useEffect } from 'react'
import { FormulaireSection, InfosContactSection } from '@sections/contact'
import '@sections/contact/contact.css'

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="contact-page">
      <div className="contact-page-content">
        <div className="contact-header">
          <h1 className="contact-title">Demander un devis gratuit</h1>
          <p className="contact-subtitle">
            Vous avez un projet de construction, rénovation ou isolation ? Contactez-nous pour obtenir un devis gratuit et personnalisé !
          </p>
        </div>

        <div className="contact-grid">
          <FormulaireSection />
          <InfosContactSection />
        </div>
      </div>
    </div>
  )
}
