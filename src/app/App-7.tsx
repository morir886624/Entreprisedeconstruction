import { useState } from 'react'
import { ThemeProvider } from '@context/ThemeContext'
import { Header, Footer, MobileNav } from '@components/layout'
import { Home, Contact, ServiceDetail } from '@pages'
import '../App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'service'>('home')
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

  const navigateToContact = () => {
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToService = (serviceId: string) => {
    setCurrentPage('service')
    setSelectedServiceId(serviceId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSetPage = (page: 'home' | 'contact') => {
    setCurrentPage(page)
    setSelectedServiceId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const headerPage = currentPage === 'contact' ? 'contact' : 'home'

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header currentPage={headerPage} setCurrentPage={handleSetPage} />

        <main className="app-main">
          {currentPage === 'home' && (
            <Home
              onNavigateToContact={navigateToContact}
              onNavigateToService={navigateToService}
            />
          )}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'service' && selectedServiceId && (
            <ServiceDetail
              serviceId={selectedServiceId}
              onNavigateBack={() => handleSetPage('home')}
              onNavigateToContact={navigateToContact}
            />
          )}
        </main>

        <Footer currentPage={headerPage} setCurrentPage={handleSetPage} />
        <MobileNav currentPage={headerPage} setCurrentPage={handleSetPage} />
      </div>
    </ThemeProvider>
  )
}
