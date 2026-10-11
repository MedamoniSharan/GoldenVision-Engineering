import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL, SITE_TAGLINE } from '@/data/siteConfig';

const QUOTE_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const DEFAULT_PHONE_PREFIX = '+1 ';

type QuoteStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function HeroQuote() {
  const [status, setStatus] = useState<QuoteStatus>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) ?? '').trim();
    if (field('_honey')) return;

    const phone = field('phone');
    const hasPhoneNumber = /\d{4,}/.test(phone.replace(/\s/g, ''));

    setStatus('sending');
    try {
      const response = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Quote request from ${field('name')}${field('company') ? ` (${field('company')})` : ''}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: field('email'),
          Name: field('name'),
          Company: field('company') || '—',
          'Business email': field('email'),
          Phone: hasPhoneNumber ? phone : '—',
          Message: field('message') || '—',
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: string | boolean } | null;
      if (!response.ok || String(result?.success) !== 'true') throw new Error('Quote request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="hero-quote">
      <div className="hero-quote-inner">
        <div className="hero-quote-copy">
          <h1 className="hero-quote-brand">
            <span className="hero-quote-brand-gold">Golden Vision</span>{' '}
            <span className="hero-quote-brand-white">Engineering</span>
          </h1>
          <p className="hero-quote-lead">Your new destination to Steel Detailing services as describing us</p>
          <p className="hero-quote-tagline">“{SITE_TAGLINE}”</p>
        </div>

        <form className="hero-quote-form" onSubmit={handleSubmit}>
          <h2>Tell us about your project</h2>
          <input
            type="text"
            name="_honey"
            className="careers-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <label htmlFor="quote-name">Name</label>
          <input id="quote-name" name="name" type="text" autoComplete="name" required />

          <label htmlFor="quote-company">Company</label>
          <input id="quote-company" name="company" type="text" autoComplete="organization" />

          <label htmlFor="quote-email">Business email</label>
          <input id="quote-email" name="email" type="email" autoComplete="email" required />

          <label htmlFor="quote-phone">Phone</label>
          <input id="quote-phone" name="phone" type="tel" autoComplete="tel" defaultValue={DEFAULT_PHONE_PREFIX} />

          <label htmlFor="quote-message">Message (optional)</label>
          <textarea
            id="quote-message"
            name="message"
            rows={3}
            placeholder="Share a few details about your project to request a quote"
          />

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Get a quote for your project →'}
          </button>

          {status === 'sent' && (
            <p className="hero-quote-status" role="status">
              Thank you! Your quote request has been sent. Our team will get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="hero-quote-status is-error" role="alert">
              Sorry, we couldn’t send your request. Please try again in a moment.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
