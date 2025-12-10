import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import convegeniusImg from '../assets/img/convegenius_swiftchat.png'
import getActyvImg from '../assets/img/GetActyvCover.png'
import attrybImg from '../assets/img/attryb.png'
import gbBannerImg from '../assets/img/GB_banner.png'
import spicelabsImg from '../assets/img/spicelabs.png'
import saarthiImg from '../assets/img/Saarthi.png'

const portfolioItems = [
  {
    image: convegeniusImg,
    title: 'AI Powered Educational Bots',
    category: 'Generative AI',
    date: 'Oct 2023- Mar 2025',
  },
  {
    image: getActyvImg,
    title: 'GetActyv',
    category: 'AI Full Stack Development',
    date: '2024',
  },
  {
    image: attrybImg,
    title: 'Attryb',
    category: 'AI Fullstack Development',
    date: 'Feb 2022 - Dec 2022',
  },
  {
    image: gbBannerImg,
    title: 'Gwynnieebee',
    category: 'Mobile App Development',
    date: '2015-2022',
  },
  {
    image: spicelabsImg,
    title: 'Mobile Games',
    category: 'Mobile App Development',
    date: '2012-2015',
  },
  {
    image: saarthiImg,
    title: 'Saarthi Education',
    category: 'Fullstack Development',
    date: 'Aug 2024 - Mar 2025',
  },
]

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const slides = portfolioItems.map((item) => ({
    src: item.image,
  }))

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Showcasing innovative projects that demonstrate my expertise in web, mobile, and AI development.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="col-md-4" key={item.title}>
              <div className="work-box">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    openLightbox(index)
                  }}
                >
                  <div className="work-img">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{item.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{item.category}</span> / <span className="w-date">{item.date}</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  )
}

