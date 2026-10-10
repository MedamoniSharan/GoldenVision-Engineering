import { useEffect, useRef, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';

const copy = {
  title: 'About Us',
  body: [
    'Golden Vision Engineering is a structural engineering and detailing service provider focused on delivering reliable, precise, and efficient solutions for North American steel construction projects.',
    'Our expertise spans Structural Steel Detailing, Connection Design, Miscellaneous Steel Design, PEMB Design / Detailing, BIM Integration, Estimation, and more. We leverage advanced tools, industry best practices, and proven techniques to support projects from design through fabrication and erection in alignment with applicable AISC, NISD, OSHA, and IBC requirements, with a strong emphasis on accuracy, safety, constructability, and quality.',
    'At Golden Vision Engineering, our goal is simple: to provide dependable engineering and detailing solutions that help our clients execute North American steel projects with confidence.',
  ],
} as const;

export default function SteelWelcomeSection() {
  const [countVisible, setCountVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);
  const years = useCounter(17, 1600, countVisible);
  const projects = useCounter(150, 1800, countVisible);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="steel-section" id="about" data-parallax-section="0.06">
      <div className="steel-container">
        <div className="steel-layout">
          <div className="steel-copy">
            <h2 id="steel-title" className="steel-title">
              <span>{copy.title}</span>
            </h2>

            <div className="steel-description">
              {copy.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="steel-media">
            <figure className="steel-image">
              <img
                src="/assets/images/know-us-steel-model.jpg"
                alt="3D steel model of platforms, walkways, stairs and pipe racks detailed by Golden Vision Engineering"
                loading="lazy"
              />
            </figure>

            <div ref={badgeRef} className="steel-stats">
              <div
                className={`experience-badge${countVisible ? ' is-counting' : ''}`}
                aria-label="17 plus years experience"
              >
                <strong>
                  {years}
                  <span>+</span>
                </strong>
                <span>Years Experience</span>
              </div>
              <div
                className={`experience-badge${countVisible ? ' is-counting' : ''}`}
                aria-label="150 plus projects completed"
              >
                <strong>
                  {projects}
                  <span>+</span>
                </strong>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
