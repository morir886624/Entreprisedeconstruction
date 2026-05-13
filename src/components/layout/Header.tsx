import { Moon, Sun } from 'lucide-react'
import { NAV_LINKS } from '@constants'
import { useTheme } from '@hooks/useTheme'
import './Header.css'

interface HeaderProps {
  currentPage: 'home' | 'contact'
  setCurrentPage: (page: 'home' | 'contact') => void
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  const handleNavigation = (page: 'home' | 'contact') => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-section" onClick={() => handleNavigation('home')}>
            <div className="header-logo">
              <img src="/logo.png" alt="Athies Batiment Logo" className="header-logo-image" />
            </div>
          </div>

          <nav className="header-nav">
            <button
              onClick={() => handleNavigation('home')}
              className={`nav-button ${currentPage === 'home' ? 'active' : 'inactive'}`}
            >
              Accueil
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`nav-button ${currentPage === 'contact' ? 'active' : 'inactive'}`}
            >
              Contact
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
