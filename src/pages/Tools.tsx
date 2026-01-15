import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const tools = [
  { name: 'Xero', description: 'Cloud accounting for small businesses', category: 'Accounting' },
  { name: 'QuickBooks', description: 'Full-featured business accounting', category: 'Accounting' },
  { name: 'FreeAgent', description: 'Simple accounting for freelancers', category: 'Accounting' },
  { name: 'Sage', description: 'Enterprise accounting solutions', category: 'Accounting' },
  { name: 'Dext', description: 'Receipt capture and expense management', category: 'Expenses' },
  { name: 'GoSimpleTax', description: 'Self-assessment tax software', category: 'Tax' },
  { name: 'TaxCalc', description: 'Professional tax preparation', category: 'Tax' },
  { name: 'BrightPay', description: 'Payroll software', category: 'Payroll' },
  { name: 'Staffology', description: 'Cloud payroll for businesses', category: 'Payroll' },
];

const Tools: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-sonic-navy py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Tools & <span className="text-accent">Software</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                We use the best cloud-based tools to deliver accurate, efficient accounting services.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tools.map((tool, index) => (
                <div key={index} className="glass rounded-[20px] p-6 border border-border hover-lift">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{tool.category}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Not sure which software is right for you? We'll help you choose.
              </p>
              <Link to="/book-meeting">
                <Button variant="hero" size="lg">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
