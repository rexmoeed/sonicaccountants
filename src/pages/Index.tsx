import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import CTABanner from '@/components/home/CTABanner';
import WhoWeHelpSection from '@/components/home/WhoWeHelpSection';
import PricingPreview from '@/components/home/PricingPreview';
import SoftwareLogos from '@/components/home/SoftwareLogos';
import StatsCounter from '@/components/StatsCounter';
import Preloader from '@/components/Preloader';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Header />
      
      <main>
        <HeroSlider />
        <AboutSection />
        <StatsCounter />
        <CTABanner />
        <ServicesOverview />
        <SoftwareLogos />
        <WhoWeHelpSection />
        <PricingPreview />
      </main>

      <Footer />
    </div>
  );
};

export default Index;