import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get your business off
              <br />
              <span className="text-secondary">to the best start.</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              We have helped thousands of UK businesses with their accounting needs. We seem to be doing a good job as our clients are always happy to tell us.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTABanner;