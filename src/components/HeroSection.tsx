import Header from './Header';
import HeroSlider from './HeroSlider';
import ClientLogos from './ClientLogos';
import SideContactTab from './SideContactTab';

export default function HeroSection() {
  return (
    <>
      <SideContactTab />
      <header id="top" className="hero-header">
        <Header />
        <HeroSlider />
        <ClientLogos />
      </header>
    </>
  );
}
