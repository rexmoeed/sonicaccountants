import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';

const plans = [
  {
    name: 'Starter',
    price: '75',
    description: 'Ideal for sole traders, freelancers, or micro-businesses with simple accounting needs.',
    features: [
      'Cloud bookkeeping & VAT',
      'Self-Assessment integration',
      'Optional payroll (up to 5 employees)',
      'Email support',
      'Basic profit & cashflow reports',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '100',
    description: 'Perfect for growing businesses with VAT, payroll, and deeper reporting needs.',
    features: [
      'Full cloud accounting (Xero / QuickBooks)',
      'Payroll for 10-20 employees',
      'Self-Assessment (TaxCalc / GoSimpleTax)',
      'VAT summaries & submissions',
      'Profit, balance sheet & cashflow reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '150',
    description: 'Designed for established businesses with complex accounting and tax requirements.',
    features: [
      'Advanced accounting (Xero Premium / Sage)',
      'Payroll for 20+ employees',
      'Corporate tax & director Self-Assessment',
      'Dedicated account manager',
      'Custom reports & cashflow forecasting',
    ],
    popular: false,
  },
];

const PricingPreview: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Simple, Transparent Pricing
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground">
              Choose a plan that fits your business needs. All plans include HMRC compliance and dedicated support.
            </p>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-background rounded-[20px] p-8 shadow-lg h-full ${
                  plan.popular ? 'border-2 border-primary' : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground">from</span>
                    <span className="font-heading text-4xl font-bold text-foreground">£{plan.price}</span>
                    <span className="text-muted-foreground">+ VAT/mo</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm text-center mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/book-meeting" className="block">
                  <Button 
                    variant={plan.popular ? 'hero' : 'outline'} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={0.3}>
          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button variant="secondary" size="lg">
                View Full Pricing Details
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingPreview;