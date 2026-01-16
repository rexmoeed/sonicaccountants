import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Shield } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';
import ContactForm from '@/components/ContactForm';
import PricingPreviewCompact from '@/components/PricingPreviewCompact';
import FAQSection from '@/components/FAQSection';
import icaewLogo from '@/assets/icaew-logo.webp';
import { generalFAQs } from '@/data/faqs';

interface ClientPageProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string;
    items?: string[];
  }[];
  services?: string[];
  backLink?: string;
  backLabel?: string;
  faqs?: { question: string; answer: string }[];
}

const ClientPage: React.FC<ClientPageProps> = ({ 
  title, 
  subtitle, 
  heroDescription, 
  sections, 
  services,
  backLink = '/who-we-help',
  backLabel = 'Back to Who We Help',
  faqs = generalFAQs
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
          <div className="decorative-circle-yellow w-20 h-20 top-10 right-[10%] opacity-30" />
          <div className="decorative-circle-red w-16 h-16 bottom-10 left-[15%] opacity-30" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent font-semibold mb-2">{subtitle}</p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {title}
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg">{heroDescription}</p>
              
              
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link to={backLink} className="inline-flex items-center gap-2 text-primary hover:underline mb-6 md:mb-8">
                <ArrowLeft className="w-4 h-4" />
                {backLabel}
              </Link>

              <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  {sections.map((section, index) => (
                    <ScrollAnimation key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                      <div className="glass rounded-[20px] p-6 md:p-8 border border-border">
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">{section.content}</p>
                        {section.items && (
                          <ul className="space-y-2">
                            {section.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm md:text-base">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </ScrollAnimation>
                  ))}

                

                  {services && (
                    <ScrollAnimation direction="up">
                      <div className="glass rounded-[20px] p-6 md:p-8 border border-border bg-primary/5">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">Services We Offer</h2>
                          <img src={icaewLogo} alt="ICAEW" className="h-8 md:h-10 w-auto" />
                        </div>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm md:text-base">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  )}

                  {/* FAQs */}
                  <FAQSection faqs={faqs} />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-meeting">
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/pricing">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <ContactForm compact title="Quick Enquiry" subtitle="" />
                  <PricingPreviewCompact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// COMPANIES
export const LimitedCompanies: React.FC = () => (
  <ClientPage
    title="Limited Companies"
    subtitle="Companies"
    heroDescription="Complete Accounting Solutions for UK Limited Companies"
    sections={[
      {
        title: "Expert Accounting for Limited Companies",
        content: "We help UK limited companies manage their bookkeeping, accounting, and tax obligations with accuracy and efficiency. Our ICAEW-registered accountants provide HMRC-compliant corporate tax, VAT, payroll, and statutory reporting services tailored to your business needs."
      },
      {
        title: "Why Limited Companies Choose Us",
        content: "Running a limited company comes with complex compliance requirements. We take the stress out of your accounting obligations so you can focus on growing your business.",
        items: [
          "Full Companies House and HMRC compliance",
          "Cloud-based accounting with real-time visibility",
          "Dedicated accountant for personalized support",
          "Proactive tax planning to minimize liabilities",
          "Fixed-fee pricing with no surprises"
        ]
      }
    ]}
    services={[
      "Statutory accounts preparation",
      "Corporation tax returns (CT600)",
      "VAT registration & returns",
      "Payroll services & RTI",
      "Company secretarial",
      "Management accounts",
      "Bookkeeping services",
      "Year-end accounts"
    ]}
    backLink="/who-we-help/companies"
    backLabel="Back to Companies"
  />
);

export const SmallBusiness: React.FC = () => (
  <ClientPage
    title="Small Business"
    subtitle="Companies"
    heroDescription="Helping Small Businesses Thrive Across the UK"
    sections={[
      {
        title: "Your Partner in Small Business Success",
        content: "We love helping small and startup businesses thrive. As your UK-based accountants, we provide full-service support from bookkeeping to strategic planning, helping you navigate the complexities of running a business."
      },
      {
        title: "Tailored Support for Growing Businesses",
        content: "Every small business is unique. We take the time to understand your goals and challenges, providing practical advice that makes a real difference.",
        items: [
          "Cloud-based accounting for easy access",
          "Regular financial reviews and insights",
          "Cash flow management and forecasting",
          "Tax planning to maximize efficiency",
          "Growth-focused business advice"
        ]
      }
    ]}
    services={[
      "Cloud bookkeeping setup",
      "Monthly management accounts",
      "Tax planning & compliance",
      "Cash flow management",
      "Business growth advice",
      "HMRC compliance",
      "VAT registration & returns",
      "Payroll processing"
    ]}
    backLink="/who-we-help/companies"
    backLabel="Back to Companies"
  />
);

export const StartUps: React.FC = () => (
  <ClientPage
    title="StartUps"
    subtitle="Companies"
    heroDescription="Financial Foundations for Your Startup Journey"
    sections={[
      {
        title: "Supporting Startups from Day One",
        content: "We support startups with the financial foundations they need to grow. From company formation to investor-ready accounts, we've got you covered with expert guidance at every stage."
      },
      {
        title: "Built for Startup Success",
        content: "We understand the unique challenges startups face. Our services are designed to give you the financial clarity and compliance you need while you focus on building your business.",
        items: [
          "Company formation and setup",
          "R&D tax credit claims",
          "SEIS/EIS scheme support",
          "Investor-ready financial reporting",
          "Funding and pitch preparation support"
        ]
      }
    ]}
    services={[
      "Company formation",
      "Financial projections",
      "Investor-ready accounts",
      "R&D tax credits",
      "SEIS/EIS support",
      "Funding guidance",
      "Bookkeeping setup",
      "Tax planning"
    ]}
    backLink="/who-we-help/companies"
    backLabel="Back to Companies"
  />
);

export const HoldingCompanies: React.FC = () => (
  <ClientPage
    title="Holding Companies"
    subtitle="Companies"
    heroDescription="Specialist Accounting for Group Structures"
    sections={[
      {
        title: "Expert Holding Company Accounting",
        content: "We provide specialized accounting for holding companies, managing complex group structures and inter-company transactions with precision and compliance."
      },
      {
        title: "Managing Complex Structures",
        content: "Holding company accounting requires specialist knowledge. We handle the complexities so you can focus on your investment strategy.",
        items: [
          "Group accounts consolidation",
          "Inter-company reconciliations",
          "Dividend planning and extraction",
          "Corporation tax optimization",
          "Company restructuring support"
        ]
      }
    ]}
    services={[
      "Group accounts",
      "Inter-company reconciliations",
      "Dividend planning",
      "Corporation tax",
      "Company restructuring",
      "Investment tracking",
      "Subsidiary management",
      "Compliance reporting"
    ]}
    backLink="/who-we-help/companies"
    backLabel="Back to Companies"
  />
);

// SOLE TRADERS & PARTNERSHIPS
export const SoleTraders: React.FC = () => (
  <ClientPage
    title="Sole Traders"
    subtitle="Sole Traders & Partnerships"
    heroDescription="Simple, Effective Accounting for Self-Employed Professionals"
    sections={[
      {
        title: "Accounting Made Simple for Sole Traders",
        content: "Comprehensive accounting services for sole traders. We take the stress out of your accounting work so you can focus on growing your business and doing what you love."
      },
      {
        title: "Tailored Support for the Self-Employed",
        content: "Being self-employed shouldn't mean struggling with accounts. We make it easy to stay compliant and maximize your take-home pay.",
        items: [
          "Self-assessment tax return preparation",
          "Expense tracking and optimization",
          "VAT registration when needed",
          "Business bank reconciliation",
          "Tax planning advice"
        ]
      }
    ]}
    services={[
      "Self-assessment tax returns",
      "Bookkeeping services",
      "Expense management",
      "Tax planning",
      "VAT registration & returns",
      "Business bank reconciliation",
      "Cash flow management",
      "HMRC correspondence"
    ]}
    backLink="/who-we-help/sole-traders-partnerships"
    backLabel="Back to Sole Traders & Partnerships"
  />
);

export const Partnerships: React.FC = () => (
  <ClientPage
    title="Partnerships"
    subtitle="Sole Traders & Partnerships"
    heroDescription="Professional Accounting for Business Partnerships"
    sections={[
      {
        title: "Expert Partnership Accounting",
        content: "We support partnerships with accounts preparation, partner tax returns, and strategic tax planning. Our services ensure all partners meet their individual and collective obligations."
      },
      {
        title: "Managing Partner Obligations",
        content: "Partnership accounting involves unique challenges. We handle the complexities of profit allocation and ensure each partner stays compliant.",
        items: [
          "Partnership accounts preparation",
          "Individual partner self-assessments",
          "Profit allocation and distribution",
          "Tax planning for partners",
          "Partnership agreement guidance"
        ]
      }
    ]}
    services={[
      "Partnership accounts",
      "Partner self-assessments",
      "Profit allocation",
      "Tax planning",
      "Partnership agreement advice",
      "VAT returns",
      "Bookkeeping",
      "HMRC compliance"
    ]}
    backLink="/who-we-help/sole-traders-partnerships"
    backLabel="Back to Sole Traders & Partnerships"
  />
);

// CONTRACTORS
export const Contractors: React.FC = () => (
  <ClientPage
    title="Contractors"
    subtitle="Contractors"
    heroDescription="Specialist Accounting for UK Contractors"
    sections={[
      {
        title: "Expert Contractor Accounting Services",
        content: "We assist contractors with bookkeeping, self-assessment tax returns, and expenses, offering IR35 support, VAT, and payroll guidance tailored to contractor needs."
      },
      {
        title: "Maximizing Your Contractor Income",
        content: "Contracting offers great rewards but also comes with complex tax obligations. We help you stay compliant while maximizing your take-home pay.",
        items: [
          "Limited company accounts and tax",
          "Director self-assessment returns",
          "IR35 status reviews and guidance",
          "Expense optimization strategies",
          "Dividend planning and extraction"
        ]
      }
    ]}
    services={[
      "Limited company accounts",
      "Director self-assessment",
      "IR35 guidance",
      "Expense optimization",
      "Dividend planning",
      "VAT registration & returns",
      "Payroll services",
      "Contract review support"
    ]}
    backLink="/who-we-help/contractors"
    backLabel="Back to Contractors"
  />
);

export const ConstructionCIS: React.FC = () => (
  <ClientPage
    title="Construction Trades (CIS)"
    subtitle="Contractors"
    heroDescription="CIS Specialists for Construction Businesses"
    sections={[
      {
        title: "Construction Industry Scheme Experts",
        content: "Specialized accounting for construction businesses operating under the Construction Industry Scheme. We handle CIS registration, deductions, and refunds so you can focus on your projects."
      },
      {
        title: "Managing CIS Compliance",
        content: "CIS adds complexity to construction accounting. We make it simple, ensuring you're compliant and claiming all the refunds you're entitled to.",
        items: [
          "CIS registration for contractors and subcontractors",
          "Accurate CIS deduction calculations",
          "Monthly CIS return submissions",
          "CIS refund claims",
          "HMRC compliance and correspondence"
        ]
      }
    ]}
    services={[
      "CIS registration",
      "CIS deduction calculations",
      "Monthly CIS returns",
      "Subcontractor payments",
      "CIS refunds",
      "HMRC compliance",
      "Self-assessment returns",
      "VAT returns"
    ]}
    backLink="/who-we-help/contractors"
    backLabel="Back to Contractors"
  />
);

// SPECIALITIES
export const Ecommerce: React.FC = () => (
  <ClientPage
    title="E-commerce"
    subtitle="Specialities"
    heroDescription="Accounting for Online Businesses & Marketplaces"
    sections={[
      {
        title: "E-commerce Accounting Specialists",
        content: "We understand the unique challenges of online businesses, from multi-platform sales to international VAT. Our services are designed to help e-commerce businesses thrive."
      },
      {
        title: "Managing Online Business Complexity",
        content: "E-commerce accounting involves unique challenges like marketplace integrations, multi-currency transactions, and complex VAT rules.",
        items: [
          "Platform integrations (Shopify, Amazon, eBay)",
          "Multi-currency transaction handling",
          "International VAT compliance",
          "Inventory and stock accounting",
          "Marketplace fee reconciliation"
        ]
      }
    ]}
    services={[
      "Shopify/Amazon/eBay integration",
      "Multi-currency accounting",
      "International VAT",
      "Inventory management",
      "Marketplace reconciliation",
      "Cash flow forecasting",
      "Growth planning",
      "Tax optimization"
    ]}
    backLink="/who-we-help/specialities"
    backLabel="Back to Specialities"
  />
);

export const Retail: React.FC = () => (
  <ClientPage
    title="Retail Stores"
    subtitle="Specialities"
    heroDescription="Tailored Accounting for Retail Businesses"
    sections={[
      {
        title: "Retail Business Accounting",
        content: "Tailored accounting for retail businesses, from boutiques to multi-site operations. We understand the unique financial challenges of running a retail operation."
      },
      {
        title: "Supporting Retail Success",
        content: "Retail businesses need fast, accurate financial information to make good decisions. We provide the insights you need.",
        items: [
          "POS system integration",
          "Stock control and valuation",
          "Multi-location accounting",
          "Cash flow management",
          "Staff payroll processing"
        ]
      }
    ]}
    services={[
      "POS system integration",
      "Stock control",
      "Cash flow management",
      "Multi-location accounting",
      "Staff payroll",
      "VAT returns",
      "Management accounts",
      "Business planning"
    ]}
    backLink="/who-we-help/specialities"
    backLabel="Back to Specialities"
  />
);

export const Restaurants: React.FC = () => (
  <ClientPage
    title="Restaurants & Cafés"
    subtitle="Specialities"
    heroDescription="Specialist Accounting for Hospitality Businesses"
    sections={[
      {
        title: "Hospitality Accounting Experts",
        content: "Specialized accounting for hospitality businesses, handling the unique challenges of food service including tips management, TRONC schemes, and food cost analysis."
      },
      {
        title: "Managing Hospitality Finances",
        content: "Restaurants and cafés have unique accounting needs. We understand the industry and provide practical support.",
        items: [
          "Daily and weekly financial reporting",
          "Tips and TRONC scheme management",
          "Food cost analysis and margins",
          "Staff payroll with tips allocation",
          "VAT at hospitality rates"
        ]
      }
    ]}
    services={[
      "Daily/weekly reporting",
      "Tips management",
      "TRONC schemes",
      "Food cost analysis",
      "Staff payroll",
      "VAT (hospitality rates)",
      "Cash flow management",
      "Management accounts"
    ]}
    backLink="/who-we-help/specialities"
    backLabel="Back to Specialities"
  />
);

export default ClientPage;
