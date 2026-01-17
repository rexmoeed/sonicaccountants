import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Calculator, Receipt, Users, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import PageBanner from '@/components/layout/PageBanner';

const services = [
  {
    icon: FileText,
    title: 'Accounts',
    description: 'Year-end statutory accounts, management accounts, and fixed asset register maintenance for full compliance.',
    href: '/services/accounts',
    subservices: ['Statutory Accounts', 'Management Accounts', 'Fixed Asset Register'],
  },
  {
    icon: Calculator,
    title: 'Bookkeeping',
    description: 'Cloud-based bookkeeping, bank reconciliations, and ledger management to keep your finances organized.',
    href: '/services/bookkeeping',
    subservices: ['Bookkeeping Services', 'Bank Reconciliations', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    icon: Receipt,
    title: 'Tax',
    description: 'Corporation tax, VAT registration & returns, self-assessment, and capital gains tax support.',
    href: '/services/tax',
    subservices: ['Corporation Tax', 'VAT Registration', 'Self Assessment', 'Capital Gains Tax'],
  },
  {
    icon: Users,
    title: 'Payroll',
    description: 'PAYE, NIC, auto-enrolment pension setup, and P45/P60/P11D filing for stress-free payroll.',
    href: '/services/payroll',
    subservices: ['PAYE & NIC', 'Pension Setup', 'P45/P60/P11D Filing'],
  },
  {
    icon: Building2,
    title: 'Corporate Services',
    description: 'Company formation, registered office address, and company secretarial services.',
    href: '/services/corporate',
    subservices: ['Company Formation', 'Registered Office', 'Company Secretarial'],
  },
  {
    icon: TrendingUp,
    title: 'Advisory & Consulting',
    description: 'Fractional CFO services, budgeting & financial planning, and credit control guidance.',
    href: '/services/advisory',
    subservices: ['Fractional CFO', 'Budgeting & Planning', 'Credit Control'],
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
          <PageBanner
  title="Our Services"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="glass rounded-[20px] p-8 hover-lift group border border-border"
                >
                  <div className="w-16 h-16 rounded-[20px] bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.subservices.map((sub, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {sub}
                      </li>
                    ))}
                  </ul>

                  <Link to={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your accounting needs and find the perfect solution for your business.
            </p>
            <Link to="/book-meeting">
              <Button variant="hero" size="lg">
                Schedule A Meeting
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
