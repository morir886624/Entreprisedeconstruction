import { SectionTitle, Button } from '@components/ui'

export function CertificationsSection() {
  return (
    <section className="certifications-section">
      <SectionTitle title="NOS CERTIFICATIONS" />
      <p className="certifications-text">
        Athies Batiment est certifié RGE avec le label ECO artisan. Le dispositif CEE peut prendre en charge environ 40% du montant de vos travaux réalisés avec des matériaux écologiques.
      </p>
      <div className="certifications-logos">
        <div className="cert-logo-placeholder">
          <span>RGE<br/>Eco-artisan</span>
        </div>
        <div className="cert-logo-placeholder">
          <span>CEE</span>
        </div>
      </div>
      <div className="cert-cta">
        <Button variant="secondary">EN SAVOIR PLUS</Button>
      </div>
    </section>
  )
}
