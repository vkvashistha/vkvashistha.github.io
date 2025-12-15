import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  structuredData?: object
}

const defaultTitle = 'Vivek Vashistha - AI Solutions Architect & Tech Consultant'
const defaultDescription = 'I help companies build & scale AI solutions that actually work. 50+ AI projects delivered, 3.5M+ users served. Expert in RAG chatbots, agentic AI, mobile platforms, and technical architecture.'
const defaultKeywords = 'AI consultant, tech consultant, software architect, AI solutions, RAG chatbots, agentic AI, mobile app development, Langgraph, Python, React, full stack developer, India'
const defaultImage = 'https://vivekvashistha.me/img/photo.png'
const baseUrl = 'https://vivekvashistha.me'

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = baseUrl,
  type = 'website',
  structuredData,
}: SEOProps) {
  const fullTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Vivek Vashistha" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@vkvashistha1" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

