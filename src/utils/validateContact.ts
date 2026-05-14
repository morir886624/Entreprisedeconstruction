import { FormulaireContact, FormulaireErreurs } from '@types/contact.types'

export const validerNom = (valeur: string): string | null => {
  if (!valeur.trim()) return "Le nom complet est obligatoire"
  if (valeur.trim().length < 2) return "Le nom doit contenir au moins 2 caractères"
  if (!/^[a-zA-ZÀ-ÿ\s\-']+$/.test(valeur)) return "Le nom ne doit contenir que des lettres"
  return null
}

export const validerEmail = (valeur: string): string | null => {
  if (!valeur.trim()) return "L'adresse email est obligatoire"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeur)) return "Format d'email invalide"
  return null
}

export const validerTelephone = (valeur: string): string | null => {
  if (!valeur.trim()) return null // ✅ Optionnel → pas d'erreur si vide
  if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(valeur))
    return "Format invalide (ex: 06 12 34 56 78)"
  return null
}

export const validerTypeProjet = (valeur: string): string | null => {
  if (!valeur || valeur === "") return "Veuillez sélectionner un type de projet"
  return null
}

export const validerDescription = (valeur: string): string | null => {
  if (!valeur.trim()) return "La description du projet est obligatoire"
  if (valeur.trim().length < 20) return `Minimum 20 caractères (${valeur.trim().length}/20)`
  return null
}

export const validerFormulaire = (formData: FormulaireContact): FormulaireErreurs => {
  const erreurs: FormulaireErreurs = {}

  const erreurNom = validerNom(formData.name)
  if (erreurNom) erreurs.name = erreurNom

  const erreurEmail = validerEmail(formData.email)
  if (erreurEmail) erreurs.email = erreurEmail

  const erreurTelephone = validerTelephone(formData.phone)
  if (erreurTelephone) erreurs.phone = erreurTelephone

  const erreurTypeProjet = validerTypeProjet(formData.projectType)
  if (erreurTypeProjet) erreurs.projectType = erreurTypeProjet

  const erreurDescription = validerDescription(formData.message)
  if (erreurDescription) erreurs.message = erreurDescription

  return erreurs
}

export const formulaireEstValide = (erreurs: FormulaireErreurs): boolean => {
  return Object.keys(erreurs).length === 0
}
