import { useEffect } from 'react'
import './MentionsLegales.css'

export function MentionsLegales() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="mentions-page">
      <div className="mentions-container">
        <h1 className="mentions-title">Mentions Légales</h1>

        <div className="mentions-status-banner">
          <p>⚠️ Site en cours de construction</p>
        </div>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Propriétaire du site</h2>
          <div className="mentions-info-block">
            <p className="mentions-text">
              <strong>Raison sociale :</strong> ABASSI BTP
            </p>
            <p className="mentions-text">
              <strong>SIRET :</strong> Coming soon
            </p>
            <p className="mentions-text">
              <strong>Adresse :</strong> 7 Esplanade Solange Fernex, 67400 Illkirch-Graffenstaden, France
            </p>
            <p className="mentions-text">
              <strong>Téléphone :</strong> <a href="tel:+33768245995" className="mentions-link">+33 7 68 24 59 95</a>
            </p>
            <p className="mentions-text">
              <strong>Email :</strong> <a href="mailto:Abassyan67@gmail.com" className="mentions-link">Abassyan67@gmail.com</a>
            </p>
            <p className="mentions-text">
              <strong>Site web :</strong> <a href="https://btp.morir.fr/" target="_blank" rel="noopener noreferrer" className="mentions-link">https://btp.morir.fr/</a>
            </p>
          </div>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Conception et développement du site</h2>
          <p className="mentions-text">
            <strong>Contact créateur :</strong> <a href="mailto:moeid6624@gmail.com" className="mentions-link">moeid6624@gmail.com</a>
          </p>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Hébergement</h2>
          <div className="mentions-info-block">
            <p className="mentions-text">
              Le site est hébergé par <strong>Hostinger</strong>
            </p>
            <p className="mentions-text">
              Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="mentions-link">hostinger.fr</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
