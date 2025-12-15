import SEO from '../components/SEO'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import CaseStudies from '../components/CaseStudies'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Insights from '../components/Insights'
import CTASection from '../components/CTASection'
import Contact from '../components/Contact'

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vivek Vashistha",
  "url": "https://vivekvashistha.me",
  "image": "https://vivekvashistha.me/img/photo.png",
  "jobTitle": "AI Solutions Architect & Tech Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Madgical Techdom"
  },
  "description": "Software Development Specialist with 13+ years of experience in AI, Full-Stack Development, and Mobile App Development.",
  "sameAs": [
    "https://www.linkedin.com/in/vkvashistha/",
    "https://github.com/vkvashistha",
    "https://twitter.com/vkvashistha1",
    "https://medium.com/@vivekvashistha"
  ],
  "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Software Architecture", "Mobile Development", "Full Stack Development", "RAG", "LLM", "Agentic AI"]
}

export default function HomePage() {
  return (
    <>
      <SEO structuredData={homeStructuredData} />
      <Hero />
      <TrustBar />
      <Problems />
      <Solutions />
      <CaseStudies />
      <About />
      <Testimonials />
      <Insights />
      <CTASection />
      <Contact />
    </>
  )
}

