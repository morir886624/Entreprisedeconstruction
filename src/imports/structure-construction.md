# 🏗️ Structure — Entreprise de Construction
> React 18 · Vite 6 · TypeScript · Tailwind CSS 4

---

## 📁 Arborescence complète

```
construction-site/
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg                        # Logo entreprise (SVG pour qualité)
│   └── og-image.jpg                    # Image Open Graph (partage réseaux)
│
├── src/
│   │
│   ├── assets/                         # Fichiers statiques importés dans le code
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   │   ├── chantier-hero.webp  # Image principale page Accueil
│   │   │   │   └── chantier-hero-mobile.webp
│   │   │   ├── projets/
│   │   │   │   ├── projet-01.webp      # Photos de réalisations
│   │   │   │   ├── projet-02.webp
│   │   │   │   └── projet-03.webp
│   │   │   └── equipe/
│   │   │       └── equipe-photo.webp
│   │   ├── icons/
│   │   │   ├── logo.svg
│   │   │   ├── icon-construction.svg
│   │   │   ├── icon-renovation.svg
│   │   │   └── icon-expertise.svg
│   │   └── fonts/                      # Polices locales (si non Google Fonts)
│   │       └── .gitkeep
│   │
│   ├── components/                     # Composants réutilisables
│   │   │
│   │   ├── ui/                         # Briques de base de l'interface
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx          # Bouton primaire/secondaire/ghost
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx            # Carte réalisation ou service
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx           # Ex: "Terminé", "En cours"
│   │   │   │   └── index.ts
│   │   │   ├── SectionTitle/
│   │   │   │   ├── SectionTitle.tsx    # Titre + sous-titre de section
│   │   │   │   └── index.ts
│   │   │   └── Spinner/
│   │   │       ├── Spinner.tsx         # Loader pour formulaire de contact
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/                     # Structure globale de la page
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx          # Logo + nav desktop + toggle dark mode
│   │   │   │   ├── NavDesktop.tsx      # Liens navigation desktop
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx          # Infos légales + liens + copyright
│   │   │   │   └── index.ts
│   │   │   ├── BottomBar/
│   │   │   │   ├── BottomBar.tsx       # Navigation mobile en bas d'écran
│   │   │   │   ├── BottomBarItem.tsx   # Icône + label d'un item
│   │   │   │   └── index.ts
│   │   │   ├── ThemeToggle/
│   │   │   │   ├── ThemeToggle.tsx     # Bouton bascule Light / Dark
│   │   │   │   └── index.ts
│   │   │   └── PageWrapper/
│   │   │       ├── PageWrapper.tsx     # Layout commun (Header + Footer + BottomBar)
│   │   │       └── index.ts
│   │   │
│   │   └── shared/                     # Composants utilisés sur plusieurs pages
│   │       ├── ContactCTA/
│   │       │   ├── ContactCTA.tsx      # Bandeau "Contactez-nous" réutilisable
│   │       │   └── index.ts
│   │       └── Map/
│   │           ├── Map.tsx             # Carte localisation entreprise
│   │           └── index.ts
│   │
│   ├── pages/                          # Une page = un dossier
│   │   ├── Home/
│   │   │   ├── Home.tsx                # Page Accueil (assemble les sections)
│   │   │   └── index.ts
│   │   └── Contact/
│   │       ├── Contact.tsx             # Page Contact (assemble les sections)
│   │       └── index.ts
│   │
│   ├── sections/                       # Grandes sections visuelles par page
│   │   ├── home/
│   │   │   ├── HeroSection.tsx         # Grande bannière d'introduction
│   │   │   ├── ServicesSection.tsx     # Présentation des services
│   │   │   ├── RealisationsSection.tsx # Galerie de projets réalisés
│   │   │   ├── AProposSection.tsx      # Présentation de l'entreprise
│   │   │   └── ChiffresSection.tsx     # Stats: années d'expérience, projets...
│   │   └── contact/
│   │       ├── FormulaireSection.tsx   # Formulaire de contact complet
│   │       └── InfosContactSection.tsx # Adresse, téléphone, email, horaires
│   │
│   ├── hooks/                          # Logique React réutilisable
│   │   ├── useTheme.ts                 # Gestion light/dark mode
│   │   ├── useContactForm.ts           # Logique + validation formulaire contact
│   │   ├── useScrollPosition.ts        # Détecter scroll (header sticky)
│   │   └── useMediaQuery.ts            # Détecter mobile/tablet/desktop
│   │
│   ├── context/                        # État global partagé
│   │   └── ThemeContext.tsx            # Provider du thème light/dark
│   │
│   ├── services/                       # Appels API et logique externe
│   │   └── contactService.ts           # Envoi du formulaire de contact (fetch/email)
│   │
│   ├── utils/                          # Fonctions pures utilitaires
│   │   ├── formatPhone.ts              # Formater numéro de téléphone
│   │   ├── validateEmail.ts            # Valider format email
│   │   └── cn.ts                       # Utilitaire classnames + Tailwind merge
│   │
│   ├── constants/                      # Valeurs fixes du projet
│   │   ├── NAV_LINKS.ts                # Liens de navigation (label + href)
│   │   ├── SERVICES.ts                 # Liste des services proposés
│   │   ├── REALISATIONS.ts             # Données des projets réalisés
│   │   ├── CONTACT_INFO.ts             # Adresse, tel, email, horaires
│   │   └── SEO.ts                      # Titres et descriptions SEO par page
│   │
│   ├── types/                          # Types TypeScript globaux
│   │   ├── index.ts                    # Export centralisé des types
│   │   ├── realisation.types.ts        # Type Realisation { titre, img, ... }
│   │   ├── service.types.ts            # Type Service { nom, description, icon }
│   │   └── contact.types.ts            # Type FormulaireContact { nom, email, message }
│   │
│   ├── styles/                         # CSS global (Tailwind + custom)
│   │   ├── global.css                  # @tailwind directives + reset custom
│   │   └── variables.css               # Variables CSS custom (couleurs marque)
│   │
│   ├── App.tsx                         # Composant racine + React Router
│   └── main.tsx                        # Point d'entrée Vite
│
├── .env                                # Variables sensibles (jamais commit)
├── .env.example                        # Modèle sans valeurs (commité)
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── tailwind.config.ts                  # Config Tailwind + couleurs marque
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts                      # Alias de chemins configurés
└── README.md
```

---

## ⚙️ vite.config.ts — Alias configurés

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@'           : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@pages'      : path.resolve(__dirname, './src/pages'),
      '@sections'   : path.resolve(__dirname, './src/sections'),
      '@assets'     : path.resolve(__dirname, './src/assets'),
      '@hooks'      : path.resolve(__dirname, './src/hooks'),
      '@context'    : path.resolve(__dirname, './src/context'),
      '@services'   : path.resolve(__dirname, './src/services'),
      '@utils'      : path.resolve(__dirname, './src/utils'),
      '@constants'  : path.resolve(__dirname, './src/constants'),
      '@types'      : path.resolve(__dirname, './src/types'),
      '@styles'     : path.resolve(__dirname, './src/styles'),
    },
  },
})
```

---

## 📄 Exemples de fichiers clés

### `src/constants/NAV_LINKS.ts`
```ts
export const NAV_LINKS = [
  { label: 'Accueil',  href: '/'        },
  { label: 'Contact',  href: '/contact' },
] as const
```

### `src/constants/CONTACT_INFO.ts`
```ts
export const CONTACT_INFO = {
  adresse  : '12 Rue des Bâtisseurs, 75001 Paris',
  telephone: '01 23 45 67 89',
  email    : 'contact@entreprise-construction.fr',
  horaires : 'Lun–Ven : 8h–18h',
} as const
```

### `src/types/contact.types.ts`
```ts
export interface FormulaireContact {
  nom     : string
  email   : string
  telephone?: string
  message : string
}

export interface FormulaireEtat {
  loading : boolean
  succes  : boolean
  erreur  : string | null
}
```

### `src/hooks/useTheme.ts`
```ts
import { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme doit être dans ThemeProvider')
  return context
}
```

---

## 🔀 Import propre — Avant / Après alias

```ts
// ❌ Avant (imports relatifs illisibles)
import Button from '../../../components/ui/Button/Button'
import { CONTACT_INFO } from '../../../../constants/CONTACT_INFO'
import { useTheme } from '../../hooks/useTheme'

// ✅ Après (avec alias, lisible partout)
import Button from '@components/ui/Button'
import { CONTACT_INFO } from '@constants/CONTACT_INFO'
import { useTheme } from '@hooks/useTheme'
```

---

## 🌗 `.env.example`

```env
# Formulaire de contact
VITE_CONTACT_API_URL=https://api.exemple.fr/contact
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## 📋 Règles d'or du projet

| Règle | Détail |
|---|---|
| **1 composant = 1 rôle** | Button n'a pas de logique métier |
| **Données dans constants/** | Jamais de texte en dur dans les composants |
| **Types dans types/** | Tout objet a son interface TypeScript |
| **Max 200 lignes/fichier** | Sinon → découper en sous-composants |
| **Jamais de style inline** | Tailwind classes ou variables CSS uniquement |
| **Jamais de .env commit** | Utiliser .env.example comme modèle |
