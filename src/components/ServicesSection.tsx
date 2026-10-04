import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { businessServices } from '@/data/businessServices';
import { companyStats, standardLogos } from '@/data/siteContent';
import StatsCounter from './StatsCounter';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ServicesSection() {
  return (
    <div className="container boxlayouts pt-4" id="services">
      <div className="tabs">
        <div className="tabs__content homedesign">
          <div className="tabs__panel">
            <div className="container key">
              <h3 className="fonth3 section-heading-lg">
                Our <span className="accent">Business</span>
              </h3>
              <p className="services-intro">
                Golden Vision Engineering specializes in structural steel detailing, connection
                design, miscellaneous metals, PEMB design, BIM integration, and estimation —
                all powered by Tekla Structures and delivered to golden standards.
              </p>
            </div>

            <StatsCounter stats={companyStats} />

            <div className="container key pbmob standards-section">
              <div className="industries-we-serve indusmob">
                <div className="row">
                  <div className="col-12">
                    <h3 className="fonth3 mobtexts section-heading">Standards</h3>
                    <Swiper
                      modules={[Autoplay, Navigation]}
                      slidesPerView={2}
                      spaceBetween={10}
                      loop
                      autoplay={{ delay: 1500, disableOnInteraction: false }}
                      navigation
                      breakpoints={{
                        480: { slidesPerView: 1 },
                        736: { slidesPerView: 2 },
                        980: { slidesPerView: 5 },
                        1200: { slidesPerView: 5 },
                      }}
                      className="standards-swiper"
                    >
                      {standardLogos.map((logo) => (
                        <SwiperSlide key={logo}>
                          <div className="standard-logo">
                            <img src={logo} alt="Industry standard certification" loading="lazy" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <section className="aiana-blog mt-0">
              <h2 className="text-left titletext pl-50 section-subheading">All Services</h2>
            </section>

            <section className="our-products-2 mt-6">
              <div className="services-grid">
                {businessServices.map((service) => (
                  <article key={service.id} id={service.id} className="service-card">
                    <div className="service-card-header">
                      <div className="highlight-image">
                        <img src={service.image} alt={service.title} loading="lazy" />
                      </div>
                      {service.teklaPowered && <span className="tekla-chip">Tekla</span>}
                    </div>
                    <h3>{service.title}</h3>
                    <p className="service-summary">{service.summary}</p>
                    <p>{service.description}</p>
                    <ul className="service-features-list service-features-list--compact">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <div className="container key pbmob">
              <div className="industries-we-serve">
                <h3 className="fonth3 mobtexts section-heading">
                  Industries <span className="accent">We Serve</span>
                </h3>
                <div className="industries-tags">
                  {[
                    'Commercial Buildings',
                    'Industrial Facilities',
                    'Infrastructure',
                    'Pre-Engineered Buildings',
                    'Warehousing & Logistics',
                    'Oil & Gas Structures',
                  ].map((industry) => (
                    <span key={industry} className="industry-tag">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
