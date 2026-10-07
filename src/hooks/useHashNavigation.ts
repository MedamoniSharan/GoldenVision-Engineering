import { useEffect } from 'react';

const GAP = 12;

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (hash === '#' || hash === '#top') {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return false;

  const header = document.querySelector<HTMLElement>('.gv-navbar');
  const offset = (header?.offsetHeight ?? 0) + GAP;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function useHashNavigation() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href') ?? '';
      if (hash !== '#top' && hash !== '#' && !document.getElementById(hash.slice(1))) return;

      event.preventDefault();
      history.pushState(null, '', hash === '#' ? location.pathname : hash);

      // The mobile sheet locks body scroll until its close animation finishes.
      const fromSheet = link.closest('.gv-mobile-sheet');
      window.setTimeout(() => scrollToHash(hash), fromSheet ? 320 : 0);
    };

    const onPopState = () => {
      if (location.hash) scrollToHash(location.hash);
    };

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPopState);

    if (location.hash) {
      window.setTimeout(() => scrollToHash(location.hash, 'auto'), 150);
    }

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);
}
