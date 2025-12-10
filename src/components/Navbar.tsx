import { useState, useEffect } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)

      // Determine active section
      const sections = ['home', 'about', 'service', 'work', 'blog', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 70
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar navbar-b navbar-expand-md fixed-top ${scrolled ? 'navbar-reduce' : 'navbar-trans'}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          Vivek Vashistha
        </a>
        <button
          className={`navbar-toggler ${mobileMenuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-controls="navbarDefault"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-collapse ${mobileMenuOpen ? 'show' : 'collapse'} justify-content-end`} id="navbarDefault">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

