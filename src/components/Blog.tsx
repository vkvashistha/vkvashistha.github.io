import blogOpensource from '../assets/img/blog-opensource.png'
import blogAndroid from '../assets/img/blog-android-file-share.png'
import blogSanta from '../assets/img/blog-santa.png'
import photo from '../assets/img/photo.png'

const blogPosts = [
  {
    image: blogOpensource,
    category: 'Open Source',
    title: 'Watch Out! Open Source Mistakes That Could Sink Your Project',
    description: 'Open Source are great for a quick start, but they come with their own set of challenges. Here are some of the most common mistakes that you can make while working with Open Source.',
    link: 'https://medium.com/@vivekvashistha/watch-out-open-source-mistakes-that-could-sink-your-project-0b8a4b13739c',
    readTime: '4 min',
  },
  {
    image: blogAndroid,
    category: 'Mobile Application Development',
    title: 'How to Save a File in Shared Storage Location in Android 13',
    description: 'With the launch of Android 13, it becomes impossible for apps to access any arbitrary file Location using READ_EXTERNAL_STORAGE or WRITE_EXTERNAL_STORAGE permissions. Now developers have to ...',
    link: 'https://medium.com/@vivekvashistha/how-to-save-a-file-in-shared-storage-location-in-android-13-c1e4fdf3d2cb',
    readTime: '10 min',
  },
  {
    image: blogSanta,
    category: 'Algorithms',
    title: "Even Santa Clause can use this Algorithm to fulfill everyone's wishes",
    description: "It's not easy for Santa Clause to fulfill everyone's wishes. But this algorithm can help him do that.",
    link: 'https://medium.com/@vivekvashistha/santa-clause-algorithm-to-fulfill-the-wishes-of-everyone-53a459f87ab9',
    readTime: '10 min',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Blog</h3>
              <p className="subtitle-a">
                Check out some of my recent blog posts to get an idea of my work and experience.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4" key={post.title}>
              <div className="card card-blog">
                <div className="card-img">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <img src={post.image} alt={post.title} className="img-fluid" />
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">{post.category}</h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p className="card-description">{post.description}</p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img src={photo} alt="Vivek Vashistha" className="avatar rounded-circle" />
                      <span className="author">Vivek Vashistha</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline"></span> {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

