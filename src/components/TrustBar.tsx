import { motion } from 'framer-motion'

const companies = [
  { name: 'Turing', icon: '🚀' },
  { name: 'CaaStle', icon: '👗' },
  { name: 'Convegenius', icon: '🎓' },
  { name: 'Microsoft', icon: '💼' },
  { name: 'Meta', icon: '📱' },
  { name: 'Character AI', icon: '🤖' },
]

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <motion.p 
          className="trust-bar-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders
        </motion.p>
        <motion.div 
          className="trust-bar-logos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {companies.map((company, index) => (
            <motion.div 
              key={company.name}
              className="trust-bar-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <span style={{ fontSize: '1.5rem' }}>{company.icon}</span>
              {company.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

