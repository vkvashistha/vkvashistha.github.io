import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'
import { usePageTracking } from './hooks/usePageTracking'

// Pages
import HomePage from './pages/HomePage'
import CaseStudyEdtech from './pages/CaseStudyEdtech'
import CaseStudyEcommerce from './pages/CaseStudyEcommerce'
import CaseStudyAgentic from './pages/CaseStudyAgentic'
import CaseStudyGetactyv from './pages/CaseStudyGetactyv'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function PageTracking() {
  usePageTracking()
  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Preloader />}
      <ScrollToTop />
      <PageTracking />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/edtech-ai" element={<CaseStudyEdtech />} />
          <Route path="/case-study/ecommerce-mobile" element={<CaseStudyEcommerce />} />
          <Route path="/case-study/agentic-ai" element={<CaseStudyAgentic />} />
          <Route path="/case-study/getactyv" element={<CaseStudyGetactyv />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
