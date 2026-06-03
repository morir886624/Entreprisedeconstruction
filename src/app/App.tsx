import { useEffect, useState } from 'react'
import { ThemeProvider } from '@context/ThemeContext'
import { Header, Footer, MobileNav } from '@components/layout'
import { Home, Contact, ServiceDetail } from '@pages'
import { MentionsLegales } from '@pages/MentionsLegales'
import { SERVICES } from '@constants'
import '../App.css'

type Page = 'home' | 'contact' | 'service' | 'mentions'

const parsePathname = (pathname: string): { page: Page; serviceId: string | null } => {
  const clean = pathname.replace(/\/+$/, '') || '/'
  if (clean === '/' || clean === '') return { page: 'home', serviceId: null }
  if (clean === '/contact') return { page: 'contact', serviceId: null }
  if (clean === '/mentions-legales') return { page: 'mentions', serviceId: null }
  const m = clean.match(/^\/services\/([a-z0-9-]+)$/i)
  if (m) {
    const id = m[1]
    if (SERVICES.find(s => s.id === id)) return { page: 'service', serviceId: id }
  }
  return { page: 'home', serviceId: null }
}

const pageToPath = (page: Page, serviceId: string | null): string => {
  switch (page) {
    case 'contact': return '/contact'
    case 'mentions': return '/mentions-legales'
    case 'service': return serviceId ? `/services/${serviceId}` : '/'
    default: return '/'
  }
}

export default function App() {
  const initial = typeof window !== 'undefined' ? parsePathname(window.location.pathname) : { page: 'home' as Page, serviceId: null }
  const [currentPage, setCurrentPage] = useState<Page>(initial.page)
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initial.serviceId)

  const navigate = (page: Page, serviceId: string | null = null) => {
    setCurrentPage(page)
    setSelectedServiceId(serviceId)
    const path = pageToPath(page, serviceId)
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      try {
        window.history.pushState({ page, serviceId }, '', path)
      } catch {
        // Sandbox iframes peuvent bloquer pushState — ignore silencieusement
      }
    }
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onPop = () => {
      const { page, serviceId } = parsePathname(window.location.pathname)
      setCurrentPage(page)
      setSelectedServiceId(serviceId)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navPage = currentPage === 'contact' ? 'contact' : currentPage === 'mentions' ? 'mentions' : 'home'
  const setNavPage = (page: 'home' | 'contact' | 'mentions') => navigate(page)

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header currentPage={navPage} setCurrentPage={setNavPage} />

        <main className="app-main">
          {currentPage === 'home' && (
            <Home
              onNavigateToContact={() => navigate('contact')}
              onNavigateToService={(id) => navigate('service', id)}
            />
          )}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'mentions' && <MentionsLegales />}
          {currentPage === 'service' && selectedServiceId && (
            <ServiceDetail
              serviceId={selectedServiceId}
              onNavigateBack={() => navigate('home')}
              onNavigateToContact={() => navigate('contact')}
            />
          )}
        </main>

        <Footer currentPage={navPage} setCurrentPage={setNavPage} />
        <MobileNav currentPage={navPage} setCurrentPage={setNavPage} />
      </div>
    </ThemeProvider>
  )
}
