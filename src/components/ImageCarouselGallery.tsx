import { WorksWheel } from '@/components/ui/works-wheel';
import { portfolioProjects } from '@/data/siteContent';

const works = portfolioProjects.map((project) => ({
  title: project.title,
  image: project.image,
  href: '#services',
}));

export default function ImageCarouselGallery() {
  return (
    <section className="image-carousel" id="portfolio" aria-label="Project portfolio">
      <WorksWheel items={works} label="Portfolio" action="View" />
    </section>
  );
}
