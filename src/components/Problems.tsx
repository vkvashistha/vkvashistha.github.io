import { motion } from 'framer-motion'
import { 
  Bot, 
  Server, 
  Rocket, 
  Users, 
  Code2, 
  Bug 
} from 'lucide-react'

const problems = [
  {
    icon: Bot,
    title: 'AI Adoption',
    description: 'Stuck in POC purgatory? Can\'t get AI projects to production?'
  },
  {
    icon: Server,
    title: 'Legacy Systems',
    description: 'Outdated architecture blocking growth and innovation?'
  },
  {
    icon: Rocket,
    title: 'Scaling Issues',
    description: 'Need to ship faster with fewer bugs and better quality?'
  },
  {
    icon: Users,
    title: 'Tech Leadership',
    description: 'Need senior technical guidance without full-time cost?'
  },
  {
    icon: Code2,
    title: 'Team Building',
    description: 'Struggling to attract and retain the right engineering talent?'
  },
  {
    icon: Bug,
    title: 'Quality Issues',
    description: 'Regressions in every release? Test coverage a mess?'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Problems() {
  return (
    <section className="problems-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Struggling with any of these challenges?</h2>
          <p>These are the exact problems I help ambitious companies solve every day.</p>
        </motion.div>
        
        <motion.div 
          className="problems-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="problem-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="problem-card-icon">
                <problem.icon size={24} />
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

