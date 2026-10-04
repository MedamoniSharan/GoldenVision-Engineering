const REMOTE_BASE = 'https://www.moldtekengineering.com';

export const LOGO_SRC = '/assets/images/golden-vision-logo.png';

/** Resolve asset paths — local public assets first, fallback to live site CDN */
export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized;
}

export function remoteAsset(path: string): string {
  const normalized = path.replace(/^\.\//, '').replace(/^\//, '');
  return `${REMOTE_BASE}/${normalized}`;
}
