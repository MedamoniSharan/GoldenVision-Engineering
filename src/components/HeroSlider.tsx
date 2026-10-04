import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { heroSlides } from '@/data/siteContent';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-slider">
      <div className="hero-slider-inner">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  {slide.subtitle && <p className="hero-subtitle">{slide.subtitle}</p>}
                  <a href={slide.ctaHref} className="hero-cta">
                    {slide.ctaLabel} →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hero-controls">
          <button
            type="button"
            className="hero-arrow hero-arrow-prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ‹
          </button>

          <div className="hero-bullets" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to slide ${index + 1}`}
                className={`hero-bullet ${activeIndex === index ? 'selected' : ''}`}
                onClick={() => swiperRef.current?.slideToLoop(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-arrow hero-arrow-next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
