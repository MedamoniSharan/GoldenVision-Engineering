import { portfolioProjects } from '@/data/siteContent';

export default function ImageCarouselGallery() {
  return (
    <section className="image-carousel" id="portfolio" aria-label="Project portfolio">
      <div className="container">
        <h2 className="fonth3 section-heading-lg portfolio-heading">
          Our <span className="accent">Portfolio</span>
        </h2>
        <p className="services-intro portfolio-intro">
          Steel, connection, BIM, and industrial packages delivered with Tekla-powered detailing.
        </p>

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="portfolio-card">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-card-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
