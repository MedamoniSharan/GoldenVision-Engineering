import { useEffect, useState, type CSSProperties } from 'react';
import { businessServices } from '@/data/businessServices';

const serviceIds = new Set(businessServices.map((service) => service.id));

export default function FeaturedServices() {
  const [activeId, setActiveId] = useState<string | null>(businessServices[0]?.id ?? null);

  useEffect(() => {
    const openFromHash = (hash: string) => {
      const id = hash.replace(/^#/, '');
      if (serviceIds.has(id)) setActiveId(id);
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (link) openFromHash(link.getAttribute('href') ?? '');
    };

    const onPopState = () => openFromHash(window.location.hash);

    openFromHash(window.location.hash);
    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    <section className="featured-services" id="services" data-parallax-section="0.1">
      <div className="container">
        <div className="featured-services-header">
          <h2 className="fonth3 section-heading-lg">
            Our <span className="accent">Services</span>
          </h2>
        </div>

        <div
          className="services-tabs"
          style={{ '--services-count': businessServices.length } as CSSProperties}
        >
          {businessServices.map((service) => {
            const isOpen = service.id === activeId;
            const panelId = `${service.id}-details`;
            return (
              <div key={service.id} className={`services-tab-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  id={service.id}
                  className="services-tab"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveId(isOpen ? null : service.id)}
                >
                  <span>{service.title}</span>
                </button>

                <div
                  id={panelId}
                  className="services-tab-panel"
                  role="region"
                  aria-labelledby={service.id}
                  aria-hidden={!isOpen}
                >
                  <div className="services-tab-panel-inner">
                    <div className="services-tab-panel-content">
                      <h3>{service.title}</h3>
                      <p className="services-tab-summary">{service.summary}</p>
                      <p>{service.description}</p>
                      <ul className="services-tab-features">
                        {service.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
