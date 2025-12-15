// Google Analytics 4 (GA4) Integration

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

let gaInitialized = false

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.warn('Google Analytics: Measurement ID not found. Set VITE_GA_MEASUREMENT_ID in .env file')
    }
    return
  }

  if (gaInitialized) {
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: false, // We'll track page views manually via React Router
  })

  // Load GA4 script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  gaInitialized = true
}

export const trackPageView = (path: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: document.title,
  })
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Common event tracking helpers
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`)
  },

  // Track external link clicks
  trackExternalLink: (url: string, linkText?: string) => {
    trackEvent('click', 'external_link', linkText || url, undefined)
  },

  // Track case study views
  trackCaseStudyView: (caseStudyName: string) => {
    trackEvent('view', 'case_study', caseStudyName)
  },

  // Track CTA clicks
  trackCTAClick: (ctaName: string, location?: string) => {
    trackEvent('click', 'cta', `${ctaName}${location ? ` - ${location}` : ''}`)
  },

  // Track form submissions
  trackFormSubmit: (formName: string) => {
    trackEvent('submit', 'form', formName)
  },

  // Track social media clicks
  trackSocialClick: (platform: string) => {
    trackEvent('click', 'social', platform)
  },
}

