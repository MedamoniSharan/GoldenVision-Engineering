import { useEffect, useRef, useState } from 'react';

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function useCounter(target: number, duration = 2000, start = false): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = Math.round(easeOutCubic(progress) * target);
      setCount(progress >= 1 ? target : next);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return count;
}
