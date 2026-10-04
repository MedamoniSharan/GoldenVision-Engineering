import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { caseStudies } from '@/data/siteContent';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CaseStudies() {
  return (
    <section className="aiana-blog moldtekimg21" id="projects">
      <div className="container">
        <h2 className="aiana-h1 text-capitalize fonth3 newstext">
          Case <span className="accent">Studies</span>
        </h2>

        <div className="case-study-links">
          <a href="/case-studies-civil/" className="fontz21">
            Civil
          </a>
          <a href="/mechanical-moldtek/" className="fontz21">
            Mechanical
          </a>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          breakpoints={{
            480: { slidesPerView: 1 },
            736: { slidesPerView: 2 },
            980: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="case-studies-swiper"
        >
          {caseStudies.map((study) => (
            <SwiperSlide key={study.title}>
              <a href={study.href} className="case-study-card">
                <div className="case-study-image">
                  <img src={study.image} alt={study.title} loading="lazy" />
                </div>
                <h2 className="wpcp-image-caption">{study.title}</h2>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
