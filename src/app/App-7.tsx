import { useState } from 'react'
import { ThemeProvider } from '@context/ThemeContext'
import { Header, Footer, MobileNav } from '@components/layout'
import { Home, Contact } from '@pages'
import '../App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home')

  const navigateToContact = () => {
    setCurrentPage('contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="app-main">
          {currentPage === 'home' && <Home onNavigateToContact={navigateToContact} />}
          {currentPage === 'contact' && <Contact />}
        </main>

        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  )
}
