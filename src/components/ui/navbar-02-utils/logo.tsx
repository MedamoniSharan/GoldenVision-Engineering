import { LOGO_SRC } from '@/utils/assets';

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 no-underline">
      <img
        src={LOGO_SRC}
        alt="Golden Vision Engineering"
        className="h-10 w-auto max-w-[150px] object-contain"
      />
    </a>
  );
}
