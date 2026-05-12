# Images Folder

Ce dossier contient toutes les images du site CV.

## Structure

- `profile.png` - Photo de profil (déjà ajoutée)
- `logos.ts` - Configuration des logos (temporaire avec placeholders)

## Comment ajouter vos logos

### 1. Préparez vos logos

Vous aurez besoin de deux fichiers de logo :
- **Logo Dark** : Logo optimisé pour le mode sombre (fond sombre)
- **Logo Light** : Logo optimisé pour le mode clair (fond clair)

Formats recommandés :
- PNG avec fond transparent
- Dimensions suggérées : 120x40px ou proportions similaires
- Poids : moins de 50KB par logo

### 2. Ajoutez les fichiers dans Figma Make

Importez vos deux logos dans Figma Make. Vous obtiendrez des URLs du type :
```
figma:asset/HASH_DU_LOGO_DARK.png
figma:asset/HASH_DU_LOGO_LIGHT.png
```

### 3. Mettez à jour le fichier de données

Ouvrez `/src/data/personal.ts` et remplacez les URLs temporaires :

```typescript
export const personalInfo: PersonalInfo = {
  // ... autres champs ...
  logoDark: "figma:asset/VOTRE_HASH_DARK.png",
  logoLight: "figma:asset/VOTRE_HASH_LIGHT.png",
  // ... autres champs ...
};
```

### 4. Le changement de logo se fera automatiquement

Le système est déjà configuré pour changer automatiquement de logo selon le thème actif :
- Mode clair → affiche `logoLight`
- Mode sombre → affiche `logoDark`

## Notes

- Les placeholders actuels sont des images temporaires qui montrent "AM DARK" et "AM LIGHT"
- Une fois vos vrais logos ajoutés, l'effet de changement de thème sera immédiat
- La photo de profil est déjà configurée et affichée sur la page d'accueil
