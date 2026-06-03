// Pré-rendu HTML statique par route pour SEO.
// Lancé après `vite build` — duplique dist/index.html en dist/<route>/index.html
// avec title, meta, OG, canonical et JSON-LD spécifiques. Googlebot indexe le HTML
// servi directement, sans avoir besoin d'exécuter le React.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const SITE = 'https://btp.morir.fr'

const SERVICES = [
  { id: 'maconnerie', nom: 'Maçonnerie générale', desc: 'Gros œuvre, fondations, murs porteurs à Strasbourg et en Alsace.' },
  { id: 'ravalement', nom: 'Ravalement de façades', desc: 'Rénovation et embellissement de façades à Strasbourg.' },
  { id: 'isolation', nom: 'Isolation thermique et phonique', desc: 'Isolation par l\'intérieur ou l\'extérieur en Alsace.' },
  { id: 'bardage', nom: 'Bardage', desc: 'Habillage et protection des façades en Alsace.' },
  { id: 'terrassement', nom: 'Terrassement', desc: 'Préparation de terrains et VRD à Strasbourg.' },
  { id: 'amenagement', nom: 'Aménagements extérieurs', desc: 'Terrasses, allées et espaces extérieurs en Alsace.' },
  { id: 'peinture', nom: 'Peinture et revêtements', desc: 'Finitions intérieures et extérieures à Strasbourg.' },
  { id: 'renovation', nom: 'Rénovation complète', desc: 'Rénovation complète de bâtiments en Alsace.' },
]

const routes = [
  {
    path: '/',
    title: 'ABASSI BTP - Entreprise de BTP à Strasbourg et en Alsace',
    description: 'Entreprise de BTP spécialisée en maçonnerie, ravalement, isolation, bardage, terrassement et rénovation à Strasbourg, Illkirch et en Alsace. Devis gratuit.',
  },
  {
    path: '/contact',
    title: 'Contact & Devis gratuit - ABASSI BTP Strasbourg',
    description: 'Contactez ABASSI BTP pour un devis gratuit de vos travaux de maçonnerie, ravalement, isolation ou rénovation à Strasbourg et en Alsace.',
  },
  {
    path: '/mentions-legales',
    title: 'Mentions légales - ABASSI BTP',
    description: 'Mentions légales du site ABASSI BTP, entreprise de BTP à Illkirch-Graffenstaden.',
  },
  ...SERVICES.map(s => ({
    path: `/services/${s.id}`,
    title: `${s.nom} à Strasbourg - ABASSI BTP`,
    description: s.desc,
  })),
]

const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf8')

const escape = (str) => str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const injectMeta = (html, { title, description, path }) => {
  const url = `${SITE}${path}`
  const t = escape(title)
  const d = escape(description)

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  out = out.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
  out = out.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
  out = out.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  out = out.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
  out = out.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
  return out
}

for (const route of routes) {
  const html = injectMeta(baseHtml, route)
  const outDir = route.path === '/' ? DIST : join(DIST, route.path)
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  const outFile = join(outDir, 'index.html')
  writeFileSync(outFile, html, 'utf8')
  console.log(`✓ ${route.path} → ${outFile.replace(DIST, 'dist')}`)
}

console.log(`\n${routes.length} pages pré-rendues pour SEO.`)
