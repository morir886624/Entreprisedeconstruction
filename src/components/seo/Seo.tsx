import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
}

const SITE_URL = 'https://btp.morir.fr'
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({ title, description, path = '/', image = DEFAULT_IMAGE }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setLink('canonical', url)

    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'ABASSI BTP')
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'fr_FR')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image)
  }, [title, description, path, image])

  return null
}
