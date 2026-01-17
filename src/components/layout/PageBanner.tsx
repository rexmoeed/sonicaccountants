import React from 'react';
import slider1 from '@/assets/slider-1.jpeg';
import slider2 from '@/assets/slider-2.jpg';
import slider3 from '@/assets/slider-3.jpg';

const heroImages = {
  accounts: slider1,
  tax: slider2,
  bookkeeping: slider3,
  advisory: slider1,
  payroll: slider2,
  corporate: slider3,
  all: slider1
};

interface PageBannerProps {
  title: string;
  subtitle: string;
  description: string;
  imageVariant?: keyof typeof heroImages;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  description,
  imageVariant = 'accounts'
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImages[imageVariant]}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Decorative */}
      <div className="decorative-circle-yellow w-20 h-20 top-10 right-[10%] opacity-30" />
      <div className="decorative-circle-red w-16 h-16 bottom-10 left-[15%] opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold mb-2">{subtitle}</p>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>

          <p className="text-white/80 text-base md:text-lg">
            {description}
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
