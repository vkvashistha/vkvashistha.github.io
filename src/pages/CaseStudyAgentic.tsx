import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '6+', label: 'Agentic Projects' },
  { value: '5', label: 'Industry Domains' },
  { value: '$1M+', label: 'Client Value' },
  { value: '100%', label: 'Delivery Rate' },
]

const techStack = [
  'Langgraph', 'Langchain', 'FastAPI', 'React', 'NextJS', 'Neo4j',
  'Qdrant', 'OpenAI', 'GPT-4', 'Python', 'GraphQL', 'AWS'
]

export default function CaseStudyAgentic() {
  return (
    <div className="case-study-page">
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
              <Link to="/">Home</Link> / <Link to="/#case-studies">Case Studies</Link> / Agentic AI Applications
            </div>
            <h1>Agentic AI Applications</h1>
            <p className="lead">
              Built multiple production-grade agentic AI applications for Turing's enterprise clients 
              across Real Estate, Accounting, Freight, E-Commerce, and Healthcare sectors.
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
            <h2>Project Portfolio</h2>
            <p>
              Through Turing, I've had the opportunity to build cutting-edge agentic AI applications 
              for major enterprise clients. Each project required deep understanding of both AI 
              capabilities and specific industry domains.
            </p>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>1. Price Watchtower - E-Commerce</h2>
            <p>
              Built for a global food product company experiencing revenue loss from competitor 
              price undercutting on Amazon:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Automated price scraping from Amazon and competitors across US regions</li>
              <li>LLM-powered analysis to identify who dropped prices first</li>
              <li>Real-time dashboard for pricing intelligence</li>
              <li>Technologies: ReactJS, FastAPI, OpenAI, ScrapperAPI, SerpAPI</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>2. Conversational Commerce</h2>
            <p>
              Production-level prototype for AI-powered shopping experience:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Integration with Saleor E-Commerce platform via GraphQL</li>
              <li>Knowledge Graph implementation using Neo4j for product relationships</li>
              <li>Multi-memory AI agent (procedural, episodic, semantic memory)</li>
              <li>Technologies: Langgraph, Neo4j Graph RAG, Qdrant, NextJS</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>3. Invoice Processing Agent</h2>
            <p>
              Automated invoice-to-purchase order matching system:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Two-way matching of invoices and purchase orders</li>
              <li>Automatic data extraction and validation</li>
              <li>ERP integration via tool calls for real-time data</li>
              <li>Technologies: Langgraph, FastAPI, ReactJS, GPT-4</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>4. FDA Audit Copilot</h2>
            <p>
              Production-grade compliance assistant for healthcare:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Automatic deviation detection in processes and operations</li>
              <li>Compliance standards verification</li>
              <li>Audit trail generation and reporting</li>
              <li>Technologies: React, Langgraph, FastAPI</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>5. Freightmind - Railway Freight</h2>
            <p>
              Anomaly detection in freight forwarding events:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Real-time monitoring of railway freight network events</li>
              <li>AI-powered anomaly detection and alerting</li>
              <li>Integration with Google Appscript for notifications</li>
              <li>Technologies: React, Langgraph, FastAPI</li>
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
              These projects leveraged the latest in agentic AI technology:
            </p>
            <div className="case-study-tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
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

