import { useEffect, useRef, useState } from 'react';
import type { StatItem } from '@/types';
import { useCounter } from '@/hooks/useCounter';

function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(stat.value, 2000, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = (
    <>
      <h5 className="timetexts1 mrt50 stat-value">
        <span className="count-number">{count.toLocaleString()}</span>
        {stat.suffix && stat.suffix !== 'Million +' && ` ${stat.suffix}`}
        {stat.suffix === 'Million +' && (
          <>
            <span className="stat-million"> Million</span> +
          </>
        )}
      </h5>
      <h5 className="counter-text mrt50">{stat.label}</h5>
    </>
  );

  return (
    <div
      ref={ref}
      className="col-md-3 pt-2 mt-2 mb60p stat-card"
      style={{
        backgroundImage: `url(${stat.bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {stat.href ? <a href={stat.href}>{content}</a> : content}
    </div>
  );
}

export default function StatsCounter({ stats }: { stats: StatItem[] }) {
  return (
    <div className="container key">
      <div className="key-highlights">
        <div className="row align-items-center justify-content-center home-counter">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-1 pt-2 pb-2 mt-2 mb60p spacer-col" />
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
              <div className="col-md-1 pt-2 pb-2 mt-2 mb60p spacer-col" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
