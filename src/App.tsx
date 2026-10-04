import HeroSection from '@/components/HeroSection';
import FeaturedServices from '@/components/FeaturedServices';
import TeklaSection from '@/components/TeklaSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudies from '@/components/CaseStudies';
import NewsAndBlog from '@/components/NewsAndBlog';
import GlobalMap from '@/components/GlobalMap';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div id="scroll-content">
      <div className="scroll-content">
        <HeroSection />
        <FeaturedServices />
        <TeklaSection />
        <ServicesSection />
        <CaseStudies />
        <NewsAndBlog />
        <GlobalMap />
        <Footer />
      </div>
    </div>
  );
}
