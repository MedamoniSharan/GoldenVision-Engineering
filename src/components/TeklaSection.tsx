import { teklaHighlights, teklaTagline, teklaWorkflow } from '@/data/teklaCapabilities';
import { remoteAsset } from '@/utils/assets';

export default function TeklaSection() {
  return (
    <section className="tekla-section" id="tekla-software">
      <div className="container">
        <div className="tekla-header">
          <span className="tekla-badge">Tekla Software</span>
          <h2 className="fonth3 tekla-title">
            Intelligent Detailing with <span className="accent">Tekla Structures</span>
          </h2>
          <p className="tekla-tagline">{teklaTagline}</p>
        </div>

        <div className="tekla-grid">
          <div className="tekla-visual">
            <img
              src={remoteAsset('assets/images/Steel-Detailing.png')}
              alt="Tekla Structures steel detailing"
              loading="lazy"
            />
            <div className="tekla-visual-overlay">
              <p>Model · Detail · Fabricate</p>
            </div>
          </div>

          <div className="tekla-highlights">
            {teklaHighlights.map((item) => (
              <article key={item.title} className="tekla-highlight-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="tekla-workflow">
          <h3 className="fonth3 section-heading">
            Our <span className="accent">Tekla Workflow</span>
          </h3>
          <ol className="tekla-workflow-steps">
            {teklaWorkflow.map((step, index) => (
              <li key={step}>
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
