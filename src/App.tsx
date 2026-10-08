import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import GallerySection from '@/components/GallerySection';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';
import { useSiteParallax } from '@/hooks/useSiteParallax';
import { useHashNavigation } from '@/hooks/useHashNavigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useSiteParallax();
  useHashNavigation();
  useScrollReveal();

  return (
    <>
      <div id="scroll-content">
        <div className="scroll-content">
          <HeroSection />
          <SteelWelcomeSection />
          <FeaturedServices />
          <GallerySection />
          <CareersSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
