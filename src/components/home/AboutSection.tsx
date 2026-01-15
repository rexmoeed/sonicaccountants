import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ScrollAnimation';
import aboutTeam from '@/assets/about-team.jpg';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="decorative-circle-red w-6 h-6 top-20 left-[10%] opacity-80" />
      <div className="decorative-circle-yellow w-8 h-8 top-40 right-[15%] opacity-80" />
      <div className="decorative-circle-blue w-4 h-4 bottom-32 left-[20%] opacity-80" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <ScrollAnimation direction="left">
            <div className="relative">
              {/* Main Image with Border */}
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-secondary rounded-[20px] opacity-50" />
                <img
                  src={aboutTeam}
                  alt="Sonic Accountants Team"
                  className="relative rounded-[20px] shadow-xl w-full"
                />
                {/* Decorative accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-[20px] -z-10" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-[20px] shadow-xl border border-border glass">
                <div className="text-center">
                  <span className="block font-heading font-bold text-2xl text-primary">ICAEW</span>
                  <span className="text-sm text-muted-foreground">Registered</span>
                </div>
              </div>

              {/* Floating circles */}
              <div className="decorative-circle-red w-4 h-4 -top-4 right-20" />
              <div className="decorative-circle-yellow w-5 h-5 top-20 -right-8" />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation direction="right">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                UK-Based Accountants,{' '}
                <span className="text-secondary">here to help your business grow</span>
              </h2>
              <div className="section-divider mb-6" />

              <p className="text-muted-foreground mb-6">
                At Sonic Accountants, we're more than just number-crunchers — we're ICAEW-registered accountants committed to helping your business thrive. Whether you're a startup, freelancer, or established company, we blend traditional expertise with modern technology to streamline your finances and maximise tax efficiency.
              </p>

              <p className="text-muted-foreground mb-8">
                You'll be supported by a dedicated, fully qualified accountant who understands your goals and works closely with you to spot issues early, automate reporting, and run regular tax reviews. Our advice is practical, proactive, and focused on helping you save money and grow with confidence.
              </p>

              <Link to="/about">
                <Button variant="hero" size="lg">
                  More About Us
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;