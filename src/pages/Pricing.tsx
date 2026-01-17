import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import PageBanner from '@/components/layout/PageBanner';

const plans = [
  {
    name: 'Starter',
    price: '75',
    description: 'Ideal for sole traders, freelancers, or micro-businesses (1–5 employees) with simple accounting needs.',
    features: [
      'Cloud accounting software (FreeAgent / Xero Starter)',
      'Record income & expenses',
      'MTD-compliant VAT filing (if registered)',
      'Simple invoice generation',
      'Integration with Self Assessment (GoSimpleTax)',
      'Optional payroll (up to 5 employees)',
      'Email support',
      'Basic profit/loss & cashflow reports',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '100',
    description: 'Perfect for small businesses with multiple employees, VAT obligations, and moderate accounting needs.',
    features: [
      'Full cloud accounting (Xero / QuickBooks Plus)',
      'Bank feeds & reconciliation',
      'VAT return automation (MTD-ready)',
      'Multi-currency support',
      'Automated invoicing & reminders',
      'Payroll for 10-20 employees',
      'Self-Assessment (TaxCalc / GoSimpleTax)',
      'Corporate tax support for directors',
      'Profit, balance sheet & cashflow reports',
      'Email + chat support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '150',
    description: 'Designed for medium-sized businesses, accounting practices, or enterprises with complex requirements.',
    features: [
      'Full-featured cloud accounting (Xero Premium / Sage)',
      'Multiple company support',
      'Advanced reporting, dashboards & analytics',
      'Integration with CRM, e-commerce, banking',
      'Automated VAT filing & multi-country VAT',
      'Payroll for 20+ employees',
      'Full payroll automation: RTI, pensions, benefits',
      'Corporate tax & Self-Assessment for directors',
      'Dedicated account manager',
      'Custom reporting & cashflow forecasting',
      'Priority support & training',
    ],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
         <PageBanner
  title="Our Pricing"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-background rounded-2xl p-8 shadow-lg hover-lift ${
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
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-muted-foreground">Starting from</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-heading text-5xl font-bold text-foreground">£{plan.price}</span>
                      <span className="text-muted-foreground">+ VAT/month</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm text-center mb-6 min-h-[60px]">
                    {plan.description}
                  </p>

                  <Link to="/book-meeting" className="block mb-8">
                    <Button 
                      variant={plan.popular ? 'hero' : 'outline'} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-6">
                Need a custom solution? Contact us for a tailored quote based on your specific business requirements.
              </p>
              <Link to="/book-meeting">
                <Button variant="secondary" size="lg">
                  Get Custom Quote
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

export default Pricing;
