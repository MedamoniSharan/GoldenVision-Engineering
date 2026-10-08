import { CONTACT_EMAIL } from '@/data/siteConfig';
import { LOGO_SRC } from '@/utils/assets';

export function Logo() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="gv-logo"
      aria-label={`Email Golden Vision Engineering at ${CONTACT_EMAIL}`}
      title={`Email us at ${CONTACT_EMAIL}`}
    >
      <img src={LOGO_SRC} alt="Golden Vision Engineering" />
    </a>
  );
}
