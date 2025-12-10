import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '25+', label: 'Brands Launched' },
  { value: '95%', label: 'Code Coverage' },
  { value: '2hr→5min', label: 'Test Time Reduced' },
  { value: '7 Years', label: 'Platform Duration' },
]

const techStack = [
  'Android', 'Kotlin', 'iOS', 'Swift', 'MVVM', 'Clean Architecture',
  'Retrofit', 'Room', 'Appium', 'CI/CD', 'Firebase'
]

export default function CaseStudyEcommerce() {
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
              <Link to="/">Home</Link> / <Link to="/#case-studies">Case Studies</Link> / E-Commerce Mobile Platform
            </div>
            <h1>E-Commerce Mobile Platform</h1>
            <p className="lead">
              Architected and built a multi-tenant mobile platform for CaaStle, enabling 25+ apparel 
              brands including Gwynniebee, Haverdash, and Teacher Style Box to launch their mobile apps.
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
              CaaStle, a fashion technology company, needed to rapidly expand their rental clothing 
              platform across multiple brands. Each brand required its own mobile app with unique 
              branding, but building separate apps for each would be time-consuming and expensive. 
              They needed a solution that could:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Launch new brand apps within weeks instead of months</li>
              <li>Maintain consistent quality across all brand apps</li>
              <li>Support extensive customization while sharing core functionality</li>
              <li>Ensure high test coverage with fast execution times</li>
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
              I conceptualized and built the "CaaStle Mobile Platform" - a revolutionary low-code, 
              multi-tenant framework that transformed how the company approached mobile development:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>Plug-n-Play Architecture:</strong> Features can be turned on/off at compile 
              time, reducing app size and complexity for each brand.</li>
              <li><strong>White-Label System:</strong> Complete branding customization including colors, 
              fonts, logos, and content without code changes.</li>
              <li><strong>Testable Architecture:</strong> Built using TDD and paired programming, 
              achieving 95%+ code coverage across all apps.</li>
              <li><strong>Optimized CI/CD:</strong> Appium automation tests optimized from 2 hours 
              to just 5 minutes execution time.</li>
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
              The platform leveraged modern mobile development best practices:
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
              The platform became the backbone of CaaStle's mobile strategy:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>25+ Brand Apps:</strong> Successfully launched apps for Gwynniebee, Haverdash, 
              Teacher Style Box, Loft, Express, and many more.</li>
              <li><strong>Development Speed:</strong> New brand apps launched in 2-3 weeks instead of 
              3-4 months.</li>
              <li><strong>Quality Improvement:</strong> 95%+ code coverage with automated testing 
              reduced production bugs significantly.</li>
              <li><strong>Cost Savings:</strong> Shared codebase reduced development and maintenance 
              costs by an estimated 70%.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Apps Delivered</h2>
            <p>Key apps launched using this platform:</p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>Gwynniebee:</strong> Android & iOS - Fashion rental subscription service</li>
              <li><strong>Haverdash:</strong> Android & iOS - Trendy fashion rental for young professionals</li>
              <li><strong>Teacher Style Box:</strong> Android & iOS - Workwear rental for educators</li>
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

