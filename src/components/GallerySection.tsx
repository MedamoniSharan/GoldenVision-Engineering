import { useEffect, useRef, useState } from 'react';
import { galleryItems } from '@/data/gallery';

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = galleryItems.length;
  const active = activeIndex === null ? null : galleryItems[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [activeIndex]);

  const step = (delta: number) =>
    setActiveIndex((index) => (index === null ? index : (index + delta + count) % count));

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Our <span className="accent">Gallery</span>
          </h2>
        </div>

        <ul className="gallery-grid">
          {galleryItems.map((item, index) => (
            <li key={item.src}>
              <button
                type="button"
                className="gallery-card"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <span className="gallery-card-media">
                  <img src={item.src} alt={item.title} loading="lazy" decoding="async" />
                  <span className="gallery-card-zoom" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </span>
                <span className="gallery-card-caption">
                  <span className="gallery-card-category">{item.category}</span>
                  <span className="gallery-card-title">{item.title}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label={active?.title ?? 'Gallery image'}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') step(1);
          if (event.key === 'ArrowLeft') step(-1);
        }}
      >
        {active && (
          <figure className="gallery-lightbox-figure">
            <img src={active.src} alt={active.title} />
            <figcaption>
              <span className="gallery-card-category">{active.category}</span>
              <span className="gallery-lightbox-title">{active.title}</span>
              <span className="gallery-lightbox-count">
                {(activeIndex ?? 0) + 1} / {count}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="gallery-lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close">
          &times;
        </button>
        <button type="button" className="gallery-lightbox-nav is-prev" onClick={() => step(-1)} aria-label="Previous image">
          &#8249;
        </button>
        <button type="button" className="gallery-lightbox-nav is-next" onClick={() => step(1)} aria-label="Next image">
          &#8250;
        </button>
      </dialog>
    </section>
  );
}
