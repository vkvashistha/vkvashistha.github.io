import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import blogOpensource from '../assets/img/blog-opensource.png'
import blogAndroid from '../assets/img/blog-android-file-share.png'
import blogSanta from '../assets/img/blog-santa.png'
import photo from '../assets/img/photo.png'

const insights = [
  {
    image: blogOpensource,
    category: 'Open Source',
    title: 'Watch Out! Open Source Mistakes That Could Sink Your Project',
    description: 'Open Source libraries are great for a quick start, but they come with their own set of challenges. Here are the most common mistakes to avoid.',
    link: 'https://medium.com/@vivekvashistha/watch-out-open-source-mistakes-that-could-sink-your-project-0b8a4b13739c',
    readTime: '4 min',
    featured: true,
  },
  {
    image: blogAndroid,
    category: 'Mobile Development',
    title: 'How to Save a File in Shared Storage Location in Android 13',
    description: 'With Android 13, file storage permissions changed significantly. Here\'s how to properly handle shared storage.',
    link: 'https://medium.com/@vivekvashistha/how-to-save-a-file-in-shared-storage-location-in-android-13-c1e4fdf3d2cb',
    readTime: '10 min',
    featured: false,
  },
  {
    image: blogSanta,
    category: 'Algorithms',
    title: "Even Santa Clause can use this Algorithm",
    description: "A fun exploration of how algorithmic thinking can solve Santa's logistics problem efficiently.",
    link: 'https://medium.com/@vivekvashistha/santa-clause-algorithm-to-fulfill-the-wishes-of-everyone-53a459f87ab9',
    readTime: '10 min',
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Insights() {
  return (
    <section id="insights" className="insights-section section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Insights</h2>
          <p>Thoughts on technology, architecture, and building great products.</p>
        </motion.div>
        
        <motion.div 
          className="insights-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {insights.map((post, index) => (
            <motion.article 
              key={index}
              className="insight-card"
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div 
                className="insight-card-image"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <span className="insight-card-category">
                  {post.featured ? '⭐ Featured' : post.category}
                </span>
              </div>
              <div className="insight-card-content">
                <h3>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
                <p className="insight-card-description">{post.description}</p>
                <div className="insight-card-meta">
                  <div className="insight-card-author">
                    <img src={photo} alt="Vivek Vashistha" />
                    <span>Vivek Vashistha</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://medium.com/@vivekvashistha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-light"
          >
            View All Articles on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

