import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';
import ScrollToTop from '@/components/ScrollToTop';
import ContactForm from '@/components/ContactForm';
import PricingPreviewCompact from '@/components/PricingPreviewCompact';
import { motion } from 'framer-motion';
import sheetBalance from '@/assets/sheet-balance.jpg';
import sheetProfitLoss from '@/assets/sheet-profit-loss.jpg';
import sheetBudgeting from '@/assets/sheet-budgeting.jpg';

interface ServiceCategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  services: { title: string; description: string; href: string }[];
  showFinancialImages?: boolean;
}

const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ title, subtitle, description, services, showFinancialImages = true }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-accent font-semibold mb-2">{subtitle}</p>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  {title}
                </h1>
                <p className="text-primary-foreground/80 text-base md:text-lg">
                  {description}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {services.map((service, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1}>
                      <Link to={service.href} className="group block h-full">
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="glass rounded-[20px] p-6 h-full border border-border hover:border-primary/50 transition-all"
                        >
                          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {service.description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </span>
                        </motion.div>
                      </Link>
                    </ScrollAnimation>
                  ))}
                </div>

                {/* Financial Images */}
                {showFinancialImages && (
                  <ScrollAnimation direction="up">
                    <div className="space-y-4">
                      <h3 className="font-heading text-lg font-semibold text-foreground">Sample Financial Reports</h3>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="glass rounded-[20px] p-4 border border-border hover:border-primary/30 transition-all group">
                          <div className="overflow-hidden rounded-lg mb-3 bg-white">
                            <img src={sheetBalance} alt="Balance Sheet" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Balance Sheet</h4>
                          <p className="text-muted-foreground text-xs">Assets, liabilities & equity</p>
                        </div>
                        <div className="glass rounded-[20px] p-4 border border-border hover:border-primary/30 transition-all group">
                          <div className="overflow-hidden rounded-lg mb-3 bg-white">
                            <img src={sheetProfitLoss} alt="Profit & Loss" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Profit & Loss</h4>
                          <p className="text-muted-foreground text-xs">Income & expenses summary</p>
                        </div>
                        <div className="glass rounded-[20px] p-4 border border-border hover:border-primary/30 transition-all group">
                          <div className="overflow-hidden rounded-lg mb-3 bg-white">
                            <img src={sheetBudgeting} alt="Budget & Forecast" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Budget & Forecast</h4>
                          <p className="text-muted-foreground text-xs">Financial planning</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}

                <ScrollAnimation delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-meeting">
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Schedule a Consultation
                      </Button>
                    </Link>
                    <Link to="/pricing">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <ContactForm compact title="Quick Enquiry" subtitle="" />
                <PricingPreviewCompact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

// Accounts Category
export const AccountsCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Accounts"
    subtitle="Our Services"
    description="Year-end statutory accounts, management accounts, and fixed asset register maintenance for full compliance."
    services={[
      {
        title: 'Statutory Accounts',
        description: 'Year-end accounts preparation compliant with UK GAAP, Companies House, and HMRC requirements.',
        href: '/services/accounts/statutory-accounts',
      },
      {
        title: 'Management Accounts',
        description: 'Monthly/quarterly reporting with P&L, Balance Sheet, Cash Flow, and KPI tracking.',
        href: '/services/accounts/management-accounts',
      },
      {
        title: 'Fixed Asset Register',
        description: 'Asset tracking, depreciation calculations, and capital allowances management.',
        href: '/services/accounts/fixed-asset-register',
      },
    ]}
  />
);

// Bookkeeping Category
export const BookkeepingCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Bookkeeping"
    subtitle="Our Services"
    description="Cloud-based bookkeeping, bank reconciliations, and ledger management to keep your finances organized."
    services={[
      {
        title: 'Bookkeeping Services',
        description: 'Cloud-based bookkeeping using Xero, QuickBooks, and FreeAgent for MTD compliance.',
        href: '/services/bookkeeping/bookkeeping',
      },
      {
        title: 'Bank Reconciliations',
        description: 'Regular reconciliation to ensure your books match your bank statements.',
        href: '/services/bookkeeping/bank-reconciliations',
      },
      {
        title: 'Accounts Payable',
        description: 'Supplier ledger management, invoice processing, and payment scheduling.',
        href: '/services/bookkeeping/accounts-payable',
      },
      {
        title: 'Accounts Receivable',
        description: 'Customer ledger management, invoice tracking, and credit control.',
        href: '/services/bookkeeping/accounts-receivable',
      },
    ]}
  />
);

// Tax Category
export const TaxCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Tax"
    subtitle="Our Services"
    description="Corporation tax, VAT registration & returns, self-assessment, and capital gains tax support."
    services={[
      {
        title: 'Corporation Tax (CT600)',
        description: 'CT600 preparation, tax computation, capital allowances, and R&D tax credits.',
        href: '/services/tax/corporation-tax',
      },
      {
        title: 'VAT Registration & Returns',
        description: 'VAT registration, MTD-compliant filing, and quarterly VAT returns.',
        href: '/services/tax/vat',
      },
      {
        title: 'Self Assessment',
        description: 'SA100 preparation for sole traders, partners, and directors.',
        href: '/services/tax/self-assessment',
      },
      {
        title: 'Capital Gains Tax',
        description: 'CGT calculations and advice for property sales and share disposals.',
        href: '/services/tax/capital-gains',
      },
    ]}
  />
);

// Payroll Category
export const PayrollCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Payroll"
    subtitle="Our Services"
    description="PAYE, NIC, auto-enrolment pension setup, and P45/P60/P11D filing for stress-free payroll."
    services={[
      {
        title: 'Payroll Taxes (PAYE, NIC)',
        description: 'PAYE calculations, National Insurance, RTI submissions, and year-end processing.',
        href: '/services/payroll/paye-nic',
      },
      {
        title: 'Auto-Enrolment Pension',
        description: 'Pension scheme setup, employee assessments, and contribution management.',
        href: '/services/payroll/pension',
      },
      {
        title: 'P45 / P60 / P11D Filing',
        description: 'Year-end payroll forms and benefits reporting to HMRC.',
        href: '/services/payroll/p45-p60-p11d',
      },
    ]}
  />
);

// Corporate Services Category
export const CorporateServicesCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Corporate Services"
    subtitle="Our Services"
    description="Company formation, registered office address, and company secretarial services."
    showFinancialImages={false}
    services={[
      {
        title: 'Company Formation',
        description: 'Companies House registration, share structure, and HMRC registrations.',
        href: '/services/corporate/company-formation',
      },
      {
        title: 'Registered Office Address',
        description: 'Professional London registered address with mail forwarding.',
        href: '/services/corporate/registered-office',
      },
      {
        title: 'Company Secretarial',
        description: 'Confirmation statements, director changes, share transfers, and statutory registers.',
        href: '/services/corporate/secretarial',
      },
    ]}
  />
);

// Advisory & Consulting Category
export const AdvisoryCategory: React.FC = () => (
  <ServiceCategoryPage
    title="Advisory & Consulting"
    subtitle="Our Services"
    description="Fractional CFO services, budgeting & financial planning, and credit control guidance."
    services={[
      {
        title: 'Fractional CFO Services',
        description: 'Strategic financial leadership, board reporting, and investor relations.',
        href: '/services/advisory/fractional-cfo',
      },
      {
        title: 'Budgeting & Financial Planning',
        description: 'Annual budgets, cash flow forecasting, scenario planning, and KPIs.',
        href: '/services/advisory/budgeting',
      },
      {
        title: 'Credit Control',
        description: 'Credit policy, invoice chasing, debt collection, and cash flow improvement.',
        href: '/services/advisory/credit-control',
      },
    ]}
  />
);

export default ServiceCategoryPage;
