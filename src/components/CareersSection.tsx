import { CONTACT_EMAIL } from '@/data/siteConfig';
import { careerOpenings } from '@/data/siteContent';

export default function CareersSection() {
  return (
    <section className="careers-section" id="careers" data-parallax-section="0.08">
      <div className="container careers-layout">
        <div className="careers-copy">
          <h2 className="fonth3 section-heading-lg">
            Build With <span className="accent">Golden Vision</span>
          </h2>
          <p>
            We hire Tekla-fluent detailers, connection engineers, and BIM coordinators who care
            about fabrication-ready work. Join a team that delivers structural steel, miscellaneous
            metals, PEMB, and estimation packages from Novi, Michigan to clients worldwide.
          </p>
          <ul className="careers-list">
            {careerOpenings.map((role) => (
              <li key={role.title}>
                <h3>{role.title}</h3>
                <p className="careers-location">{role.location}</p>
                <p>{role.summary}</p>
              </li>
            ))}
          </ul>
          <a className="careers-apply" href={`mailto:${CONTACT_EMAIL}?subject=Career inquiry`}>
            Apply at {CONTACT_EMAIL}
          </a>
        </div>
        <figure className="careers-media">
          <img
            src="/assets/images/Mechanical-Engineering-6.png"
            alt="Engineers coordinating a steel and mechanical plant model"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
