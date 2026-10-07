import { useEffect } from 'react';

const REVEAL_SELECTORS = [
  '.steel-copy',
  '.steel-media',
  '.featured-services-header',
  '.featured-service-card',
  '.tekla-header',
  '.tekla-visual',
  '.tekla-highlight-card',
  '.tekla-workflow > h3',
  '.tekla-workflow-steps > li',
  '#business .key > h3',
  '#business .key > .services-intro',
  '.stat-card',
  '.standards-section',
  '.industries-we-serve > h3',
  '.industry-tag',
  '.gv-testimonials-head',
  '.gv-testimonials-marquee',
  '.careers-copy > h2',
  '.careers-copy > p',
  '.careers-list > li',
  '.careers-apply',
  '.careers-media',
  '.footer-main > *',
  '.footer-bottom',
].join(', ');

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 5;

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS));

    const siblingIndex = new Map<Element, number>();
    elements.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const index = siblingIndex.get(parent) ?? 0;
      siblingIndex.set(parent, index + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      el.classList.add('reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          // Hidden elements sit toward the edge they enter/leave from, so scrolling up mirrors scrolling down.
          const from = entry.boundingClientRect.top < 0 ? 'above' : 'below';
          if (entry.isIntersecting) {
            if (!el.classList.contains('is-visible') && el.dataset.revealFrom !== from) {
              el.dataset.revealFrom = from;
              void el.offsetWidth;
            }
            el.classList.add('is-visible');
          } else {
            el.dataset.revealFrom = from;
            el.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove('reveal', 'is-visible');
        el.style.removeProperty('--reveal-delay');
        delete el.dataset.revealFrom;
      });
    };
  }, []);
}
