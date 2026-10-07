import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import TeklaSection from '@/components/TeklaSection';
import TestimonialsSection from '@/components/ui/testimonial-v2';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useSiteParallax } from '@/hooks/useSiteParallax';
import { useHashNavigation } from '@/hooks/useHashNavigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function App() {
  useSiteParallax();
  useHashNavigation();
  useScrollReveal();

  return (
    <div id="scroll-content">
      <FloatingWhatsApp />
      <div className="scroll-content">
        <HeroSection />
        <SteelWelcomeSection />
        <FeaturedServices />
        <TeklaSection />
        <TestimonialsSection />
        <CareersSection />
        <Footer />
      </div>
    </div>
  );
}
