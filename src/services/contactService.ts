import { FormulaireContact } from '@types/contact.types'

export interface EnvoiReponse {
  success: boolean
  message?: string
}

export const envoyerFormulaire = async (formData: FormulaireContact): Promise<EnvoiReponse> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        _subject: `Nouveau devis - ${formData.projectType}`,
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: 'Demande envoyée avec succès ! Nous vous recontacterons rapidement.',
      }
    } else {
      return {
        success: false,
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter par téléphone.',
      }
    }
  } catch (error) {
    console.error('Erreur d\'envoi du formulaire:', error)
    return {
      success: false,
      message: 'Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.',
    }
  }
}
