import Header from './Header';
import HeroSlider from './HeroSlider';
import SideContactTab from './SideContactTab';

export default function HeroSection() {
  return (
    <>
      <SideContactTab />
      <Header />
      <header id="top" className="hero-header">
        <HeroSlider />
      </header>
    </>
  );
}
