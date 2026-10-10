import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL, SITE_TAGLINE } from '@/data/siteConfig';

export default function HeroQuote() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? '').trim();

    const subject = `Quote request from ${field('name')}${field('company') ? ` (${field('company')})` : ''}`;
    const body = [
      `Name: ${field('name')}`,
      `Company: ${field('company')}`,
      `Business email: ${field('email')}`,
      `Phone: ${field('phone')}`,
      '',
      'I would like a quote for my project.',
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="hero-quote">
      <div className="hero-quote-inner">
        <div className="hero-quote-copy">
          <h1 className="hero-quote-brand">
            <span className="hero-quote-brand-gold">Golden Vision</span>{' '}
            <span className="hero-quote-brand-white">Engineering</span>
          </h1>
          <p className="hero-quote-lead">
            Your Trusted Partner for Structural Steel Detailing and Engineering Services
          </p>
          <p className="hero-quote-tagline">“{SITE_TAGLINE}”</p>
        </div>

        <form className="hero-quote-form" onSubmit={handleSubmit}>
          <h2>Tell us about your project</h2>
          <p className="hero-quote-form-sub">
            Share a few details about your project to request a quote
          </p>

          <label htmlFor="quote-name">Name</label>
          <input id="quote-name" name="name" type="text" autoComplete="name" required />

          <label htmlFor="quote-company">Company</label>
          <input id="quote-company" name="company" type="text" autoComplete="organization" />

          <label htmlFor="quote-email">Business email</label>
          <input id="quote-email" name="email" type="email" autoComplete="email" required />

          <label htmlFor="quote-phone">Phone</label>
          <input id="quote-phone" name="phone" type="tel" autoComplete="tel" />

          <button type="submit">Get a quote for your project →</button>

          {sent && (
            <p className="hero-quote-sent" role="status">
              Your email app should open with the details filled in. If it doesn’t, write to us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
