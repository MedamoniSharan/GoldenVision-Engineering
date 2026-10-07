import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import TeklaSection from '@/components/TeklaSection';
import ServicesSection from '@/components/ServicesSection';
import ImageCarouselGallery from '@/components/ImageCarouselGallery';
import CareersSection from '@/components/CareersSection';
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
        <ImageCarouselGallery />
        <CareersSection />
        <Footer />
      </div>
    </div>
  );
}
