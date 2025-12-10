import { Link } from 'react-router-dom'
import { Linkedin, Github, Twitter, Mail } from 'lucide-react'

const quickLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#about', label: 'About' },
  { href: '/#insights', label: 'Insights' },
]

const contactLinks = [
  { href: 'https://cal.com/vivek-vashistha/30min', label: 'Book a Call', external: true },
  { href: 'mailto:vkvashistha@gmail.com', label: 'vkvashistha@gmail.com', external: true },
  { href: '#', label: 'Faridabad, India', external: false },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/vkvashistha/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/vkvashistha', icon: Github, label: 'GitHub' },
  { href: 'https://x.com/vkvashistha1', icon: Twitter, label: 'Twitter' },
  { href: 'https://medium.com/@vivekvashistha', icon: Mail, label: 'Medium' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Vivek Vashistha</h3>
            <p>
              AI Solutions Architect & Tech Consultant helping companies 
              build scalable, production-ready technology solutions.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{ 
                    width: '36px', 
                    height: '36px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color-dark)'
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--dark-text-muted)' }}>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/#solutions">AI Strategy</Link></li>
              <li><Link to="/#solutions">Technical Architecture</Link></li>
              <li><Link to="/#solutions">Mobile Development</Link></li>
              <li><Link to="/#solutions">Fractional CTO</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Vivek Vashistha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
