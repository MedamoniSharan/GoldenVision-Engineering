import { businessServices } from '@/data/businessServices';

export default function FeaturedServices() {
  return (
    <section className="featured-services" id="services" data-parallax-section="0.1">
      <div className="container">
        <div className="featured-services-header">
          <h2 className="fonth3 section-heading-lg">
            Our <span className="accent">Services</span>
          </h2>
          <p className="services-intro">
            Structural steel, miscellaneous metals, connection design, PEMB, BIM integration, and
            estimation — every deliverable is engineered and detailed with Tekla-powered precision.
          </p>
        </div>

        <div className="featured-services-grid">
          {businessServices.map((service, index) => (
            <article key={service.id} id={service.id} className="featured-service-card">
              <div className="featured-service-top">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="featured-service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {service.teklaPowered && <span className="tekla-chip">Tekla Powered</span>}
              </div>
              <div className="featured-service-body">
                <h3>{service.title}</h3>
                <p className="featured-summary">{service.summary}</p>
                <p>{service.description}</p>
                <ul className="service-features-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="featured-service-link">
                  Discuss {service.title} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
