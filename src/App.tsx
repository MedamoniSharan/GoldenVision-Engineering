import HeroSection from '@/components/HeroSection';
import SteelWelcomeSection from '@/components/SteelWelcomeSection';
import FeaturedServices from '@/components/FeaturedServices';
import TeklaSection from '@/components/TeklaSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/ui/testimonial-v2';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useSiteParallax } from '@/hooks/useSiteParallax';

export default function App() {
  useSiteParallax();

  return (
    <div id="scroll-content">
      <FloatingWhatsApp />
      <div className="scroll-content">
        <HeroSection />
        <SteelWelcomeSection />
        <FeaturedServices />
        <TeklaSection />
        <ServicesSection />
        <TestimonialsSection />
        <CareersSection />
        <Footer />
      </div>
    </div>
  );
}
