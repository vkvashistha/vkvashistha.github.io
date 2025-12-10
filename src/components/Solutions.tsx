import { motion } from 'framer-motion'
import { 
  Brain, 
  Layers, 
  Smartphone, 
  GitBranch, 
  Users, 
  GraduationCap,
  ArrowRight,
  Check
} from 'lucide-react'

const solutions = [
  {
    icon: Brain,
    title: 'AI Strategy & Implementation',
    description: 'From POC to production-ready AI systems that deliver real business value.',
    features: [
      'RAG chatbots & knowledge assistants',
      'Agentic AI applications',
      'LLM fine-tuning & optimization'
    ],
    link: '#case-studies'
  },
  {
    icon: Layers,
    title: 'Technical Architecture',
    description: 'Design scalable systems that grow with your business and stand the test of time.',
    features: [
      'System design & due diligence',
      'Cloud architecture (AWS, GCP)',
      'Microservices & event-driven'
    ],
    link: '#case-studies'
  },
  {
    icon: Smartphone,
    title: 'Mobile Platform Engineering',
    description: 'Build once, deploy to multiple brands with multi-tenant mobile solutions.',
    features: [
      'Native Android & iOS development',
      'Cross-platform (React Native, Flutter)',
      'White-label & multi-tenant apps'
    ],
    link: '#case-studies'
  },
  {
    icon: GitBranch,
    title: 'MVP Development',
    description: 'Launch market-ready products in 8-12 weeks with full-stack expertise.',
    features: [
      'React, NextJS, TypeScript',
      'Node.js, Python, FastAPI',
      'End-to-end product delivery'
    ],
    link: '#case-studies'
  },
  {
    icon: Users,
    title: 'Fractional CTO Services',
    description: 'Senior tech leadership on demand without the full-time commitment.',
    features: [
      'Technical strategy & roadmap',
      'Team scaling & hiring',
      'Process optimization'
    ],
    link: '#contact'
  },
  {
    icon: GraduationCap,
    title: 'Team Augmentation',
    description: 'Level up your engineering team with mentorship and best practices.',
    features: [
      'Code review & architecture guidance',
      'Testing & CI/CD implementation',
      'Knowledge transfer & training'
    ],
    link: '#contact'
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Solutions() {
  return (
    <section id="solutions" className="solutions-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>How I Can Help</h2>
          <p>Outcome-focused solutions tailored to your specific challenges and goals.</p>
        </motion.div>
        
        <motion.div 
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="solution-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="solution-card-icon">
                <solution.icon size={28} />
              </div>
              <h3>{solution.title}</h3>
              <p className="solution-card-description">{solution.description}</p>
              <ul className="solution-card-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={solution.link} className="solution-card-link">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

