import photo from '../assets/img/photo.png'

const skills = [
  { name: 'Frontend: ReactJS, NextJS, Typescript', percentage: 85 },
  { name: 'Backend: NestJS, NodeJS, FastAPI, Python', percentage: 75 },
  { name: 'Gen AI: Langchain, LlamaIndex, Langgraph', percentage: 50 },
  { name: 'Cloud: AWS, Docker, Kubernetes', percentage: 90 },
  { name: 'Mobile: Android Native, Kotlin, Flutter, React Native', percentage: 90 },
]

const aboutParagraphs = [
  'I am a Software Development Specialist with 12 years of experience in Full-Stack Development, Mobile App Development, and Generative AI. Holding a Postgraduate degree in Computer Science and Engineering, I have consistently delivered impactful technology solutions across diverse domains',
  'My journey began at a gaming startup, where I developed 15+ mobile games like Hangman and Wordsearch, achieving 40M+ downloads and 50K daily active users. Later, at an e-commerce firm, I built a low-code, multi-tenant platform that empowered 25+ apparel brands to launch mobile apps. My work improved efficiency with 95%+ code coverage and reduced test execution times from 2 hours to 5 minutes.',
  'As a consultant, I helped clients modernize legacy systems, streamline release cycles, and implement efficient processes. For instance, I reduced a 10,000-line codebase to 500 lines, boosting performance and maintainability.',
  'As a co-founder of a software agency, I led 50+ Generative AI projects, including AI chatbots, HR automation tools, email classification systems, and text-to-video generation',
  'Currently, my focus is on creating innovative AI solutions that drive business growth and efficiency.',
]

export default function About() {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={photo} className="img-fluid rounded b-shadow-a" alt="Vivek Vashistha" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Vivek Vashistha</span></p>
                        <p><span className="title-s">Profile: </span> <span>Software Architect</span></p>
                        <p><span className="title-s">Email: </span> <span>vkvashistha@gmail.com</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <span>{skill.name}</span> <span className="pull-right">{skill.percentage}%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    {aboutParagraphs.map((paragraph, index) => (
                      <p className="lead" key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

