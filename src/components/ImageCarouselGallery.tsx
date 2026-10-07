import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioProjects } from '@/data/siteContent';

export default function ImageCarouselGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const visibleSlides = useMemo(
    () => [...portfolioProjects, ...portfolioProjects, ...portfolioProjects],
    [],
  );

  const goTo = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + portfolioProjects.length) % portfolioProjects.length,
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => goTo(1), 2800);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const updateOffset = () => {
      const slide = node.querySelector<HTMLElement>('[data-carousel-slide]');
      if (!slide) return;

      const gap = 10;
      const slideWidth = slide.getBoundingClientRect().width + gap;
      node.style.setProperty(
        '--carousel-offset',
        `${-(activeIndex + portfolioProjects.length) * slideWidth}px`,
      );
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [activeIndex]);

  return (
    <section className="image-carousel" id="portfolio" aria-label="Project portfolio">
      <div className="container">
        <h2 className="fonth3 section-heading-lg portfolio-heading">
          Our <span className="accent">Portfolio</span>
        </h2>
        <p className="services-intro portfolio-intro">
          A look at the steel, connection, BIM, and industrial packages Golden Vision Engineering
          delivers with Tekla-powered detailing.
        </p>
      </div>
      <div
        ref={viewportRef}
        className="image-carousel__viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="image-carousel__track"
          role="list"
          aria-live={isPaused ? 'polite' : 'off'}
        >
          {visibleSlides.map((project, index) => (
            <figure
              className="image-carousel__slide"
              data-carousel-slide
              key={`${project.title}-${index}`}
              role="listitem"
            >
              <img
                className="image-carousel__image"
                src={project.image}
                alt={project.title}
                width={1020}
                height={736}
                loading="lazy"
              />
              <figcaption className="image-carousel__caption">
                <strong>{project.title}</strong>
                <span>{project.summary}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <nav className="image-carousel__controls" aria-label="Portfolio carousel controls">
        <button
          className="image-carousel__button"
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous project"
        >
          <ChevronLeft size={17} strokeWidth={1.7} aria-hidden="true" />
        </button>
        <span
          className="image-carousel__status"
          aria-label={`Project ${activeIndex + 1} of ${portfolioProjects.length}`}
        />
        <button
          className="image-carousel__button"
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next project"
        >
          <ChevronRight size={17} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </nav>
    </section>
  );
}
