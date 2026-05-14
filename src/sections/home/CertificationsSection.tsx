import { SectionTitle, Button } from '@components/ui'

export function CertificationsSection() {
  return (
    <section className="certifications-section">
      <SectionTitle title="NOTRE ENTREPRISE" />
      <p className="certifications-text">
        ABASSI BTP est une société par actions simplifiée (SAS) immatriculée au RCS de Strasbourg sous le numéro 100 492 750. Entreprise créée en 2026, nous mettons notre expertise au service de vos projets de construction et rénovation.
      </p>
      <div className="certifications-logos">
        <div className="cert-logo-placeholder">
          <span>SAS<br/>Depuis 2026</span>
        </div>
        <div className="cert-logo-placeholder">
          <span>RCS Strasbourg<br/>100 492 750</span>
        </div>
      </div>
    </section>
  )
}
