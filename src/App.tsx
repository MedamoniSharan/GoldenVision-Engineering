import HeroSection from '@/components/HeroSection';
import ServiceTabs from '@/components/ServiceTabs';
import CaseStudies from '@/components/CaseStudies';
import NewsAndBlog from '@/components/NewsAndBlog';
import GlobalMap from '@/components/GlobalMap';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div id="scroll-content">
      <div className="scroll-content">
        <HeroSection />
        <ServiceTabs />
        <CaseStudies />
        <NewsAndBlog />
        <GlobalMap />
        <Footer />
      </div>
    </div>
  );
}
