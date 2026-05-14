import { useState, useEffect } from 'react'
import { FormulaireContact, FormulaireErreurs, FormulaireTouched } from '@types/contact.types'
import { validerFormulaire, validerNom, validerEmail, validerTelephone, validerTypeProjet, validerDescription, formulaireEstValide } from '@utils/validateContact'
import { envoyerFormulaire } from '@services/contactService'

const initialFormData: FormulaireContact = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

const initialTouched: FormulaireTouched = {
  name: false,
  email: false,
  phone: false,
  projectType: false,
  message: false,
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormulaireContact>(initialFormData)
  const [erreurs, setErreurs] = useState<FormulaireErreurs>({})
  const [touched, setTouched] = useState<FormulaireTouched>(initialTouched)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [formulaireValide, setFormulaireValide] = useState(false)
  const [envoi, setEnvoi] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  // Validation en temps réel
  useEffect(() => {
    const erreursActuelles = validerFormulaire(formData)
    setErreurs(erreursActuelles)
    setFormulaireValide(formulaireEstValide(erreursActuelles) && acceptTerms)
  }, [formData, acceptTerms])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Valider le champ en temps réel si déjà touché
    if (touched[name as keyof FormulaireTouched]) {
      let erreur: string | null = null
      switch (name) {
        case 'name':
          erreur = validerNom(value)
          break
        case 'email':
          erreur = validerEmail(value)
          break
        case 'phone':
          erreur = validerTelephone(value)
          break
        case 'projectType':
          erreur = validerTypeProjet(value)
          break
        case 'message':
          erreur = validerDescription(value)
          break
      }

      setErreurs(prev => {
        const newErreurs = { ...prev }
        if (erreur) {
          newErreurs[name as keyof FormulaireErreurs] = erreur
        } else {
          delete newErreurs[name as keyof FormulaireErreurs]
        }
        return newErreurs
      })
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🛡️ COUCHE 1 — Validation dans le handler (incontournable)
    const erreursValidation = validerFormulaire(formData)
    if (!formulaireEstValide(erreursValidation)) {
      setErreurs(erreursValidation)
      setTouched({
        name: true,
        email: true,
        phone: true,
        projectType: true,
        message: true,
      })
      return // 🛑 Arrêt complet — jamais d'envoi
    }

    if (!acceptTerms) {
      return // 🛑 Checkbox non cochée
    }

    // Envoi
    setEnvoi({ loading: true, success: false, error: false, message: '' })

    try {
      const reponse = await envoyerFormulaire(formData)

      if (reponse.success) {
        setEnvoi({
          loading: false,
          success: true,
          error: false,
          message: reponse.message || 'Demande envoyée avec succès !',
        })
        // Reset du formulaire
        setFormData(initialFormData)
        setTouched(initialTouched)
        setAcceptTerms(false)
        setErreurs({})

        // Auto-clear success message after 5s
        setTimeout(() => {
          setEnvoi({ loading: false, success: false, error: false, message: '' })
        }, 5000)
      } else {
        setEnvoi({
          loading: false,
          success: false,
          error: true,
          message: reponse.message || 'Erreur lors de l\'envoi',
        })

        // Auto-clear error message after 5s
        setTimeout(() => {
          setEnvoi({ loading: false, success: false, error: false, message: '' })
        }, 5000)
      }
    } catch (error) {
      setEnvoi({
        loading: false,
        success: false,
        error: true,
        message: 'Erreur de connexion. Veuillez réessayer.',
      })

      setTimeout(() => {
        setEnvoi({ loading: false, success: false, error: false, message: '' })
      }, 5000)
    }
  }

  return {
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
  }
}
