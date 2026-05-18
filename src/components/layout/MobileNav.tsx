import { Home, MessageSquare } from 'lucide-react'
import './MobileNav.css'

interface MobileNavProps {
  currentPage: 'home' | 'contact' | 'mentions'
  setCurrentPage: (page: 'home' | 'contact' | 'mentions') => void
}

export function MobileNav({ currentPage, setCurrentPage }: MobileNavProps) {
  return (
    <nav className="mobile-nav">
      <button
        onClick={() => setCurrentPage('home')}
        className={`mobile-nav-button ${currentPage === 'home' ? 'active' : ''}`}
        aria-label="Accueil"
      >
        <Home className="mobile-nav-icon" />
        <span className="mobile-nav-label">Accueil</span>
      </button>

      <button
        onClick={() => setCurrentPage('contact')}
        className={`mobile-nav-button ${currentPage === 'contact' ? 'active' : ''}`}
        aria-label="Contact"
      >
        <MessageSquare className="mobile-nav-icon" />
        <span className="mobile-nav-label">Contact</span>
      </button>
    </nav>
  )
}
