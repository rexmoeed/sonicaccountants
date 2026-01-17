import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, User, Wrench, Sparkles, ArrowRight, Check } from 'lucide-react';

import businessImg from '@/assets/who-we-help-business.jpg';
import soleTraderImg from '@/assets/who-we-help-soletrader.jpg';
import contractorImg from '@/assets/who-we-help-contractor.jpg';
import PageBanner from '@/components/layout/PageBanner';

const clientTypes = [
  {
    icon: Building2,
    title: 'Companies',
    description: 'We help UK companies manage their bookkeeping, accounting, and tax obligations with accuracy and efficiency.',
    image: businessImg,
    href: '/who-we-help/companies',
    features: ['Limited Companies', 'SMEs', 'StartUps', 'Holding Companies'],
  },
  {
    icon: User,
    title: 'Sole Traders & Partnerships',
    description: 'We support sole traders and partnerships with day-to-day bookkeeping, tax planning, and annual filings.',
    image: soleTraderImg,
    href: '/who-we-help/sole-traders-partnerships',
    features: ['Sole Traders', 'Partnerships', 'Micro Businesses'],
  },
  {
    icon: Wrench,
    title: 'Contractors',
    description: 'We assist contractors with bookkeeping, self-assessment tax returns, and expenses, offering IR35 support.',
    image: contractorImg,
    href: '/who-we-help/contractors',
    features: ['Contractors', 'IR35 Support', 'Construction (CIS)'],
  },
];

const specialities = [
  { label: 'E-commerce', href: '/who-we-help/specialities/ecommerce' },
  { label: 'Retail Stores', href: '/who-we-help/specialities/retail' },
  { label: 'Restaurants & Cafés', href: '/who-we-help/specialities/restaurants' },
  { label: 'Real Estate', href: '/who-we-help/specialities' },
  { label: 'Professional Services', href: '/who-we-help/specialities' },
  { label: 'Healthcare', href: '/who-we-help/specialities' },
  { label: 'Technology & IT', href: '/who-we-help/specialities' },
  { label: 'Tradespeople', href: '/who-we-help/specialities' },
  { label: 'Logistics & Transport', href: '/who-we-help/specialities' },
  { label: 'Nonprofits & Charities', href: '/who-we-help/specialities' },
];


const WhoWeHelp: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
          <PageBanner
  title="Our Client Base"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>

        {/* Client Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {clientTypes.map((client, index) => (
                <div key={index} className="glass rounded-[20px] overflow-hidden hover-lift border border-border">
                  <div className="relative h-48">
                    <img src={client.image} alt={client.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sonic-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-[20px] bg-primary flex items-center justify-center">
                        <client.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {client.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {client.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {client.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={client.href}>
                      <Button variant="hero" className="w-full">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="w-16 h-16 rounded-[20px] bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industry Specialities
              </h2>
              <p className="text-muted-foreground">
                We offer tailored accounting solutions for a range of specialist sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specialities.map((specialty, index) => (
                <Link
                  key={index}
                  to={specialty.href}
                  className="glass rounded-[20px] p-4 text-center hover:border-primary border border-transparent transition-all hover-lift"
                >
                  <span className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {specialty.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Get in touch to discuss your specific needs.
            </p>
            <Link to="/book-meeting">
              <Button variant="hero" size="lg">
                Schedule A Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeHelp;
