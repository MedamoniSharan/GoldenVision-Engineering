import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
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
          <CareersSection />
          <Footer />
        </div>
      </div>
      <SocialLinks />
    </>
  );
}
