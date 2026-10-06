import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useCounter } from '@/hooks/useCounter';

const copy = {
  eyebrow: 'Where Can We Help You',
  titleLine1: 'Welcome To Golden',
  titleLine2: 'Vision Engineering',
  body: [
    'Golden Vision Engineering is your one-stop destination as well as a service provider that serves its clients globally by providing structural steel detailing, connection design, miscellaneous steel, PEMB design & drafting, BIM integration, estimation, and a lot more.',
    'The company is having diverse knowledge and good hands over the use of a different set of tools and techniques that is required for executing the design and drafting services for any project. Our effective portfolio in providing services in different areas is only possible with the help of our in-house team of engineers who are at their best to deliver 2D Drawings and 3D models of the project that provide to the fabrication as well as the erection method of overall steel structures.',
  ],
} as const;

export default function SteelWelcomeSection() {
  const [isPressed, setIsPressed] = useState(false);
  const [countVisible, setCountVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);
  const years = useCounter(17, 1600, countVisible);

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

  const handleReadMore = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsPressed(true);
    window.setTimeout(() => setIsPressed(false), 180);
    document.querySelector('#featured-services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="steel-section" id="welcome">
      <div className="steel-container">
        <div className="steel-layout">
          <div className="steel-copy">
            <p className="steel-eyebrow">{copy.eyebrow}</p>
            <h2 id="steel-title" className="steel-title">
              <span>{copy.titleLine1}</span>
              <span>{copy.titleLine2}</span>
            </h2>

            <div className="steel-description">
              <p>{copy.body[0]}</p>
              <p>{copy.body[1]}</p>
            </div>

            <a
              className={`steel-button${isPressed ? ' is-pressed' : ''}`}
              href="#featured-services"
              onClick={handleReadMore}
              aria-label="Read more about Golden Vision Engineering"
            >
              <span>Read More</span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />
            </a>
          </div>

          <div className="steel-media">
            <figure className="steel-image steel-image-one">
              <img
                src="https://www.steelconstructiondetailing.com/assets/img/welcome-img-1.jpg"
                alt="Steel construction detailers reviewing a structural project"
                loading="lazy"
              />
            </figure>

            <figure className="steel-image steel-image-two">
              <img
                src="https://www.steelconstructiondetailing.com/assets/img/welcome-img-2.jpg"
                alt="Steel structure detail drawing and construction work"
                loading="lazy"
              />
            </figure>

            <div
              ref={badgeRef}
              className={`experience-badge${countVisible ? ' is-counting' : ''}`}
              aria-label="17 plus years experience"
            >
              <strong>
                {years}
                <span>+</span>
              </strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
