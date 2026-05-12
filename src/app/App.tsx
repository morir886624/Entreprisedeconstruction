import { useState, useEffect } from 'react';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="app-main">
        {currentPage === 'home' && <Home />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {/* Mobile Navigation Bar - Fixed at bottom */}
      <MobileNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}