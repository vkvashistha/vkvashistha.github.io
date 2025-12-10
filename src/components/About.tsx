import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Briefcase } from 'lucide-react'
import photo from '../assets/img/photo.png'

const journey = [
  { title: 'Gaming Startup', period: '2012-15', description: 'Built 15+ mobile games' },
  { title: 'E-Commerce Scale', period: '2015-22', description: 'Multi-tenant platform' },
  { title: 'EdTech AI', period: '2022-24', description: '50+ AI projects' },
  { title: 'AI Advisor', period: 'Present', description: 'Enterprise solutions' },
]

const credentials = [
  { icon: Briefcase, text: 'Co-Founder, Madgical Techdom (20-person engineering team)' },
  { icon: BookOpen, text: 'M.Tech from GGS IP University (Ranked #21 in India)' },
  { icon: Award, text: 'Published researcher in Procedural Content Generation' },
  { icon: Users, text: '3x Hackathon Winner (Voice Assistant, Multi-player Gaming)' },
]

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image">
            <img src={photo} alt="Vivek Vashistha" />
          </div>
          
          <div className="about-text">
            <h2>About Me</h2>
            <p className="lead">
              After 13 years of building products at scale—from mobile games with 40M+ downloads 
              to AI systems serving millions—I now help ambitious companies unlock the power of 
              technology to solve real business problems.
            </p>
            <p style={{ color: 'var(--light-text-muted)', marginTop: '1rem', lineHeight: '1.8' }}>
              My journey has taken me from developing hit games at a gaming startup, to architecting 
              e-commerce platforms that power 25+ fashion brands, to leading 50+ AI projects 
              including RAG chatbots, agentic applications, and LLM fine-tuning.
            </p>
            <p style={{ color: 'var(--light-text-muted)', marginTop: '1rem', lineHeight: '1.8' }}>
              Today, as a co-founder and technical leader, I combine deep technical expertise with 
              strategic thinking to help companies navigate complex technology decisions and build 
              solutions that deliver real value.
            </p>
            
            <div className="about-journey">
              <h3>My Journey</h3>
              <div className="journey-timeline">
                {journey.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="journey-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="journey-item-title">{item.title}</div>
                    <div className="journey-item-period">{item.period}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="about-credentials">
              <h3>Credentials</h3>
              <ul className="credentials-list">
                {credentials.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={20} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
