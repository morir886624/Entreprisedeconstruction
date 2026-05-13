import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@context/ThemeContext'
import { Header, Footer, MobileNav } from '@components/layout'
import { Home, Contact } from '@pages'
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <MobileNav />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
