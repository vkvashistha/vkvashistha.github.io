import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const stats = [
  { value: '25+', label: 'AI Chatbots Built' },
  { value: '3.5M', label: 'Subscribers Served' },
  { value: '300K', label: 'Active Students' },
  { value: '10+', label: 'Subject Domains' },
]

const techStack = [
  'Python', 'Langchain', 'Langgraph', 'LlamaIndex', 'RAG', 
  'Vector DB', 'OpenAI', 'FastAPI', 'React', 'WhatsApp API'
]

const edtechStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "EdTech AI Platform - Convegenius.ai Case Study",
  "description": "Built 25+ RAG-based AI chatbots for Convegenius.ai, serving 3.5 million subscribers with personalized learning experiences across multiple subjects and themes.",
  "author": {
    "@type": "Person",
    "name": "Vivek Vashistha"
  },
  "publisher": {
    "@type": "Person",
    "name": "Vivek Vashistha"
  },
  "datePublished": "2024-01-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://vivekvashistha.me/case-study/edtech-ai"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vivekvashistha.me/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://vivekvashistha.me/#case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "EdTech AI Platform",
        "item": "https://vivekvashistha.me/case-study/edtech-ai"
      }
    ]
  }
}

export default function CaseStudyEdtech() {
  return (
    <div className="case-study-page">
      <SEO
        title="EdTech AI Platform - Convegenius.ai Case Study"
        description="Built 25+ RAG-based AI chatbots for Convegenius.ai, serving 3.5 million subscribers with personalized learning experiences across multiple subjects and themes."
        keywords="RAG chatbots, EdTech AI, Langgraph, Python, LLM, Convegenius, AI education, personalized learning"
        url="/case-study/edtech-ai"
        type="article"
        structuredData={edtechStructuredData}
      />
      {/* Hero */}
      <section className="case-study-hero">
        <div className="container">
          <motion.div 
            className="case-study-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/#case-studies">Case Studies</Link> / EdTech AI Platform
            </div>
            <h1>EdTech AI Platform</h1>
            <p className="lead">
              Built 25+ RAG-based AI chatbots for Convegenius.ai, serving 3.5 million subscribers 
              with personalized learning experiences across multiple subjects and themes.
            </p>
            <div className="case-study-stats">
              {stats.map((stat, index) => (
                <div key={index} className="case-study-stat">
                  <span className="case-study-stat-value">{stat.value}</span>
                  <span className="case-study-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="case-study-content">
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Challenge</h2>
            <p>
              Convegenius.ai, a rapidly growing EdTech company, needed to scale their educational 
              content delivery to millions of students across India. Traditional methods couldn't 
              keep up with the demand for personalized, interactive learning experiences. They needed 
              AI-powered solutions that could:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Deliver personalized learning content based on student performance</li>
              <li>Handle millions of concurrent users on WhatsApp (Swiftchat)</li>
              <li>Support multiple subjects including Science, Math, English, and regional languages</li>
              <li>Generate engaging, interactive Q&A sessions that keep students motivated</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Solution</h2>
            <p>
              Leading a team of 10 engineers, I architected and delivered a comprehensive suite of 
              AI-powered educational chatbots. Our solution included:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>RAG-based Knowledge System:</strong> Implemented Retrieval Augmented Generation 
              to provide accurate, curriculum-aligned responses from extensive educational content.</li>
              <li><strong>Multi-modal Learning:</strong> Built chatbots supporting text, images, and 
              video-based questions and answers.</li>
              <li><strong>Adaptive Learning Paths:</strong> Created AI that adjusts difficulty and 
              content based on individual student performance.</li>
              <li><strong>Celebrity Bot:</strong> Developed a special chatbot for a famous politician's 
              election campaign, demonstrating versatility of the platform.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Technical Implementation</h2>
            <p>
              The platform was built using cutting-edge AI technologies and scalable cloud infrastructure:
            </p>
            <div className="case-study-tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Results</h2>
            <p>
              The AI chatbot platform has become a cornerstone of Convegenius's product offering:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>3.5 Million Subscribers:</strong> Successfully scaled to serve millions of 
              students across India.</li>
              <li><strong>300K+ Active Daily Users:</strong> High engagement rates with students 
              returning daily for learning sessions.</li>
              <li><strong>25+ Specialized Chatbots:</strong> Deployed across various subjects, 
              themes, and use cases.</li>
              <li><strong>Improved Learning Outcomes:</strong> Students using the platform showed 
              measurable improvement in test scores.</li>
            </ul>
          </motion.div>

          <motion.div 
            style={{ marginTop: '4rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/#case-studies" className="btn-light">
              <ArrowLeft size={18} />
              Back to Case Studies
            </Link>
            <a 
              href="https://cal.com/vivek-vashistha/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              <Calendar size={18} />
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

