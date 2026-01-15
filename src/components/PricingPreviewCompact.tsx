import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingPreviewCompact: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '£75',
      period: '/month',
      features: ['Bookkeeping', 'VAT Returns', 'Self Assessment'],
    },
    {
      name: 'Growth',
      price: '£100',
      period: '/month',
      features: ['All Basic features', 'Management Accounts', 'Payroll'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '£150',
      period: '/month',
      features: ['All Standard features', 'CFO Services', 'Tax Planning'],
    },
  ];

  return (
    <div className="glass rounded-[20px] p-6 border border-border">
      <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Pricing Plans</h3>
      <div className="grid gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-4 border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground">{plan.name}</span>
              <span className="text-primary font-bold">
                {plan.price}
                <span className="text-muted-foreground text-sm font-normal">{plan.period}</span>
              </span>
            </div>
            <ul className="space-y-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3 h-3 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to="/pricing" className="block mt-4">
        <Button variant="outline" className="w-full">
          View Full Pricing
        </Button>
      </Link>
    </div>
  );
};

export default PricingPreviewCompact;
