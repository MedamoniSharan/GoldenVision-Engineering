import { blogPosts, newsItems } from '@/data/siteContent';

export default function NewsAndBlog() {
  return (
    <>
      <section className="aiana-blog news-section">
        <div className="container">
          <h2 className="aiana-h1 fonth3 newstext">
            News & <span className="accent">Events</span>
          </h2>
          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.href} className="news-card">
                {item.image && (
                  <a href={item.href}>
                    <img src={item.image} alt="" loading="lazy" />
                  </a>
                )}
                <h4 className="aiana-h4 fw-medium blogtext">
                  <a href={item.href}>{item.title}</a>
                </h4>
                <a href={item.href} className="view-more">
                  View More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aiana-blog blog-section">
        <div className="container">
          <h2 className="aiana-h1 fonth3 newstext">
            Latest <span className="accent">Blogs</span>
          </h2>
          <div className="blog-list">
            {blogPosts.map((post) => (
              <article key={post.href} className="blog-item">
                <h4 className="aiana-h4 fw-medium blogtext">
                  <a href={post.href}>{post.title}</a>
                </h4>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
