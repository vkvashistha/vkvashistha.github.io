import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import countersBg from '../assets/img/counters-bg.jpg'

const counters = [
  { icon: 'ion-checkmark-round', value: 100, label: 'WORKS COMPLETED' },
  { icon: 'ion-ios-calendar-outline', value: 12, label: 'YEARS OF EXPERIENCE' },
  { icon: 'ion-ios-people', value: 20, label: 'TOTAL CLIENTS' },
  { icon: 'ion-ribbon-a', value: 3, label: 'AWARD WON' },
]

export default function Counter() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: `url(${countersBg})` }}
      ref={ref}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-sm-3 col-lg-3" key={counter.label}>
              <div className={`counter-box ${index > 0 ? 'pt-4 pt-md-0' : ''}`}>
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className={counter.icon}></i>
                  </span>
                </div>
                <div className="counter-num">
                  <p className="counter">
                    {inView ? (
                      <CountUp end={counter.value} duration={2} />
                    ) : (
                      '0'
                    )}
                  </p>
                  <span className="counter-text">{counter.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

