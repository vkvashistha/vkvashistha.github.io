import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import overlayBg from '../assets/img/overlay-bg.jpg'
import testimonialRanjeeta from '../assets/img/testimonial-ranjeeta.png'
import testimonialAnurag from '../assets/img/testimonial-anurag.png'

const testimonials = [
  {
    image: testimonialRanjeeta,
    name: 'Ranjeeta Nanda',
    text: 'Vivek played a crucial role in our year-long Android app project, successfully extending a legacy tablet application from supporting a single use-case to multiple use-cases. He quickly grasped and revamped complex, outdated code, resolving bugs, optimizing performance, and upgrading critical components. His exceptional skills in design, architecture, and coding were pivotal to the project\'s success, making his contributions a point of pride for our team.',
  },
  {
    image: testimonialAnurag,
    name: 'Anurag Jain',
    text: 'Vivek streamlined my subscriber management by integrating multiple platforms into ConvertKit, automating tagging and list management, and creating an effective email campaign. Their clear documentation enables me to handle everything independently. Highly recommended for their efficient and impactful solutions!',
  },
]

export default function Testimonials() {
  return (
    <div
      className="testimonials paralax-mf bg-image"
      style={{ backgroundImage: `url(${overlayBg})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle b-shadow-a"
                      />
                      <span className="author">{testimonial.name}</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">{testimonial.text}</p>
                      <span className="comit">
                        <i className="fa fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

