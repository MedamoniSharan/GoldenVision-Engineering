import Header from './Header';
import HeroQuote from './HeroQuote';

export default function HeroSection() {
  return (
    <>
      <Header />
      <header id="top" className="hero-header">
        <HeroQuote />
      </header>
    </>
  );
}
