import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

import testimonialRanjeeta from '../assets/img/testimonial-ranjeeta.png'
import testimonialAnurag from '../assets/img/testimonial-anurag.png'

const testimonials = [
  {
    image: testimonialRanjeeta,
    name: 'Ranjeeta Nanda',
    title: 'Engineering Manager',
    text: 'Vivek played a crucial role in our year-long Android app project, successfully extending a legacy tablet application from supporting a single use-case to multiple use-cases. He quickly grasped and revamped complex, outdated code, resolving bugs, optimizing performance, and upgrading critical components. His exceptional skills in design, architecture, and coding were pivotal to the project\'s success.',
  },
  {
    image: testimonialAnurag,
    name: 'Anurag Jain',
    title: 'Content Creator & Entrepreneur',
    text: 'Vivek streamlined my subscriber management by integrating multiple platforms into ConvertKit, automating tagging and list management, and creating an effective email campaign. Their clear documentation enables me to handle everything independently. Highly recommended for their efficient and impactful solutions!',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ color: 'var(--dark-text)' }}>What Clients Say</h2>
          <p style={{ color: 'var(--dark-text-muted)' }}>
            Don't just take my word for it — here's what others have to say.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <Quote size={48} className="testimonial-quote-icon" />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="testimonial-author-info">
                      <span className="testimonial-author-name">{testimonial.name}</span>
                      <span className="testimonial-author-title">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
