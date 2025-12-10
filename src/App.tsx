import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Counter from './components/Counter'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Preloader />}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

