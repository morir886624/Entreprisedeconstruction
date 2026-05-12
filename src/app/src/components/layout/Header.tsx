import { Moon, Sun } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  currentPage: 'home' | 'contact';
  setCurrentPage: (page: 'home' | 'contact') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Header({ currentPage, setCurrentPage, theme, toggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo - Clickable to go home */}
          <div className="header-logo-section" onClick={() => setCurrentPage('home')}>
            <div className="header-logo">
              <img src="/logo.svg" alt="Athies Batiment Logo" className="header-logo-image" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <button
              onClick={() => setCurrentPage('home')}
              className={`nav-button ${currentPage === 'home' ? 'active' : 'inactive'}`}
            >
              Accueil
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`nav-button ${currentPage === 'contact' ? 'active' : 'inactive'}`}
            >
              Contact
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}