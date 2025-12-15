import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const stats = [
  { value: '30+', label: 'Exercises Supported' },
  { value: 'Real-time', label: 'Posture Detection' },
  { value: '95%', label: 'Detection Accuracy' },
  { value: 'Zero', label: 'Hardware Required' },
]

const techStack = [
  'React', 'Flask', 'Python', 'Google MediaPipe', 'Pose Landmark Detection',
  'Azure Speech Service', 'Google Speech API', 'Computer Vision', 'WebRTC'
]

const getactyvStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GetActyv - AI Exercise Coach Case Study",
  "description": "A computer vision solution enabling physicians to prescribe exercises and automatically monitor patients as they perform them - all through a standard webcam or phone camera.",
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
    "@id": "https://vivekvashistha.me/case-study/getactyv"
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
        "name": "GetActyv - AI Exercise Coach",
        "item": "https://vivekvashistha.me/case-study/getactyv"
      }
    ]
  }
}

export default function CaseStudyGetactyv() {
  return (
    <div className="case-study-page">
      <SEO
        title="GetActyv - AI Exercise Coach Case Study"
        description="A computer vision solution enabling physicians to prescribe exercises and automatically monitor patients as they perform them - all through a standard webcam or phone camera."
        keywords="computer vision, MediaPipe, pose detection, healthcare AI, exercise monitoring, physical therapy, AI coach"
        url="/case-study/getactyv"
        type="article"
        structuredData={getactyvStructuredData}
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
              <Link to="/">Home</Link> / <Link to="/#case-studies">Case Studies</Link> / GetActyv
            </div>
            <h1>GetActyv - AI Exercise Coach</h1>
            <p className="lead">
              A computer vision solution enabling physicians to prescribe exercises and automatically 
              monitor patients as they perform them - all through a standard webcam or phone camera.
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
              Physical therapy and exercise prescription face a fundamental challenge: how do you 
              ensure patients perform exercises correctly at home without constant supervision? 
              Incorrect form can lead to injury and delayed recovery. GetActyv needed a solution that:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>Allows physicians to prescribe specific exercises based on health conditions</li>
              <li>Provides real-time feedback on exercise form and posture</li>
              <li>Works on any device with a camera - no special hardware needed</li>
              <li>Tracks patient progress and compliance over time</li>
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
              I architected and developed an AI-powered exercise coaching platform using computer 
              vision and pose estimation technology:
            </p>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>Pose Landmark Detection:</strong> Using Google MediaPipe to track 33 body 
              landmarks in real-time, enabling accurate posture analysis.</li>
              <li><strong>Joint Angle Calculation:</strong> Proprietary algorithms interpret landmark 
              positions to calculate joint angles and detect specific postures.</li>
              <li><strong>Voice Guidance:</strong> Azure/Google Speech services provide real-time 
              audio feedback to guide users through exercises.</li>
              <li><strong>Exercise Library:</strong> Built a comprehensive library of exercises with 
              defined correct form parameters.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How It Works</h2>
            <p>
              The system follows a simple but powerful workflow:
            </p>
            <ol style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '2' }}>
              <li><strong>Prescription:</strong> Physician creates an exercise plan based on patient's 
              condition using the admin dashboard.</li>
              <li><strong>Patient Access:</strong> Patient receives their personalized exercise plan 
              and accesses it via web or mobile.</li>
              <li><strong>Live Monitoring:</strong> Camera captures patient movements, AI processes 
              pose landmarks in real-time.</li>
              <li><strong>Feedback Loop:</strong> Voice and visual feedback guides the patient to 
              correct their form as they exercise.</li>
              <li><strong>Progress Tracking:</strong> Session data is stored, allowing physicians 
              to track compliance and progress.</li>
            </ol>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Technical Implementation</h2>
            <p>
              The platform combines cutting-edge computer vision with modern web technologies:
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
            <h2>Key Technical Achievements</h2>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li><strong>Real-time Processing:</strong> Achieved smooth 30fps pose estimation even 
              on mid-range devices.</li>
              <li><strong>High Accuracy:</strong> 95%+ accuracy in detecting correct vs incorrect form 
              across supported exercises.</li>
              <li><strong>No Hardware Dependency:</strong> Works with any webcam or smartphone camera, 
              eliminating barrier to entry.</li>
              <li><strong>Scalable Architecture:</strong> Cloud-based backend handles concurrent users 
              and stores exercise data securely.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="case-study-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Results</h2>
            <ul style={{ marginTop: '1rem', color: 'var(--light-text-muted)', lineHeight: '1.8' }}>
              <li>30+ exercises supported with accurate form detection</li>
              <li>Real-time voice and visual feedback system</li>
              <li>Comprehensive physician dashboard for prescription management</li>
              <li>Patient-facing app with progress tracking</li>
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

