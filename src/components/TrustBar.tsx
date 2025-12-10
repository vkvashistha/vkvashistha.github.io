import { motion } from 'framer-motion'
import turingLogo from '../assets/img/logos/turing_logo.avif'
import caastleLogo from '../assets/img/logos/CaaStle_Logo.jpg'
import convegeniusLogo from '../assets/img/logos/convegenius_logo.png'
import attrybLogo from '../assets/img/logos/attryb_logo.svg'
import spiceLogo from '../assets/img/logos/spice_logo.png'
import shorthillsLogo from '../assets/img/logos/shorthills_logo.png'
import madgicalLogo from '../assets/img/logos/madgical_techdom_logo.svg'

const companies = [
  { name: 'Turing', logo: turingLogo },
  { name: 'CaaStle', logo: caastleLogo },
  { name: 'Convegenius', logo: convegeniusLogo },
  { name: 'Attryb', logo: attrybLogo },
  { name: 'Spice Labs', logo: spiceLogo },
  { name: 'Shorthills', logo: shorthillsLogo },
  { name: 'Madgical Techdom', logo: madgicalLogo },
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
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
