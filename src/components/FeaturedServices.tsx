import { businessServices, featuredServiceIds } from '@/data/businessServices';

export default function FeaturedServices() {
  const featured = featuredServiceIds
    .map((id) => businessServices.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <section className="featured-services" id="featured-services">
      <div className="container">
        <div className="featured-services-header">
          <h2 className="fonth3 section-heading-lg">
            Core <span className="accent">Steel Services</span>
          </h2>
          <p className="services-intro">
            From main structural steel and connection design to miscellaneous metals and
            PEMB — every deliverable is engineered and detailed with Tekla-powered precision.
          </p>
        </div>

        <div className="featured-services-grid">
          {featured.map((service) => (
            <article key={service!.id} className="featured-service-card">
              <div className="featured-service-top">
                <img src={service!.image} alt={service!.title} loading="lazy" />
                {service!.teklaPowered && <span className="tekla-chip">Tekla Powered</span>}
              </div>
              <div className="featured-service-body">
                <h3>{service!.title}</h3>
                <p className="featured-summary">{service!.summary}</p>
                <p>{service!.description}</p>
                <ul className="service-features-list">
                  {service!.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href={service!.href} className="featured-service-link">
                  Explore {service!.title} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
