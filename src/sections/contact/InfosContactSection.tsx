import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '@constants'

export function InfosContactSection() {
  return (
    <div className="contact-info-section">
      <div className="contact-info-card">
        <h3 className="contact-info-title">Nos coordonnées</h3>

        <div className="contact-info-items">
          <div className="contact-info-item">
            <Phone className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Téléphone</div>
              <a href={`tel:${CONTACT_INFO.telephoneLien}`} className="contact-info-value">
                {CONTACT_INFO.telephone}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <Mail className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Email</div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="contact-info-value">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <MapPin className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Adresse</div>
              <a
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-value"
              >
                {CONTACT_INFO.adresse}
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <Clock className="contact-info-icon" />
            <div>
              <div className="contact-info-label">Horaires</div>
              <div className="contact-info-value">
                {CONTACT_INFO.horaires}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
