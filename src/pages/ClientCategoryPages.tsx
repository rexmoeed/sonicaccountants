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

interface ClientCategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  clients: { title: string; description: string; href: string }[];
}

const ClientCategoryPage: React.FC<ClientCategoryPageProps> = ({ title, subtitle, description, clients }) => {
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

        {/* Clients Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Link to="/who-we-help" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Who We Help
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {clients.map((client, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1}>
                      <Link to={client.href} className="group block h-full">
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="glass rounded-[20px] p-6 h-full border border-border hover:border-primary/50 transition-all"
                        >
                          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {client.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {client.description}
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
                <ScrollAnimation direction="up">
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground">Sample Financial Reports</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="glass rounded-[20px] p-4 border border-border hover:border-primary/30 transition-all group">
                        <div className="overflow-hidden rounded-lg mb-3 bg-white">
                          <img src={sheetBalance} alt="Balance Sheet" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Balance Sheet</h4>
                        <p className="text-muted-foreground text-xs">Assets, liabilities & equity overview</p>
                      </div>
                      <div className="glass rounded-[20px] p-4 border border-border hover:border-primary/30 transition-all group">
                        <div className="overflow-hidden rounded-lg mb-3 bg-white">
                          <img src={sheetProfitLoss} alt="Profit & Loss" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Profit & Loss</h4>
                        <p className="text-muted-foreground text-xs">Income & expenses summary</p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

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

// Companies Category
export const CompaniesCategory: React.FC = () => (
  <ClientCategoryPage
    title="Companies"
    subtitle="Who We Help"
    description="Comprehensive accounting and tax services for UK limited companies, small businesses, startups, and holding companies."
    clients={[
      {
        title: 'Limited Companies',
        description: 'Full-service accounting for UK limited companies including statutory accounts and corporation tax.',
        href: '/who-we-help/companies/limited-liability',
      },
      {
        title: 'Small Business',
        description: 'Tailored support for small businesses from bookkeeping to strategic planning.',
        href: '/who-we-help/companies/small-business',
      },
      {
        title: 'StartUps',
        description: 'Financial foundations for startups including company formation and investor-ready accounts.',
        href: '/who-we-help/companies/startups',
      },
      {
        title: 'Holding Companies',
        description: 'Specialized accounting for holding companies and complex group structures.',
        href: '/who-we-help/companies/holding',
      },
    ]}
  />
);

// Sole Traders & Partnerships Category
export const SoleTradersCategory: React.FC = () => (
  <ClientCategoryPage
    title="Sole Traders & Partnerships"
    subtitle="Who We Help"
    description="Comprehensive accounting services for sole traders and partnerships, including self-assessment and tax planning."
    clients={[
      {
        title: 'Sole Traders',
        description: 'Self-assessment, bookkeeping, expense management, and tax planning for sole traders.',
        href: '/who-we-help/sole-traders',
      },
      {
        title: 'Partnerships',
        description: 'Partnership accounts, partner self-assessments, and profit allocation.',
        href: '/who-we-help/partnerships',
      },
    ]}
  />
);

// Contractors Category
export const ContractorsCategory: React.FC = () => (
  <ClientCategoryPage
    title="Contractors"
    subtitle="Who We Help"
    description="Specialized accounting for contractors including IR35 guidance, CIS, and tax-efficient structures."
    clients={[
      {
        title: 'Contractors',
        description: 'Limited company accounts, director self-assessment, IR35 guidance, and dividend planning.',
        href: '/who-we-help/contractors/contractors',
      },
      {
        title: 'Construction Trades (CIS)',
        description: 'CIS registration, deduction calculations, monthly returns, and CIS refunds.',
        href: '/who-we-help/contractors/cis',
      },
    ]}
  />
);

// Specialities Category
export const SpecialitiesCategory: React.FC = () => (
  <ClientCategoryPage
    title="Specialities"
    subtitle="Who We Help"
    description="Industry-specific accounting expertise for e-commerce, retail, hospitality, and more."
    clients={[
      {
        title: 'E-commerce',
        description: 'Multi-platform sales integration, multi-currency accounting, and international VAT.',
        href: '/who-we-help/specialities/ecommerce',
      },
      {
        title: 'Retail Stores',
        description: 'POS integration, stock control, cash flow management, and multi-location accounting.',
        href: '/who-we-help/specialities/retail',
      },
      {
        title: 'Restaurants & Cafés',
        description: 'Daily reporting, tips management, TRONC schemes, and hospitality VAT rates.',
        href: '/who-we-help/specialities/restaurants',
      },
    ]}
  />
);

export default ClientCategoryPage;
