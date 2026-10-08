import { useEffect } from 'react';

const MEDIA =
  '.steel-image img, .highlight-image img';

export function useSiteParallax() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    document.documentElement.classList.add('has-parallax');

    let frame = 0;

    const tick = () => {
      const vh = window.innerHeight;

      document.querySelectorAll<HTMLElement>(MEDIA).forEach((el) => {
        const host = el.parentElement ?? el;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) return;
        const delta = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${delta * 48}px, 0) scale(1.14)`;
      });

      document.querySelectorAll<HTMLElement>('[data-parallax-section]').forEach((el) => {
        const speed = Number(el.dataset.parallaxSection || 0.08);
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const delta = (rect.top - vh * 0.2) * speed;
        el.style.backgroundPosition = `center ${delta}px`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      document.documentElement.classList.remove('has-parallax');
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
}
