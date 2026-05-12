import { Phone, Mail, MapPin, Clock, CheckCircle, ChevronDown } from 'lucide-react';
import { ShineText } from '../common/ShineText';
import { personalInfo } from '../../data';
import { useEffect } from 'react';
import './Home.css';

export function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      name: 'COUVERTURE',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop'
    },
    {
      name: 'MAÇONNERIE',
      image: 'https://images.unsplash.com/photo-1597476374792-c9e5bfdca9ff?w=600&h=400&fit=crop'
    },
    {
      name: 'MENUISERIE',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop'
    },
    {
      name: 'RÉNOVATION',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop'
    },
    {
      name: 'ISOLATION',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop'
    },
    {
      name: 'PEINTURE - PLÂTRERIE',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'TÉLÉPHONE',
      content: '06.46.16.87.23',
      link: 'tel:0646168723',
      linkText: 'APPELER'
    },
    {
      icon: Mail,
      title: 'MAIL',
      content: 'jeanbaptiste.prudhomme@sfr.fr',
      link: 'mailto:jeanbaptiste.prudhomme@sfr.fr',
      linkText: 'ENVOYER UN EMAIL'
    },
    {
      icon: Clock,
      title: 'HORAIRES',
      content: 'Du lundi au vendredi, de 9h00 à 18h00',
      link: '#',
      linkText: 'NOUS RENCONTRER'
    },
    {
      icon: MapPin,
      title: 'ADRESSE',
      content: 'Zone industrielle les Minimes, 47 Rue Georges Brassens, 02840 Athies-sous-Laon',
      link: 'https://www.google.com/maps/search/?api=1&query=Zone+industrielle+les+Minimes+47+Rue+Georges+Brassens+02840+Athies-sous-Laon',
      linkText: "VOIR L'ITINÉRAIRE"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        {/* SECTION 1 — HERO */}
        <div className="hero-section-construction">
          <div className="hero-logo-main">
            <img src="/logo.png" alt="Athies Batiment Logo" className="hero-logo-image" />
          </div>

          <h1 className="hero-title-construction">
            Couvreur, Maçon & Menuisier
            <br />
            <span className="hero-location-accent">à Laon et dans l'Aisne (02)</span>
          </h1>

          <p className="hero-subtitle-construction">
            Travaux de rénovation, construction et isolation pour particuliers et professionnels
          </p>

          <div className="services-pills">
            <span className="service-pill">Couverture</span>
            <span className="service-pill">Maçonnerie</span>
            <span className="service-pill">Menuiserie</span>
            <span className="service-pill">Rénovation</span>
            <span className="service-pill">Isolation</span>
            <span className="service-pill">Peinture</span>
          </div>

          <div className="certifications-badges">
            <span className="cert-badge">✔ Certifié RGE</span>
            <span className="cert-badge">✔ Certifié Eco-artisan</span>
            <span className="cert-badge">📍 Laon • Reims • Soissons</span>
          </div>

          <div className="hero-cta-buttons">
            <a href="#contact" className="btn-primary-large">
              DEMANDER UN DEVIS GRATUIT
            </a>
            <a href="tel:0646168723" className="btn-secondary-large">
              <Phone className="w-5 h-5" />
              06.46.16.87.23
            </a>
          </div>

          <div className="scroll-indicator">
            <span className="scroll-text">DÉCOUVRIR</span>
            <ChevronDown className="scroll-arrow" />
          </div>
        </div>

        {/* SECTION 2 — NOS SERVICES */}
        <div className="services-section">
          <h2 className="section-title">NOS SERVICES</h2>
          <p className="services-intro">
            Athies Batiment vous propose ses services pour réaliser vos travaux de maçonnerie générale et gros œuvre dans le secteur de Laon. Couverture, maçonnerie, menuiserie, isolation et peinture — artisans qualifiés selon vos besoins.
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.name} className="service-card">
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-overlay">
                  <h3 className="service-name">{service.name}</h3>
                  <button className="service-btn">VOIR +</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3 — BANNIÈRE PLEINE LARGEUR */}
        <div className="full-width-banner">
          <div className="banner-overlay"></div>
          <h2 className="banner-text">
            ATHIES BATIMENT, UN SAVOIR FAIRE LOCAL À LAON DANS L'AISNE
          </h2>
        </div>

        {/* SECTION 4 — NOS CERTIFICATIONS */}
        <div className="certifications-section">
          <h2 className="section-title">NOS CERTIFICATIONS</h2>
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
            <button className="btn-secondary">EN SAVOIR PLUS</button>
          </div>
        </div>

        {/* SECTION CTA — UN PROJET EN TÊTE */}
        <section className="services-cta-section">
          <h2 className="services-cta-title">Un projet en tête ?</h2>
          <p className="services-cta-description">
            Contactez-nous pour obtenir un devis gratuit et personnalisé pour vos travaux.
          </p>
          <div className="services-cta-buttons">
            <a href="tel:0646168723" className="btn-primary-large">
              Appeler maintenant
            </a>
            <a href="#contact" className="btn-secondary-large">
              Demander un devis
            </a>
          </div>
        </section>

        {/* SECTION 5 — CONTACTEZ-NOUS */}
        
      </div>
    </div>
  );
}