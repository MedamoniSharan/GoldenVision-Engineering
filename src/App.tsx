import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import TeklaSection from '@/components/TeklaSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudies from '@/components/CaseStudies';
import ImageCarouselGallery from '@/components/ImageCarouselGallery';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div id="scroll-content">
      <div className="scroll-content">
        <HeroSection />
        <SteelWelcomeSection />
        <FeaturedServices />
        <TeklaSection />
        <ServicesSection />
        <CaseStudies />
        <ImageCarouselGallery />
        <Footer />
      </div>
    </div>
  );
}
