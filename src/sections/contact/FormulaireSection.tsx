import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react'
import { useContactForm } from '@hooks/useContactForm'

export function FormulaireSection() {
  const {
    formData,
    erreurs,
    touched,
    acceptTerms,
    setAcceptTerms,
    formulaireValide,
    envoi,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm()

  return (
    <div className="contact-form-section">
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Nom complet */}
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
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={touched.name && !!erreurs.name}
            aria-describedby={touched.name && erreurs.name ? "name-error" : undefined}
            className={`form-input ${touched.name && erreurs.name ? 'form-input-error' : ''}`}
            placeholder="Votre nom"
          />
          {touched.name && erreurs.name && (
            <div id="name-error" className="form-error" role="alert">
              <AlertCircle className="w-4 h-4" />
              <span>{erreurs.name}</span>
            </div>
          )}
        </div>

        {/* Email */}
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
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={touched.email && !!erreurs.email}
            aria-describedby={touched.email && erreurs.email ? "email-error" : undefined}
            className={`form-input ${touched.email && erreurs.email ? 'form-input-error' : ''}`}
            placeholder="votre.email@exemple.com"
          />
          {touched.email && erreurs.email && (
            <div id="email-error" className="form-error" role="alert">
              <AlertCircle className="w-4 h-4" />
              <span>{erreurs.email}</span>
            </div>
          )}
        </div>

        {/* Téléphone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            <Phone className="w-4 h-4" />
            <span>Téléphone (optionnel)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="false"
            aria-invalid={touched.phone && !!erreurs.phone}
            aria-describedby={touched.phone && erreurs.phone ? "phone-error" : undefined}
            className={`form-input ${touched.phone && erreurs.phone ? 'form-input-error' : ''}`}
            placeholder="06 XX XX XX XX"
          />
          {touched.phone && erreurs.phone && (
            <div id="phone-error" className="form-error" role="alert">
              <AlertCircle className="w-4 h-4" />
              <span>{erreurs.phone}</span>
            </div>
          )}
        </div>

        {/* Type de projet */}
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
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={touched.projectType && !!erreurs.projectType}
            aria-describedby={touched.projectType && erreurs.projectType ? "projectType-error" : undefined}
            className={`form-input ${touched.projectType && erreurs.projectType ? 'form-input-error' : ''}`}
          >
            <option value="">Sélectionnez un service</option>
            <option value="maconnerie">Maçonnerie générale</option>
            <option value="ravalement">Ravalement de façades</option>
            <option value="isolation">Isolation</option>
            <option value="bardage">Bardage</option>
            <option value="terrassement">Terrassement</option>
            <option value="amenagement">Aménagements extérieurs</option>
            <option value="peinture">Peinture & Revêtements</option>
            <option value="renovation">Rénovation</option>
            <option value="autre">Autre</option>
          </select>
          {touched.projectType && erreurs.projectType && (
            <div id="projectType-error" className="form-error" role="alert">
              <AlertCircle className="w-4 h-4" />
              <span>{erreurs.projectType}</span>
            </div>
          )}
        </div>

        {/* Description */}
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
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={touched.message && !!erreurs.message}
            aria-describedby={touched.message && erreurs.message ? "message-error" : undefined}
            rows={6}
            className={`form-textarea ${touched.message && erreurs.message ? 'form-input-error' : ''}`}
            placeholder="Décrivez-nous votre projet en détail..."
          />
          <div className="form-char-counter">
            {formData.message.trim().length}/20 caractères minimum
          </div>
          {touched.message && erreurs.message && (
            <div id="message-error" className="form-error" role="alert">
              <AlertCircle className="w-4 h-4" />
              <span>{erreurs.message}</span>
            </div>
          )}
        </div>

        {/* Checkbox */}
        <div className="form-checkbox-group">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            required
            aria-required="true"
            className="form-checkbox"
          />
          <label htmlFor="acceptTerms" className="form-checkbox-label">
            J'accepte que mes données soient utilisées pour me recontacter concernant ma demande de devis
          </label>
        </div>

        {/* 🛡️ COUCHE 2 — Protection multi-couches du bouton */}
        <button
          type="submit"
          disabled={!formulaireValide || envoi.loading}
          aria-disabled={!formulaireValide || envoi.loading}
          onClick={(e) => {
            // Double protection : bloquer aussi le clic direct
            if (!formulaireValide) {
              e.preventDefault()
              return
            }
          }}
          className="form-submit-btn"
        >
          {envoi.loading ? (
            <>
              <div className="spinner" />
              <span>Envoi en cours...</span>
            </>
          ) : envoi.success ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Demande envoyée ✓</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Envoyer ma demande</span>
            </>
          )}
        </button>

        {/* Messages de statut */}
        {envoi.success && (
          <div className="form-status form-status-success">
            <CheckCircle2 className="w-5 h-5" />
            <span>{envoi.message}</span>
          </div>
        )}

        {envoi.error && (
          <div className="form-status form-status-error">
            <AlertCircle className="w-5 h-5" />
            <span>{envoi.message}</span>
          </div>
        )}
      </form>
    </div>
  )
}
