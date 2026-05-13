import { useState } from 'react'
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react'
import { FormulaireContact, FormulaireEtat } from '@types'

export function FormulaireSection() {
  const [formStatus, setFormStatus] = useState<FormulaireEtat['status']>('idle')
  const [formData, setFormData] = useState<FormulaireContact>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
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
  )
}
