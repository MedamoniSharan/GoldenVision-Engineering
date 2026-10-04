import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { clientLogos } from '@/data/siteContent';
import { remoteAsset } from '@/utils/assets';
import 'swiper/css';

export default function ClientLogos() {
  return (
    <div className="slider01">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        loop
        autoplay={{ delay: 500, disableOnInteraction: false }}
        speed={600}
        breakpoints={{
          480: { slidesPerView: 2 },
          736: { slidesPerView: 4 },
          980: { slidesPerView: 6 },
          1200: { slidesPerView: 6 },
        }}
        className="client-logos-swiper"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={logo}>
            <div className="client-logo-item">
              <a href="/our-clients/">
                <img src={logo} alt={`Client logo ${index + 1}`} loading="lazy" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <a
        href="/project-cost-assessment/"
        className="floatmoldtek2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={remoteAsset('wp-content/uploads/2026/04/metrics.png')}
          alt=""
          className="cost-estimate-icon"
        />
        Get a Cost Estimate
      </a>
    </div>
  );
}
