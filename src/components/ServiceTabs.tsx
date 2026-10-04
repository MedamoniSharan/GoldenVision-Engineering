import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { serviceTabs, standardLogos } from '@/data/siteContent';
import StatsCounter from './StatsCounter';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const active = serviceTabs.find((t) => t.id === activeTab) ?? serviceTabs[0];

  return (
    <div className="container boxlayouts pt-4">
      <div className="tabs">
        <div className="tabmain row">
          <div className="tabs__labels col-md-12">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tabs__label ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tabs__content homedesign">
          <div className="tabs__panel">
            <StatsCounter stats={active.stats} />

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

            <div className="container key">
              <h3 className="fonth3 section-heading-lg">
                {active.heading}
                {active.headingAccent && (
                  <>
                    <br />
                    <span className="accent">{active.headingAccent}</span>
                  </>
                )}
              </h3>
            </div>

            <section className="aiana-blog mt-0">
              <h2 className="text-left titletext pl-50 section-subheading">Key Highlights</h2>
            </section>

            <section className="our-products-2 mt-6">
              <div className="highlights-grid">
                {active.highlights.map((item) => (
                  <a key={item.title} href={item.href} className="highlight-card">
                    <div className="highlight-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <h3>{item.title}</h3>
                  </a>
                ))}
              </div>
            </section>

            <div className="container key pbmob">
              <div className="industries-we-serve">
                <h3 className="fonth3 mobtexts section-heading">
                  Industries <span className="accent">We Serve</span>
                </h3>
                <div className="industries-tags">
                  {active.industries.map((industry) => (
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
