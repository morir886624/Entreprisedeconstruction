import { useState, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Phone, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../../data';
import './Contact.css';

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Formspree endpoint - remplacer YOUR_FORMSPREE_ID par votre vrai ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          {/* Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User className="w-4 h-4" />
                  <span>Nom complet</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <Phone className="w-4 h-4" />
                  <span>Téléphone</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">
                  <MessageSquare className="w-4 h-4" />
                  <span>Type de projet</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="couverture">Couverture</option>
                  <option value="maconnerie">Maçonnerie</option>
                  <option value="menuiserie">Menuiserie</option>
                  <option value="renovation">Rénovation</option>
                  <option value="isolation">Isolation</option>
                  <option value="peinture">Peinture - Plâtrerie</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare className="w-4 h-4" />
                  <span>Décrivez votre projet</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Décrivez-nous votre projet en détail..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="form-submit-btn"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="spinner" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="form-status form-status-success">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Demande envoyée avec succès ! Nous vous recontacterons rapidement.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-status form-status-error">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Nos coordonnées</h3>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <Phone className="contact-info-icon" />
                  <div>
                    <div className="contact-info-label">Téléphone</div>
                    <a href={`tel:${personalInfo.phone.replace(/\./g, '')}`} className="contact-info-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail className="contact-info-icon" />
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="contact-info-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MapPin className="contact-info-icon" />
                  <div>
                    <div className="contact-info-label">Adresse</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Zone+industrielle+les+Minimes+47+Rue+Georges+Brassens+02840+Athies-sous-Laon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-value"
                    >
                      Zone industrielle les Minimes,<br />
                      47 Rue Georges Brassens,<br />
                      02840 Athies-sous-Laon
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Clock className="contact-info-icon" />
                  <div>
                    <div className="contact-info-label">Horaires</div>
                    <div className="contact-info-value">
                      Du lundi au vendredi<br />
                      De 9h00 à 18h00
                    </div>
                  </div>
                </div>
              </div>

              

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}