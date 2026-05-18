import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT_INFO, NAV_LINKS } from '@constants'
import './Footer.css'

interface FooterProps {
  currentPage: 'home' | 'contact' | 'mentions'
  setCurrentPage: (page: 'home' | 'contact' | 'mentions') => void
}

export function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-section-title">À propos</h3>
            <p className="footer-text">{CONTACT_INFO.bio}</p>
          </div>

          <div>
            <h3 className="footer-section-title">Liens rapides</h3>
            <ul className="footer-links-list">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className={currentPage === 'home' ? 'footer-link active' : 'footer-link'}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className={currentPage === 'contact' ? 'footer-link active' : 'footer-link'}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Nous contacter</h3>
            <div className="footer-social-links">
              <a
                href={`tel:${CONTACT_INFO.telephoneLien}`}
                className="footer-social-link"
                aria-label="Téléphone"
              >
                <Phone className="footer-social-icon" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail className="footer-social-icon" />
              </a>
              <a
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Localisation"
              >
                <MapPin className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} {CONTACT_INFO.nom}. Tous droits réservés.
            </p>
            <button
              onClick={() => setCurrentPage('mentions')}
              className="footer-legal-link"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
