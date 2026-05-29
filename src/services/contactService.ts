import { FormulaireContact } from '@types/contact.types'

export interface EnvoiReponse {
  success: boolean
  message?: string
}

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export const envoyerFormulaire = async (formData: FormulaireContact): Promise<EnvoiReponse> => {
  if (!WEB3FORMS_KEY) {
    throw new Error(
      'VITE_WEB3FORMS_KEY est manquante. Définis-la dans .env.local (dev) ou .env.production (prod) et redémarre le serveur Vite.'
    )
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Nouveau devis - ${formData.projectType}`,
        from_name: 'ABASSI BTP - Formulaire de contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
      }),
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return {
        success: true,
        message: 'Demande envoyée avec succès ! Nous vous recontacterons rapidement.',
      }
    }

    return {
      success: false,
      message:
        data?.message ??
        "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.",
    }
  } catch (error) {
    console.error("Erreur d'envoi du formulaire:", error)
    return {
      success: false,
      message: 'Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.',
    }
  }
}
