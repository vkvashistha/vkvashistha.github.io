import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import convegeniusImg from '../assets/img/convegenius_swiftchat.png'
import gbBannerImg from '../assets/img/GB_banner.png'
import getActyvImg from '../assets/img/GetActyvCover.png'
import saarthiImg from '../assets/img/Saarthi.png'

const caseStudies = [
  {
    id: 'edtech-ai',
    image: convegeniusImg,
    company: 'Convegenius.ai',
    title: 'EdTech AI Platform',
    result: 'Built 25+ AI chatbots serving 3.5M subscribers with RAG-based learning experiences.',
    tags: ['RAG', 'Langgraph', 'Python', 'LLM'],
    link: '/case-study/edtech-ai'
  },
  {
    id: 'ecommerce-mobile',
    image: gbBannerImg,
    company: 'CaaStle (Gwynniebee)',
    title: 'E-Commerce Mobile Platform',
    result: 'Created multi-tenant platform enabling 25+ apparel brands to launch mobile apps.',
    tags: ['Android', 'iOS', 'Kotlin', 'Swift'],
    link: '/case-study/ecommerce-mobile'
  },
  {
    id: 'agentic-ai',
    image: saarthiImg,
    company: 'Turing Projects',
    title: 'Agentic AI Applications',
    result: 'Developed invoice processing, audit compliance, and conversational commerce agents.',
    tags: ['Langgraph', 'FastAPI', 'Neo4j', 'React'],
    link: '/case-study/agentic-ai'
  },
  {
    id: 'getactyv',
    image: getActyvImg,
    company: 'GetActyv',
    title: 'AI Exercise Coach',
    result: 'Computer vision solution for physicians to prescribe and monitor patient exercises.',
    tags: ['MediaPipe', 'React', 'Flask', 'CV'],
    link: '/case-study/getactyv'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Case Studies</h2>
          <p>Real projects. Real results. Real impact.</p>
        </motion.div>
        
        <motion.div 
          className="case-studies-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              className="case-study-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div 
                className="case-study-card-image"
                style={{ backgroundImage: `url(${study.image})` }}
                aria-label={`${study.company} - ${study.title} case study image`}
                role="img"
              />
              <div className="case-study-card-content">
                <p className="case-study-card-company">{study.company}</p>
                <h3>{study.title}</h3>
                <p className="case-study-card-result">{study.result}</p>
                <div className="case-study-card-tags">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="case-study-tag">{tag}</span>
                  ))}
                </div>
                <Link to={study.link} className="case-study-card-link">
                  Read Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

