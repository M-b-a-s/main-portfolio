import { useRef } from 'react'
import { Footer } from './components/sections/Footer'
import { Header } from './components/sections/Header'
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

function App() {
  const root = useRef<HTMLDivElement>(null)
  usePortfolioAnimations(root)
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about'

  return <div ref={root}>
    <a className="fixed -top-16 left-5 z-[999] bg-ink px-5 py-3 text-white transition-[top] focus:top-3" href="#main">Skip to content</a>
    <Header />
    <main id="main">{isAboutPage ? <AboutPage /> : <HomePage />}</main>
    <Footer />
  </div>
}

export default App
