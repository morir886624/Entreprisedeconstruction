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
          <p>⚠️ Site en cours de création</p>
        </div>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Propriétaire du site</h2>
          <div className="mentions-info-block">
            <p className="mentions-text">
              <strong>Raison sociale :</strong> Athies Batiment
            </p>
            <p className="mentions-text">
              <strong>SIRET :</strong> 83977760400027
            </p>
            <p className="mentions-text">
              <strong>Adresse :</strong> Zone industrielle les Minimes, 47 Rue Georges Brassens, 02840 Athies-sous-Laon, France
            </p>
            <p className="mentions-text">
              <strong>Téléphone :</strong> <a href="tel:0646168723" className="mentions-link">06.46.16.87.23</a>
            </p>
            <p className="mentions-text">
              <strong>Email :</strong> <a href="mailto:jeanbaptiste.prudhomme@sfr.fr" className="mentions-link">jeanbaptiste.prudhomme@sfr.fr</a>
            </p>
            <p className="mentions-text">
              <strong>URL du site :</strong> <a href="https://btp.morir.fr/" target="_blank" rel="noopener noreferrer" className="mentions-link">https://btp.morir.fr/</a>
            </p>
          </div>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Conception et développement du site</h2>
          <p className="mentions-text">
            Ce site a été conçu et développé par <strong>Hexa web</strong>, agence de création de sites internet sur mesure.
          </p>
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

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Gestion des données personnelles</h2>
          <p className="mentions-text">
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
          </p>
          <p className="mentions-text">
            À l'occasion de l'utilisation du site <strong>https://btp.morir.fr/</strong>, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
          </p>
          <p className="mentions-text">
            En tout état de cause, l'entreprise <strong>Athies Batiment</strong> ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie.
          </p>
          <p className="mentions-text">
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant.
          </p>
          <p className="mentions-text">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : <a href="mailto:jeanbaptiste.prudhomme@sfr.fr" className="mentions-link">jeanbaptiste.prudhomme@sfr.fr</a>
          </p>
          <p className="mentions-text">
            Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
          </p>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Liens hypertextes et cookies</h2>
          <p className="mentions-text">
            Le site <strong>https://btp.morir.fr/</strong> contient un certain nombre de liens hypertextes vers d'autres sites. Cependant, l'entreprise <strong>Athies Batiment</strong> n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p className="mentions-text">
            La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site.
          </p>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Propriété intellectuelle</h2>
          <p className="mentions-text">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="mentions-text">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section className="mentions-section">
          <h2 className="mentions-subtitle">Limitation de responsabilité</h2>
          <p className="mentions-text">
            <strong>Athies Batiment</strong> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
          <p className="mentions-text">
            <strong>Athies Batiment</strong> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.
          </p>
        </section>

        <section className="mentions-section">
          <p className="mentions-text mentions-update">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  )
}
