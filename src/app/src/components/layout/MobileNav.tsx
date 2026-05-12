import { Home, MessageSquare } from 'lucide-react';
import './MobileNav.css';

interface MobileNavProps {
  currentPage: 'home' | 'contact';
  setCurrentPage: (page: 'home' | 'contact') => void;
}

export function MobileNav({ currentPage, setCurrentPage }: MobileNavProps) {
  const handleNavigation = (page: 'home' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="mobile-nav">
      <button
        onClick={() => handleNavigation('home')}
        className={`mobile-nav-button ${currentPage === 'home' ? 'active' : ''}`}
        aria-label="Accueil"
      >
        <Home className="mobile-nav-icon" />
        <span className="mobile-nav-label">Accueil</span>
      </button>

      <button
        onClick={() => handleNavigation('contact')}
        className={`mobile-nav-button ${currentPage === 'contact' ? 'active' : ''}`}
        aria-label="Contact"
      >
        <MessageSquare className="mobile-nav-icon" />
        <span className="mobile-nav-label">Contact</span>
      </button>
    </nav>
  );
}
