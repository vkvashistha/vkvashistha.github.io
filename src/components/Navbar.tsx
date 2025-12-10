import { useState, useEffect } from 'react'
import { Calendar, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#about', label: 'About' },
  { href: '/#insights', label: 'Insights' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the home page and clicking an anchor link
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')
      const element = document.getElementById(targetId)
      if (element) {
        const navHeight = 80
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
    setMobileMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (location.pathname !== '/') return false
    const hash = location.hash || '#home'
    return href.includes(hash)
  }

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand-custom">
          Vivek Vashistha
        </Link>
        
        <button
          className="navbar-toggler-custom"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <ul className={`navbar-nav-custom ${mobileMenuOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={isActive(item.href) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://cal.com/vivek-vashistha/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
            >
              <Calendar size={16} style={{ marginRight: '6px' }} />
              Book a Call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
