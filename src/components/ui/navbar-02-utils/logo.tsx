import { LOGO_SRC } from '@/utils/assets';

export function Logo() {
  return (
    <a href="#top" className="gv-logo" aria-label="Golden Vision Engineering">
      <img src={LOGO_SRC} alt="Golden Vision Engineering" />
    </a>
  );
}
