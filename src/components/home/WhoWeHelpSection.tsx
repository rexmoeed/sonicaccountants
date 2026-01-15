import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';

import businessImg from '@/assets/who-we-help-business.jpg';
import soleTraderImg from '@/assets/who-we-help-soletrader.jpg';
import contractorImg from '@/assets/who-we-help-contractor.jpg';

const checkpoints = [
  'Bookkeeping, tax planning, and financial guidance.',
  'Simple, stress-free accounting services.',
  'Tax efficiency and IR35 support.',
  'From planning to financial growth.',
  'VAT, inventory, & financial management.',
  'CIS compliance and industry-specific advice.',
];

const clients = [
  {
    title: 'Small Business',
    description: 'We love helping small and startup businesses thrive. As your UK-based accountants, we provide full-service support from bookkeeping to tax planning.',
    image: businessImg,
    href: '/who-we-help/companies/smes',
  },
  {
    title: 'Sole Traders',
    description: 'Comprehensive accounting services for sole traders. We take the stress out of your accounting work so you can focus on growing your business.',
    image: soleTraderImg,
    href: '/who-we-help/sole-traders',
  },
  {
    title: 'Specialist Sectors',
    description: 'At Sonic Accountants, we offer tailored accounting solutions for a range of specialist sectors, helping businesses navigate their unique challenges.',
    image: contractorImg,
    href: '/who-we-help/specialities',
  },
];

const WhoWeHelpSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ScrollAnimation direction="left">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-secondary">Who do</span> we help?
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-muted-foreground">
                As UK-based Chartered Accountants, we tailor our accounting services to fit your business needs. Whether you're a startup, established company, or contractor, we've got you covered.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checkpoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-background rounded-[20px] overflow-hidden shadow-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  
                  {/* CTA Button on Image */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Link to={client.href}>
                      <Button variant="hero" size="default">
                        Schedule A Meeting
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {client.description}
                  </p>
                </div>

                {/* Border accent on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-[20px] transition-colors pointer-events-none" />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;