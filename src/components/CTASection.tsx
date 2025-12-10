import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Build AI That Delivers Real Results?</h2>
          <p>
            Let's discuss your project in a free 30-minute strategy session. 
            No sales pitch — just actionable insights for your specific challenges.
          </p>
          <a 
            href="https://cal.com/vivek-vashistha/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary-custom"
            style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}
          >
            <Calendar size={20} />
            Schedule Your Free Strategy Call
          </a>
          <p className="cta-availability">
            <Clock size={16} />
            Currently accepting 2-3 new clients per month
          </p>
        </motion.div>
      </div>
    </section>
  )
}

