import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Linkedin, Github, Twitter } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailExp = /^[^\s()<>@,;:/]+@\w[\w.-]+\.[a-z]{2,}$/i
    return emailExp.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (formData.name.length < 2) {
      newErrors.name = 'Please enter your name'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (formData.subject.length < 4) {
      newErrors.subject = 'Please enter a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(false)

    if (validateForm()) {
      // Create mailto link as fallback
      const mailtoLink = `mailto:vkvashistha@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
      window.location.href = mailtoLink
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's discuss how I can help.</p>
        </motion.div>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's Connect</h2>
            <p>
              The fastest way to reach me is through scheduling a call. 
              I typically respond within 24 hours on business days.
            </p>
            
            <div className="contact-methods">
              <a 
                href="https://cal.com/vivek-vashistha/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-method"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-method-icon">
                  <Calendar size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>Book a Call</h4>
                  <p>Schedule a free 30-min strategy session</p>
                </div>
              </a>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>Email</h4>
                  <a href="mailto:vkvashistha@gmail.com">vkvashistha@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-method-content">
                  <h4>Location</h4>
                  <p>Faridabad (Haryana), India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-socials">
              <h4>Connect on Social</h4>
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/vkvashistha/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/vkvashistha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://x.com/vkvashistha1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              {submitted && (
                <div style={{ 
                  padding: '1rem', 
                  background: 'var(--accent-glow)', 
                  color: 'var(--accent)',
                  borderRadius: 'var(--border-radius)',
                  marginBottom: '1rem',
                  fontWeight: 500
                }}>
                  Opening your email client...
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control-custom"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control-custom"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control-custom"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control-custom"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.message}</span>}
              </div>
              
              <button type="submit" className="btn-primary-custom" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
