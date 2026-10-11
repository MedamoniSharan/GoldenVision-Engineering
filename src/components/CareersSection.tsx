import { useState, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '@/data/siteConfig';
import { careerOpenings } from '@/data/siteContent';

const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;
const SUBMIT_FRAME = 'careers-submit-frame';
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

export default function CareersSection() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'too-large'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const resume = (form.elements.namedItem('attachment') as HTMLInputElement | null)?.files?.[0];
    if (resume && resume.size > MAX_RESUME_BYTES) {
      event.preventDefault();
      setStatus('too-large');
      return;
    }
    setStatus('sent');
    window.setTimeout(() => form.reset(), 0);
  };

  return (
    <section className="careers-section" id="careers" data-parallax-section="0.08">
      <div className="container careers-layout">
        <div className="careers-copy">
          <h2 className="careers-title">
            Build your career with <span className="accent">Golden Vision</span>
          </h2>
          <ul className="careers-list">
            {careerOpenings.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>

        <form
          className="careers-form"
          action={FORM_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          target={SUBMIT_FRAME}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New career application - Golden Vision Engineering" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" className="careers-honeypot" tabIndex={-1} autoComplete="off" />

          <label htmlFor="career-name">Name*</label>
          <input id="career-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />

          <label htmlFor="career-email">Email*</label>
          <input
            id="career-email"
            name="email"
            type="email"
            placeholder="Your email address"
            autoComplete="email"
            required
          />

          <label htmlFor="career-phone">Phone*</label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            defaultValue="+1 "
            pattern="\+?[0-9][0-9 \-\(\)]{6,}"
            title="Please enter your phone number, including the country code"
            required
          />

          <label htmlFor="career-resume">Upload Your Resume</label>
          <input
            id="career-resume"
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx"
            className="careers-file"
            onChange={() => setStatus('idle')}
          />

          <label htmlFor="career-message">Message (optional)</label>
          <textarea
            id="career-message"
            name="message"
            rows={4}
            placeholder="Tell us why you are contacting us"
          />

          <button type="submit">Submit Form</button>

          {status === 'sent' && (
            <p className="careers-form-status" role="status">
              Thank you! Your application has been sent to our team.
            </p>
          )}
          {status === 'too-large' && (
            <p className="careers-form-status is-error" role="alert">
              Please upload a resume smaller than 5 MB, or email it to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </form>
        <iframe name={SUBMIT_FRAME} title="Career form submission" className="careers-submit-frame" />
      </div>
    </section>
  );
}
