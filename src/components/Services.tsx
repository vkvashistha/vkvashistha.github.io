const services = [
  {
    icon: 'ion-monitor',
    title: 'Full Stack Development',
    description: 'I specialize in building responsive and user-friendly web applications using ReactJS, NextJS, and Typescript.',
  },
  {
    icon: 'ion-code-working',
    title: 'Mobile Application Development',
    description: 'Expert in building native and hybrid mobile apps for Android and iOS, delivering high-performance solutions with modern tech stack.',
  },
  {
    icon: 'ion-camera',
    title: 'Generative AI Solutions',
    description: 'Leveraging cutting-edge AI technologies to create intelligent solutions, from chatbots and recommendation systems to automated workflows and predictive analytics.',
  },
  {
    icon: 'ion-android-phone-portrait',
    title: 'Project Management',
    description: 'Experienced in leading cross-functional teams, implementing agile methodologies, and delivering complex projects on time and within budget.',
  },
  {
    icon: 'ion-paintbrush',
    title: 'Software Architecture',
    description: 'Designing scalable, maintainable software architectures using modern design patterns, microservices, and cloud-native technologies.',
  },
  {
    icon: 'ion-stats-bars',
    title: 'Consulting and Training',
    description: 'Providing expert guidance on software development best practices and delivering specialized training in modern web technologies and development methodologies.',
  },
]

export default function Services() {
  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
                I deliver innovative solutions that drive business growth and efficiency.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className={service.icon}></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">{service.title}</h2>
                  <p className="s-description text-center">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

