
Crée un système de validation complet pour le formulaire de contact
de mon site entreprise de construction.

---

## 📋 CHAMPS DU FORMULAIRE :

| Champ            | Type       | Obligatoire | Validation                              |
|------------------|------------|-------------|------------------------------------------|
| Nom complet      | text       | ✅ OUI      | Min 2 chars, lettres/espaces uniquement  |
| Email            | email      | ✅ OUI      | Format email valide (regex)              |
| Téléphone        | tel        | ❌ NON      | Format FR si renseigné (06/07/01...)     |
| Type de projet   | select     | ✅ OUI      | Valeur différente de "" (placeholder)    |
| Description      | textarea   | ✅ OUI      | Min 20 caractères                        |

Options du select :
  - "" → "Sélectionnez un service" (placeholder désactivé)
  - "maconnerie"   → "Maçonnerie générale"
  - "ravalement"   → "Ravalement de façades"
  - "isolation"    → "Isolation"
  - "bardage"      → "Bardage"
  - "terrassement" → "Terrassement"
  - "amenagements" → "Aménagements extérieurs"
  - "peinture"     → "Peinture & Revêtements"
  - "renovation"   → "Rénovation"
  - "autre"        → "Autre"

---

## 🛡️ SÉCURITÉ ANTI-F12 — RÈGLE CRITIQUE :

### ❌ Problème à éviter :
Ne JAMAIS utiliser uniquement l'attribut HTML `disabled` pour bloquer le bouton.
Quelqu'un peut ouvrir F12 → supprimer l'attribut → cliquer → envoyer un form vide.

### ✅ Solution en 3 couches :

### COUCHE 1 — Validation dans le handler (incontournable) :
- La fonction handleSubmit() doit TOUJOURS re-valider tous les champs
  indépendamment de l'état du bouton
- Si la validation échoue → stopper l'envoi immédiatement
- L'attribut `disabled` est juste visuel, la vraie protection est ici

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // Re-valider TOUS les champs même si le bouton semble disabled
  const erreurs = validerFormulaire(formData)
  if (Object.keys(erreurs).length > 0) {
    setErreurs(erreurs)
    return // 🛑 Arrêt complet — jamais d'envoi
  }

  // Envoi uniquement si vraiment valide
  await envoyerFormulaire(formData)
}
```

### COUCHE 2 — État React non manipulable :
- Le booléen `formulaireValide` vient du state React, pas du DOM
- Même si on retire `disabled` du DOM via F12,
  React re-render sur chaque frappe → re-applique l'état réel
- Utiliser `aria-disabled` en plus de `disabled` pour cohérence accessibilité

```tsx
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
>
  Envoyer ma demande
</button>
```

### COUCHE 3 — Validation côté serveur (ultime rempart) :
- Même si les 2 premières couches sont contournées,
  le serveur/API re-valide tous les champs avant tout traitement
- Ne jamais faire confiance aux données reçues côté client

---

## 🔍 RÈGLES DE VALIDATION PAR CHAMP :

```ts
// Nom complet
const validerNom = (valeur: string): string | null => {
  if (!valeur.trim()) return "Le nom complet est obligatoire"
  if (valeur.trim().length < 2) return "Le nom doit contenir au moins 2 caractères"
  if (!/^[a-zA-ZÀ-ÿ\s\-']+$/.test(valeur)) return "Le nom ne doit contenir que des lettres"
  return null
}

// Email
const validerEmail = (valeur: string): string | null => {
  if (!valeur.trim()) return "L'adresse email est obligatoire"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valeur)) return "Format d'email invalide"
  return null
}

// Téléphone (optionnel)
const validerTelephone = (valeur: string): string | null => {
  if (!valeur.trim()) return null // ✅ Optionnel → pas d'erreur si vide
  if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(valeur))
    return "Format invalide (ex: 06 12 34 56 78)"
  return null
}

// Type de projet
const validerTypeProjet = (valeur: string): string | null => {
  if (!valeur || valeur === "") return "Veuillez sélectionner un type de projet"
  return null
}

// Description
const validerDescription = (valeur: string): string | null => {
  if (!valeur.trim()) return "La description du projet est obligatoire"
  if (valeur.trim().length < 20) return `Minimum 20 caractères (${valeur.trim().length}/20)`
  return null
}
```

---

## 🎯 COMPORTEMENT UX ATTENDU :

### Validation en temps réel :
- Les erreurs n'apparaissent PAS au chargement (pas de rouge dès le début)
- L'erreur apparaît quand l'utilisateur quitte un champ (onBlur)
- L'erreur disparaît dès que l'utilisateur corrige (onChange)
- Le bouton se débloque automatiquement quand TOUS les champs valides

### États du bouton :

| Situation                    | Apparence bouton         |
|------------------------------|---------------------------|
| Formulaire incomplet         | Grisé + curseur interdit  |
| Formulaire valide            | Couleur normale + actif   |
| Envoi en cours               | Spinner + texte "Envoi…"  |
| Envoi réussi                 | Vert + "Demande envoyée ✓"|
| Erreur d'envoi               | Rouge + message d'erreur  |

### Messages d'erreur :
- Affichés sous chaque champ en rouge
- Avec une icône ⚠️ pour l'accessibilité
- Associés au champ via aria-describedby pour les lecteurs d'écran

---

## 📁 FICHIERS À CRÉER :

### 1. `src/utils/validateContact.ts`
Toutes les fonctions de validation exportées séparément + fonction globale

### 2. `src/hooks/useContactForm.ts`
Hook custom qui gère :
- formData (état des valeurs)
- erreurs (état des messages d'erreur)
- touched (quels champs ont été touchés)
- formulaireValide (booléen calculé)
- envoi (loading / succes / erreur)
- handleChange / handleBlur / handleSubmit

### 3. `src/services/contactService.ts`
Fonction async d'envoi du formulaire (fetch API / EmailJS / autre)
avec gestion des erreurs réseau

### 4. `src/sections/contact/FormulaireSection.tsx`
Composant formulaire complet qui utilise useContactForm()
Tailwind CSS + mode dark/light + responsive

### 5. `src/types/contact.types.ts`
Interfaces TypeScript :
- FormulaireContact (valeurs)
- FormulaireErreurs (messages)
- FormulaireEtat (loading/succes/erreur)

---

## ✅ CHECKLIST FINALE :

- [ ] Validation dans handleSubmit() en premier (protection principale)
- [ ] Attribut disabled + aria-disabled + onClick guard sur le bouton
- [ ] Téléphone : aucune erreur si le champ est vide
- [ ] Erreurs affichées seulement après onBlur (pas au chargement)
- [ ] Compteur de caractères visible sur la description
- [ ] Spinner pendant l'envoi + bouton re-disabled
- [ ] Message de succès clair après envoi
- [ ] Reset du formulaire après envoi réussi
- [ ] Tous les champs avec aria-required, aria-invalid, aria-describedby