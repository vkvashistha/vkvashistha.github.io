import { useState, FormEvent } from 'react'
import overlayBg from '../assets/img/overlay-bg.jpg'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateEmail = (email: string) => {
    const emailExp = /^[^\s()<>@,;:/]+@\w[\w.-]+\.[a-z]{2,}$/i
    return emailExp.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (formData.name.length < 4) {
      newErrors.name = 'Please enter at least 4 chars'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (formData.subject.length < 4) {
      newErrors.subject = 'Please enter at least 4 chars of subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write something for us'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setSubmitError('')

    if (validateForm()) {
      // Since we don't have a backend, just show success message
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: `url(${overlayBg})` }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit} className="contactForm">
                        {submitted && (
                          <div id="sendmessage" className="show">
                            Your message has been sent. Thank you!
                          </div>
                        )}
                        {submitError && (
                          <div id="errormessage" className="show">
                            {submitError}
                          </div>
                        )}
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && <div className="validation show">{errors.name}</div>}
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && <div className="validation show">{errors.email}</div>}
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                              />
                              {errors.subject && <div className="validation show">{errors.subject}</div>}
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                              {errors.message && <div className="validation show">{errors.message}</div>}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="button button-a button-big button-rouded">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Looking for expert guidance on your next tech project? Whether you need consultation on
                        architecture, mobile development, or AI integration, I'm here to help. Let's collaborate to
                        bring your ideas to life with cutting-edge solutions tailored to your needs.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location"></span> Faridabad (Haryana), India
                        </li>
                        <li>
                          <span className="ion-ios-telephone"></span>{' '}
                          <a href="https://cal.com/vivek-vashistha/30min" target="_blank" rel="noopener noreferrer">
                            https://cal.com/vivek-vashistha/30min
                          </a>
                        </li>
                        <li>
                          <span className="ion-email"></span> vkvashistha@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/vkvashistha/" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/vkvashistha" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/vkvashistha1" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
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

