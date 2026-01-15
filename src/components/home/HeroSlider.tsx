import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import slider1 from '@/assets/slider-1.jpeg';
import slider2 from '@/assets/slider-2.jpg';
import slider3 from '@/assets/slider-3.jpg';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: slider1,
    title: 'Professional Accounting',
    subtitle: 'for Your Business Growth',
    description: 'Expert financial services tailored to help UK businesses thrive with ICAEW-registered expertise.',
  },
  {
    image: slider2,
    title: 'Tax-Efficient Solutions',
    subtitle: 'that Save You Money',
    description: 'Maximize your tax efficiency with our comprehensive tax planning and compliance services.',
  },
  {
    image: slider3,
    title: 'Your Trusted Partner',
    subtitle: 'in Financial Success',
    description: 'From startups to established companies, we provide dedicated support for your accounting needs.',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sonic-navy/90 via-sonic-navy/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <h1 
                className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 ${
                  index === currentSlide ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                {slide.title}
                <br />
                <span className="text-accent">{slide.subtitle}</span>
              </h1>
              <p 
                className={`text-primary-foreground/90 text-lg md:text-xl mb-8 ${
                  index === currentSlide ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                {slide.description}
              </p>
              <div 
                className={`flex flex-wrap gap-4 ${
                  index === currentSlide ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <Link to="/pricing">
                  <Button variant="hero" size="lg">
                    Our Prices
                  </Button>
                </Link>
                <Link to="/book-meeting">
                  <Button variant="heroOutline" size="lg">
                    Request a Callback
                  </Button>
                </Link>
                <a href="https://wa.me/442081786228" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroSecondary" size="lg">
                    Chat with Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary-foreground/20 hover:bg-primary flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary w-8' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
