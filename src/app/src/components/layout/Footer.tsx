import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../../data';
import './Footer.css';

interface FooterProps {
  setCurrentPage?: (page: 'home' | 'contact') => void;
  currentPage?: 'home' | 'contact';
}

export function Footer({ setCurrentPage, currentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page: 'home' | 'contact') => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About */}
          <div>
            <h3 className="footer-section-title">À propos</h3>
            <p className="footer-text">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-title">Liens rapides</h3>
            <ul className="footer-links-list">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className={currentPage === 'home' ? 'footer-link active' : 'footer-link'}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className={currentPage === 'contact' ? 'footer-link active' : 'footer-link'}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-section-title">Nous contacter</h3>
            <div className="footer-social-links">
              <a
                href={`tel:${personalInfo.phone.replace(/\./g, '')}`}
                className="footer-social-link"
                aria-label="Téléphone"
              >
                <Phone className="footer-social-icon" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail className="footer-social-icon" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zone+industrielle+les+Minimes+47+Rue+Georges+Brassens+02840+Athies-sous-Laon"
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

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}. Tous droits réservés.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}