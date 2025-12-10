import { ReactTyped } from 'react-typed'
import introBg from '../assets/img/intro-bg.jpg'

const roles = [
  'Tech Consultant',
  'Solution Architect',
  'AI Engineer',
  'Full Stack Developer',
  'Mobile Developer'
]

export default function Hero() {
  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: `url(${introBg})` }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">I am Vivek Vashistha</h1>
            <p className="intro-subtitle">
              <ReactTyped
                strings={roles}
                typeSpeed={80}
                backSpeed={30}
                backDelay={1100}
                loop
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

