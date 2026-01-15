import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Calculator, Receipt, Users, Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';

const services = [
  {
    icon: FileText,
    title: 'Accounts',
    description: 'Year-end statutory accounts, management accounts, and fixed asset register maintenance for full compliance.',
    href: '/services',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Calculator,
    title: 'Bookkeeping',
    description: 'Cloud-based bookkeeping, bank reconciliations, and ledger management to keep your finances organized.',
    href: '/services',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Receipt,
    title: 'Tax',
    description: 'Corporation tax, VAT registration & returns, self-assessment, and capital gains tax support.',
    href: '/services',
    color: 'bg-accent/20 text-accent-foreground',
  },
  {
    icon: Users,
    title: 'Payroll',
    description: 'PAYE, NIC, auto-enrolment pension setup, and P45/P60/P11D filing for stress-free payroll.',
    href: '/services',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description: 'Company formation, registered office address, and company secretarial services.',
    href: '/services',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Advisory & Consulting',
    description: 'Fractional CFO services, budgeting & financial planning, and credit control guidance.',
    href: '/services',
    color: 'bg-accent/20 text-accent-foreground',
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Financial Services
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground">
              From day-to-day bookkeeping to strategic advisory, we provide end-to-end financial services to help your business succeed.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Link 
                to={service.href}
                className="group block"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background border border-border rounded-[20px] p-6 hover:border-primary/50 transition-all h-full glass hover:shadow-lg"
                >
                  <div className={`w-14 h-14 rounded-[20px] ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesOverview;