import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { analytics } from '../utils/analytics'

const stats = [
  { value: '50+', label: 'AI Projects' },
  { value: '3.5M', label: 'Users Served' },
  { value: '13+', label: 'Years Exp.' },
  { value: '95%', label: 'Code Coverage' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I Help Companies Build & Scale{' '}
          <span className="gradient-text">AI Solutions That Actually Work</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From RAG chatbots to agentic applications—I've delivered 50+ AI projects 
          serving millions of users. Let's transform your ideas into production-ready 
          solutions.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="https://cal.com/vivek-vashistha/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-custom"
            onClick={() => analytics.trackCTAClick('Book a Strategy Call', 'Hero')}
          >
            <Calendar size={18} />
            Book a Strategy Call
          </a>
          <a 
            href="#case-studies" 
            className="btn-secondary-custom"
            onClick={() => analytics.trackButtonClick('View Case Studies', 'Hero')}
          >
            View Case Studies
            <ArrowRight size={18} />
          </a>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
