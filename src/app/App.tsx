import { useState } from 'react'
import { ThemeProvider } from '@context/ThemeContext'
import { Header, Footer, MobileNav } from '@components/layout'
import { Home, Contact, ServiceDetail } from '@pages'
import '../App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'service'>('home')
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header
          currentPage={currentPage === 'contact' ? 'contact' : 'home'}
          setCurrentPage={(page) => {
            setCurrentPage(page)
            setSelectedServiceId(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />

        <main className="app-main">
          {currentPage === 'home' && (
            <Home
              onNavigateToContact={() => {
                setCurrentPage('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              onNavigateToService={(serviceId) => {
                setCurrentPage('service')
                setSelectedServiceId(serviceId)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          )}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'service' && selectedServiceId && (
            <ServiceDetail
              serviceId={selectedServiceId}
              onNavigateBack={() => {
                setCurrentPage('home')
                setSelectedServiceId(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              onNavigateToContact={() => {
                setCurrentPage('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          )}
        </main>

        <Footer
          currentPage={currentPage === 'contact' ? 'contact' : 'home'}
          setCurrentPage={(page) => {
            setCurrentPage(page)
            setSelectedServiceId(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
        <MobileNav
          currentPage={currentPage === 'contact' ? 'contact' : 'home'}
          setCurrentPage={(page) => {
            setCurrentPage(page)
            setSelectedServiceId(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      </div>
    </ThemeProvider>
  )
}
