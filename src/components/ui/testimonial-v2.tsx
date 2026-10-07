import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Golden Vision turned around a tight-bid steel package with clean Tekla models and shop drawings our shop could fabricate the first time.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Briana Patton',
    role: 'Fabrication Manager',
  },
  {
    text: 'Connection design and detailing landed in one coordinated model. That cut RFIs and kept our erection crew on schedule.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Bilal Ahmed',
    role: 'Project Engineer',
  },
  {
    text: 'Their team stayed with us through issuance and revisions. Support was fast, and the drawings stayed consistent.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Saman Malik',
    role: 'Detailing Coordinator',
  },
  {
    text: 'We needed PEMB and miscellaneous metals in the same package. Golden Vision delivered both without clashes.',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Omar Raza',
    role: 'General Contractor',
  },
  {
    text: 'Tekla BIM coordination with our architect saved weeks. Clash reports came back clean before we released steel.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Zainab Hussain',
    role: 'Project Manager',
  },
  {
    text: 'Quantities from the model matched what we bought. Their estimation support made our bid much more confident.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Aliza Khan',
    role: 'Estimating Lead',
  },
  {
    text: 'Stairs, rails, and platforms were detailed as carefully as the main frame. Field fit-up was straightforward.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Farhan Siddiqui',
    role: 'Superintendent',
  },
  {
    text: 'They understood AISC practice and our shop standards. The package felt like it came from an in-house team.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Sana Sheikh',
    role: 'Steel Detailer',
  },
  {
    text: 'From Novi to our jobsite, communication was clear. We will keep sending structural steel work their way.',
    image:
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=160&h=160&q=80',
    name: 'Hassan Ali',
    role: 'Owner’s Representative',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.6 6C6.5 7.4 4.5 10 4.5 13.6V18h6v-6H7.6c.2-1.9 1.3-3.3 3.2-4.2L9.6 6Zm9 0c-3.1 1.4-5.1 4-5.1 7.6V18h6v-6h-2.9c.2-1.9 1.3-3.3 3.2-4.2L18.6 6Z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="gv-testimonial-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z"
          />
        </svg>
      ))}
    </div>
  );
}

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`gv-testimonial-col ${props.className ?? ''}`.trim()}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="gv-testimonial-list"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <li
                key={`${index}-${i}`}
                aria-hidden={index === 1}
                className="gv-testimonial-card"
              >
                <div className="gv-testimonial-top">
                  <span className="gv-testimonial-quote">
                    <QuoteIcon />
                  </span>
                  <Stars />
                </div>
                <p className="gv-testimonial-text">{text}</p>
                <div className="gv-testimonial-person">
                  <img width={44} height={44} src={image} alt={`Portrait of ${name}`} />
                  <div>
                    <strong className="gv-testimonial-name">{name}</strong>
                    <span className="gv-testimonial-role">{role}</span>
                  </div>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="gv-testimonials">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="container"
      >
        <div className="gv-testimonials-head">
          <span className="gv-testimonial-badge">Testimonials</span>
          <h2 id="testimonials-heading">What our clients say</h2>
          <p>
            Fabricators, contractors, and owners on Tekla detailing, connections, and BIM from
            Golden Vision Engineering.
          </p>
        </div>

        <div className="gv-testimonials-marquee" role="region" aria-label="Scrolling testimonials">
          <TestimonialsColumn testimonials={firstColumn} duration={30} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="gv-testimonial-col-md"
            duration={36}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="gv-testimonial-col-lg"
            duration={33}
          />
        </div>
      </motion.div>
    </section>
  );
}
