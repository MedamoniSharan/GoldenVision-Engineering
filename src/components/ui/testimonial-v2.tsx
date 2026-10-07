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

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { type: 'spring', stiffness: 400, damping: 17 },
                  }}
                  className="gv-testimonial-card group w-full max-w-xs cursor-default select-none rounded-3xl border border-neutral-200 bg-white p-10 shadow-lg shadow-black/5"
                >
                  <blockquote className="m-0 p-0">
                    <p className="m-0 leading-relaxed text-neutral-600">{text}</p>
                    <div className="gv-testimonial-person mt-6 flex items-center gap-3">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Portrait of ${name}`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <cite className="not-italic font-semibold leading-5 tracking-tight text-neutral-900">
                          {name}
                        </cite>
                        <span className="mt-0.5 text-sm leading-5 tracking-tight text-neutral-500">
                          {role}
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="gv-testimonials relative overflow-hidden bg-transparent py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container z-10 mx-auto px-4"
      >
        <div className="mx-auto mb-16 flex max-w-[540px] flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="gv-testimonial-badge">Testimonials</div>
          </div>

          <h2
            id="testimonials-heading"
            className="mt-6 text-center text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl"
          >
            What our clients say
          </h2>
          <p className="mt-5 max-w-sm text-center text-lg leading-relaxed text-neutral-500">
            Fabricators, contractors, and owners on Tekla detailing, connections, and BIM from
            Golden Vision Engineering.
          </p>
        </div>

        <div
          className="gv-testimonials-marquee mt-10"
          role="region"
          aria-label="Scrolling testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="gv-testimonial-col-md"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="gv-testimonial-col-lg"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
