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
import {
  statutoryAccountsFAQs,
  managementAccountsFAQs,
  fixedAssetsFAQs,
  bookkeepingFAQs,
  bankReconciliationFAQs,
  accountsPayableFAQs,
  accountsReceivableFAQs,
  corporationTaxFAQs,
  vatFAQs,
  selfAssessmentFAQs,
  capitalGainsFAQs,
  payrollFAQs,
  pensionFAQs,
  companyFormationFAQs,
  generalFAQs
} from '@/data/faqs';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string;
    items?: string[];
  }[];
  whyChooseUs?: string[];
  backLink: string;
  backLabel?: string;
  imageVariant?: 'accounts' | 'tax' | 'bookkeeping' | 'advisory' | 'payroll' | 'corporate' | 'all';
  faqs?: { question: string; answer: string }[];
}

const ServicePage: React.FC<ServicePageProps> = ({ 
  title, 
  subtitle, 
  heroDescription, 
  sections, 
  whyChooseUs, 
  backLink, 
  backLabel = 'Back to Services',
  imageVariant = 'accounts',
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
              
              {/* ICAEW Badge */}
              <div className="mt-6 flex justify-center">
                <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                  <img src={icaewLogo} alt="ICAEW Registered" className="h-10 md:h-12 w-auto" />
                </div>
              </div>
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

                  

                  {whyChooseUs && (
                    <ScrollAnimation direction="up">
                      <div className="glass rounded-[20px] p-6 md:p-8 border border-border bg-primary/5">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">Why Choose Us?</h2>
                          <img src={icaewLogo} alt="ICAEW" className="h-8 md:h-10 w-auto" />
                        </div>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {whyChooseUs.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm md:text-base">{item}</span>
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

// ACCOUNTS SERVICES
export const StatutoryAccounts: React.FC = () => (
  <ServicePage
    title="Statutory Accounts"
    subtitle="Accounts"
    heroDescription="Year-End Statutory Accounts – UK Compliance Made Simple"
    imageVariant="accounts"
    faqs={statutoryAccountsFAQs}
    sections={[
      {
        title: "Professional Statutory Accounts Preparation",
        content: "We specialize in year-end statutory accounts preparation for UK limited companies, ensuring full compliance with UK accounting standards (FRS 102 / FRS 105) and HMRC regulations. Our ICAEW-registered accountants prepare accurate, reconciled, and audit-ready financial statements, ready for submission to Companies House and HMRC."
      },
      {
        title: "What Are Statutory Accounts?",
        content: "Statutory accounts are legally required annual financial statements that UK companies must prepare at the end of each accounting period. These accounts provide a true and fair view of a company's financial performance and position, and are used by Companies House, HMRC, lenders, investors, and stakeholders to assess compliance and financial health."
      },
      {
        title: "What Is Included in Statutory Accounts?",
        content: "UK statutory accounts include structured financial reports prepared in a prescribed format. Depending on the size of the company, these reports typically include:",
        items: [
          "Profit & Loss Account (P&L) - summarizes income, expenses, and profitability",
          "Balance Sheet - shows financial position, assets, liabilities, and equity",
          "Cash Flow Statement - tracks movement of cash across activities",
          "Directors' Report - narrative disclosures about activities and performance",
          "Notes to the Accounts - supporting disclosures and policies"
        ]
      },
      {
        title: "Who Must File & Where?",
        content: "All UK limited companies, including small businesses, SMEs, large companies, LLPs, and dormant companies, are legally required to prepare and file statutory accounts. Accounts must be filed with Companies House as part of public records, and with HMRC alongside the Corporation Tax return (CT600)."
      },
      {
        title: "Filing Deadlines & Penalties",
        content: "For Companies House, accounts must be filed within 9 months of the accounting period end (21 months for first year). Corporation Tax returns must be filed with HMRC within 12 months. Late filing results in automatic penalties ranging from £150 to £1,500, potential company strike-off, and director disqualification."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "Full UK GAAP and HMRC compliance",
      "Fixed-fee pricing with no surprises",
      "Dedicated accountant support",
      "Cloud-based technology for efficiency",
      "Proactive compliance management"
    ]}
    backLink="/services/accounts"
    backLabel="Back to Accounts"
  />
);

export const ManagementAccounts: React.FC = () => (
  <ServicePage
    title="Management Accounts"
    subtitle="Accounts"
    heroDescription="Monthly/Quarterly Insights for Better Business Decisions"
    imageVariant="accounts"
    faqs={managementAccountsFAQs}
    sections={[
      {
        title: "What Are Management Accounts?",
        content: "Management accounts are internal financial reports that are regularly prepared—either monthly or quarterly—to monitor business performance. Unlike statutory accounts, they are not legally required, but they are crucial for managing cash flow, budgeting, forecasting, and strategic planning."
      },
      {
        title: "What Is Included in Management Accounts?",
        content: "Management accounts are tailored to meet the specific needs of your business:",
        items: [
          "Profit & Loss Analysis - detailed breakdown of income, costs, and margins",
          "Balance Sheet Review - snapshot of financial position at any given time",
          "Cash Flow Reporting - tracks inflows and outflows to prevent shortages",
          "Key Performance Indicators (KPIs) - gross margin, net profit, debtor days, etc.",
          "Budgeting & Forecasting - variance analysis and forward planning"
        ]
      },
      {
        title: "Who Needs Management Accounts?",
        content: "Management accounts are ideal for limited companies, SMEs, startups, contractors, and growing businesses. They are particularly valuable for businesses seeking improved financial control, funding, investment, or increased profitability."
      },
      {
        title: "Technology-Driven, Cloud-Based Reporting",
        content: "We use leading cloud accounting software such as Xero, QuickBooks, and FreeAgent, along with AI-supported reporting tools. This combination provides real-time financial data, secure access, and automated reporting, all while reducing errors and improving efficiency."
      },
      {
        title: "Benefits of Management Accounts",
        content: "Management accounts provide clarity, control, and confidence:",
        items: [
          "Identify risks early and take corrective action",
          "Improve cash flow management",
          "Optimize costs and enhance profitability",
          "Support strategic decision-making",
          "Valuable for lenders and investors"
        ]
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "Accurate, HMRC-compliant reporting",
      "Fixed monthly pricing",
      "Dedicated support team",
      "Forward-thinking, technology-driven approach",
      "Real-time financial visibility"
    ]}
    backLink="/services/accounts"
    backLabel="Back to Accounts"
  />
);

export const FixedAssets: React.FC = () => (
  <ServicePage
    title="Fixed Asset Register"
    subtitle="Accounts"
    heroDescription="Accurate Asset Tracking & HMRC Compliance"
    imageVariant="accounts"
    faqs={fixedAssetsFAQs}
    sections={[
      {
        title: "Professional Fixed Asset Register Services",
        content: "We offer accurate, HMRC-compliant fixed asset register services for UK businesses, ensuring proper tracking, valuation, and depreciation of business assets. Our ICAEW-registered accountants maintain detailed asset registers that align with UK GAAP, FRS 102, and HMRC capital allowance rules."
      },
      {
        title: "What Is a Fixed Asset Register?",
        content: "A fixed asset register is a structured record of all long-term business assets owned by a company. It tracks key details including asset acquisition, cost, depreciation, disposal, and net book value. Fixed assets typically include property, plant, machinery, vehicles, IT equipment, furniture, and leasehold improvements."
      },
      {
        title: "What Is Included in a Fixed Asset Register?",
        content: "A comprehensive fixed asset register includes:",
        items: [
          "Asset descriptions and purchase dates",
          "Original cost and depreciation method",
          "Useful life and accumulated depreciation",
          "Net book value and location",
          "Disposal details and revaluations"
        ]
      },
      {
        title: "Depreciation & Capital Allowances",
        content: "We calculate and review depreciation using appropriate methods such as straight-line or reducing balance. Our services align accounting depreciation with HMRC capital allowance claims, including Annual Investment Allowance (AIA) and special rate pools, helping businesses maximize tax deductions."
      },
      {
        title: "Technology-Driven Asset Management",
        content: "We maintain fixed asset registers using cloud-based accounting systems such as Xero, QuickBooks, and FreeAgent, supported by structured schedules and automated calculations, ensuring real-time accuracy and seamless integration with financial reporting."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "HMRC-aligned and audit-ready",
      "Modern technology and expert review",
      "Fixed-fee approach",
      "Proactive compliance focus",
      "Clarity and control over assets"
    ]}
    backLink="/services/accounts"
    backLabel="Back to Accounts"
  />
);

// BOOKKEEPING SERVICES
export const Bookkeeping: React.FC = () => (
  <ServicePage
    title="Bookkeeping Services"
    subtitle="Bookkeeping"
    heroDescription="Accurate, HMRC-Compliant Financial Records"
    imageVariant="bookkeeping"
    faqs={bookkeepingFAQs}
    sections={[
      {
        title: "Professional Bookkeeping Services",
        content: "We offer reliable, accurate, and HMRC-compliant bookkeeping services for UK businesses of all sizes. Our ICAEW-registered accountants ensure your financial records are maintained in line with UK accounting standards, Making Tax Digital (MTD) requirements, and HMRC regulations."
      },
      {
        title: "What Is Bookkeeping?",
        content: "Bookkeeping is the systematic process of recording, organizing, and reconciling a business's financial transactions. It includes tracking income, expenses, bank transactions, and maintaining supporting documentation. Accurate bookkeeping forms the foundation for VAT returns, payroll, management accounts, statutory accounts, and tax filings."
      },
      {
        title: "What Our Bookkeeping Services Include",
        content: "Our bookkeeping services are tailored to your business needs:",
        items: [
          "Recording sales, purchases, and expenses",
          "Bank and credit card reconciliations",
          "Maintaining ledgers and control accounts",
          "Processing supplier invoices and payments",
          "Expense categorization and review"
        ]
      },
      {
        title: "VAT-Ready & MTD-Compliant Records",
        content: "We maintain bookkeeping records that are fully compliant with Making Tax Digital (MTD) for VAT. Our systems ensure accurate VAT calculations, digital record-keeping, and seamless submission to HMRC, reducing errors and ensuring timely VAT return filing."
      },
      {
        title: "Cloud-Based Bookkeeping & Automation",
        content: "We use modern cloud accounting software such as Xero, QuickBooks, and FreeAgent, enhanced with automation and AI-supported tools. This enables real-time reporting, secure access, and efficient processing while reducing manual errors and paperwork."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "Technology-driven and HMRC-ready",
      "Fixed monthly pricing",
      "Dedicated support",
      "Proactive, cloud-first approach",
      "Always up-to-date records"
    ]}
    backLink="/services/bookkeeping"
    backLabel="Back to Bookkeeping"
  />
);

export const BankReconciliations: React.FC = () => (
  <ServicePage
    title="Bank Reconciliation"
    subtitle="Bookkeeping"
    heroDescription="Accurate Cash Records & Financial Control"
    imageVariant="bookkeeping"
    faqs={bankReconciliationFAQs}
    sections={[
      {
        title: "Professional Bank Reconciliation Services",
        content: "We provide accurate and timely bank reconciliation services for UK businesses, ensuring that accounting records fully match actual bank activity. Our ICAEW-registered accountants reconcile business bank accounts, credit cards, and payment platforms in line with HMRC compliance requirements."
      },
      {
        title: "What Is Bank Reconciliation?",
        content: "Bank reconciliation is the process of matching transactions recorded in your accounting system with those shown on your bank statements. This ensures that all income, expenses, and transfers are correctly recorded and that no transactions are missing, duplicated, or incorrectly posted."
      },
      {
        title: "What Our Bank Reconciliation Services Include",
        content: "Our services typically include:",
        items: [
          "Matching bank and credit card transactions to accounting records",
          "Identifying missing, duplicate, or incorrectly posted entries",
          "Reviewing bank charges, interest, and transfers",
          "Investigating and resolving unreconciled differences",
          "Reconciling payment gateways (Stripe, PayPal, Square)"
        ]
      },
      {
        title: "Cash Flow Accuracy & Financial Control",
        content: "Accurate bank reconciliations provide a true picture of available cash. This supports better cash flow management, timely payments, and improved financial control. It also helps businesses detect unauthorized transactions or banking errors early."
      },
      {
        title: "Technology-Driven Reconciliation",
        content: "We use cloud-based accounting software such as Xero, QuickBooks, and FreeAgent, enhanced with automation and AI-assisted tools. This allows efficient transaction matching, real-time updates, and secure access to financial data."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "HMRC-aligned processes",
      "Technology-supported solutions",
      "Fixed pricing",
      "Dedicated support",
      "Accurate, reliable, audit-ready"
    ]}
    backLink="/services/bookkeeping"
    backLabel="Back to Bookkeeping"
  />
);

export const AccountsPayable: React.FC = () => (
  <ServicePage
    title="Accounts Payable Management"
    subtitle="Bookkeeping"
    heroDescription="Streamlined Supplier Payments & Cash Flow Control"
    imageVariant="bookkeeping"
    faqs={accountsPayableFAQs}
    sections={[
      {
        title: "Professional Accounts Payable Management Services",
        content: "We provide end-to-end accounts payable management services for UK businesses, ensuring accurate recording, timely supplier payments, and full compliance with UK accounting standards and HMRC requirements."
      },
      {
        title: "What Is Accounts Payable Management?",
        content: "Accounts payable management refers to the process of handling all business obligations owed to suppliers and vendors. It includes recording purchase invoices, tracking due dates, managing payments, and reconciling supplier accounts."
      },
      {
        title: "What Our Accounts Payable Services Include",
        content: "Our services typically include:",
        items: [
          "Processing and recording supplier invoices",
          "Verifying invoice accuracy and VAT treatment",
          "Maintaining supplier ledgers and balances",
          "Scheduling and managing supplier payments",
          "Monitoring outstanding payables and ageing reports"
        ]
      },
      {
        title: "VAT-Accurate & HMRC-Compliant Processing",
        content: "We ensure that all supplier invoices are correctly coded for VAT compliance and Making Tax Digital (MTD) requirements. Accurate VAT treatment reduces the risk of HMRC errors, penalties, or VAT reclaim issues."
      },
      {
        title: "Cash Flow & Payment Planning",
        content: "Our accounts payable management service supports proactive cash flow management by aligning supplier payments with available funds. This helps businesses prioritize payments, manage working capital, and avoid unnecessary cash strain."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "HMRC-compliant processing",
      "Technology-driven solutions",
      "Fixed pricing",
      "Dedicated support",
      "Improved cash flow visibility"
    ]}
    backLink="/services/bookkeeping"
    backLabel="Back to Bookkeeping"
  />
);

export const AccountsReceivable: React.FC = () => (
  <ServicePage
    title="Accounts Receivable Management"
    subtitle="Bookkeeping"
    heroDescription="Faster Payments & Healthy Cash Flow"
    imageVariant="bookkeeping"
    faqs={accountsReceivableFAQs}
    sections={[
      {
        title: "Professional Accounts Receivable Management Services",
        content: "We provide comprehensive accounts receivable management services to help UK businesses invoice accurately, collect payments faster, and maintain strong cash flow. Our ICAEW-registered accountants manage customer invoicing, receipts, and debtor balances using cloud-based accounting software."
      },
      {
        title: "What Is Accounts Receivable Management?",
        content: "Accounts receivable management is the process of managing money owed to a business by its customers. It includes issuing invoices, tracking outstanding balances, recording customer payments, and following up on overdue amounts."
      },
      {
        title: "What Our Accounts Receivable Services Include",
        content: "Our services typically include:",
        items: [
          "Raising and issuing customer invoices",
          "Verifying pricing, VAT, and invoice accuracy",
          "Recording customer receipts and allocations",
          "Maintaining customer ledgers and balances",
          "Monitoring outstanding invoices and debtor ageing"
        ]
      },
      {
        title: "Debtor Ageing & Credit Control",
        content: "We prepare detailed debtor ageing reports to track overdue balances and payment patterns. These insights help businesses improve credit control, prioritize collections, and reduce the risk of bad debts."
      },
      {
        title: "Cash Flow Forecasting & Collections Planning",
        content: "Our accounts receivable management supports proactive cash flow planning by aligning expected receipts with business expenses. This improves liquidity, supports growth decisions, and strengthens financial forecasting."
      }
    ]}
    whyChooseUs={[
      "ICAEW-registered UK accountants",
      "HMRC-compliant invoicing",
      "Technology-driven automation",
      "Fixed pricing",
      "Proactive approach",
      "Clear financial insights"
    ]}
    backLink="/services/bookkeeping"
    backLabel="Back to Bookkeeping"
  />
);

// TAX SERVICES
export const CorporationTax: React.FC = () => (
  <ServicePage
    title="Corporation Tax (CT600)"
    subtitle="Tax"
    heroDescription="UK HMRC Compliance Made Simple"
    imageVariant="tax"
    faqs={corporationTaxFAQs}
    sections={[
      {
        title: "Professional CT600 Corporate Tax Return Services",
        content: "Stay compliant with HMRC corporate tax regulations and avoid unnecessary penalties with our professional CT600 Corporate Tax Return services. We help businesses file accurate, timely, and fully compliant corporate tax returns, supported by technology-driven, AI-enhanced accounting solutions."
      },
      {
        title: "Who Is Required to File CT600?",
        content: "All UK limited companies must file a CT600:",
        items: [
          "All UK limited companies, including dormant companies",
          "Non-resident companies with UK income or operations",
          "Companies with profits liable to corporation tax"
        ]
      },
      {
        title: "Timeline for Filing",
        content: "Understanding the deadlines is crucial:",
        items: [
          "CT600 must be filed within 12 months of accounting period end",
          "Corporation tax payment due 9 months and 1 day after period ends",
          "Late filing or late payment attracts penalties and interest"
        ]
      },
      {
        title: "Penalties for Non-Filing or Late Filing",
        content: "HMRC penalties can be significant:",
        items: [
          "Automatic penalties start at £100 for up to 3 months late",
          "£200 after 6 months, further penalties after 12 months",
          "Interest accrues on unpaid tax from the due date"
        ]
      },
      {
        title: "Benefits of Filing CT600 on Time",
        content: "Filing on time ensures:",
        items: [
          "Avoid HMRC penalties and interest charges",
          "Maintain good corporate reputation with investors and banks",
          "Access tax reliefs and credits you're eligible for",
          "Accurate records for future tax planning and audits"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team with senior oversight",
      "AI-supported accounting for precision",
      "Forward-thinking tax advisory",
      "Scalable solutions for all business sizes",
      "Deadline-driven to avoid penalties"
    ]}
    backLink="/services/tax"
    backLabel="Back to Tax"
  />
);

export const VATServices: React.FC = () => (
  <ServicePage
    title="VAT Registration & Returns"
    subtitle="Tax"
    heroDescription="MTD-Compliant VAT Services for UK Businesses"
    imageVariant="tax"
    faqs={vatFAQs}
    sections={[
      {
        title: "Professional VAT Registration & VAT Return Services",
        content: "Ensure full HMRC VAT compliance with our professional VAT registration and VAT return services, designed for businesses of all sizes. We provide MTD-compliant (Making Tax Digital) solutions, leveraging technology-driven, AI-enhanced accounting systems for accuracy and efficiency."
      },
      {
        title: "What is VAT Registration?",
        content: "VAT registration is mandatory for UK businesses whose taxable turnover exceeds the VAT threshold (£90,000 as of 2025). Registration allows your business to charge VAT on sales and reclaim VAT on purchases."
      },
      {
        title: "Who Needs to Register for VAT?",
        content: "VAT registration applies to:",
        items: [
          "Businesses with taxable turnover above the VAT threshold",
          "Voluntary registration for small businesses to reclaim VAT",
          "Businesses supplying goods or services internationally"
        ]
      },
      {
        title: "VAT Returns – Timeline & Compliance",
        content: "Understanding VAT return requirements:",
        items: [
          "VAT returns must be submitted quarterly",
          "Due one month and 7 days after the VAT period ends",
          "Must maintain MTD-compliant digital records",
          "Late filing or payment triggers penalties and interest"
        ]
      },
      {
        title: "Our VAT Services Include",
        content: "Comprehensive VAT support:",
        items: [
          "VAT registration for new or existing businesses",
          "Preparation and filing of quarterly MTD-compliant VAT returns",
          "Accurate calculation of VAT payable and reclaimable",
          "VAT advisory to optimize cash flow and ensure compliance",
          "Support for domestic and international trading"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported digital bookkeeping",
      "Forward-thinking VAT advisory",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/tax"
    backLabel="Back to Tax"
  />
);

export const SelfAssessment: React.FC = () => (
  <ServicePage
    title="Self Assessment Tax Returns"
    subtitle="Tax"
    heroDescription="SA100 Filing Made Simple for UK Taxpayers"
    imageVariant="tax"
    faqs={selfAssessmentFAQs}
    sections={[
      {
        title: "Professional Self Assessment Tax Return Services",
        content: "Ensure full HMRC compliance with our expert Self Assessment Tax Return (SA100) services, designed for individuals, sole traders, and landlords. We provide technology-driven, AI-enhanced solutions to make filing accurate, timely, and stress-free."
      },
      {
        title: "What is a Self Assessment Tax Return (SA100)?",
        content: "The SA100 is the main UK tax return form used by HMRC to calculate an individual's income tax, capital gains, and other liabilities. Filing the SA100 correctly ensures compliance and helps avoid unnecessary penalties."
      },
      {
        title: "Who Needs to File SA100?",
        content: "Self Assessment applies to:",
        items: [
          "Self-employed individuals or sole traders",
          "Company directors or people with investment income",
          "Individuals earning income from property, savings, or dividends",
          "Those with capital gains or other untaxed income"
        ]
      },
      {
        title: "Timeline for Filing",
        content: "Key deadlines to remember:",
        items: [
          "Paper tax returns: 31 October following the tax year",
          "Online tax returns: 31 January following the tax year",
          "Payment of tax due by 31 January",
          "Late filing attracts penalties starting at £100"
        ]
      },
      {
        title: "Our Self Assessment Services Include",
        content: "Comprehensive support:",
        items: [
          "Preparation and filing of the SA100 with HMRC",
          "Accurate calculation of income, allowances, and deductions",
          "Tax planning advice to minimize liabilities legally",
          "Support for foreign income and cross-border taxation",
          "Integration with bookkeeping systems for seamless reporting"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported accounting",
      "Forward-thinking tax advisory",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/tax"
    backLabel="Back to Tax"
  />
);

export const CapitalGainsTax: React.FC = () => (
  <ServicePage
    title="Capital Gains Tax"
    subtitle="Tax"
    heroDescription="CGT Calculations & HMRC Compliance"
    imageVariant="tax"
    faqs={capitalGainsFAQs}
    sections={[
      {
        title: "Professional Capital Gains Tax Services",
        content: "Stay fully HMRC-compliant and optimise your tax position with our professional Capital Gains Tax (CGT) services. We help individuals and businesses accurately calculate, report, and file CGT, using technology-driven, AI-supported accounting solutions."
      },
      {
        title: "What is Capital Gains Tax?",
        content: "Capital Gains Tax (CGT) is a tax on the profit made from selling or disposing of certain types of assets. Filing CGT correctly ensures compliance with UK tax laws and helps avoid penalties."
      },
      {
        title: "Assets Subject to Capital Gains Tax",
        content: "CGT typically applies to:",
        items: [
          "Property (other than your primary residence)",
          "Shares, stocks, and securities",
          "Business assets and investments",
          "Valuable personal possessions (art, antiques, jewelry)",
          "Cryptocurrency and other digital assets"
        ]
      },
      {
        title: "Timeline for Filing",
        content: "Key CGT deadlines:",
        items: [
          "CGT on UK residential property: report within 60 days of sale",
          "Other assets: report via self-assessment by 31 January",
          "Late filing penalties start at £100, increasing over time",
          "Interest accrues on unpaid tax"
        ]
      },
      {
        title: "Our Capital Gains Tax Services Include",
        content: "Comprehensive CGT support:",
        items: [
          "Accurate calculation of gains and losses",
          "Preparation and filing of CGT forms and self-assessment returns",
          "Tax planning advice to minimise CGT liability legally",
          "Support for cross-border and non-resident CGT obligations",
          "Guidance for first-time filers and high-value asset holders"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported accounting",
      "Forward-thinking advisory",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/tax"
    backLabel="Back to Tax"
  />
);

// PAYROLL SERVICES
export const PAYEServices: React.FC = () => (
  <ServicePage
    title="Payroll Taxes (PAYE & NIC)"
    subtitle="Payroll"
    heroDescription="UK HMRC-Compliant Payroll Processing"
    imageVariant="payroll"
    faqs={payrollFAQs}
    sections={[
      {
        title: "Professional Payroll Tax Services",
        content: "Ensure your business remains fully HMRC-compliant with our expert Payroll Tax services, covering PAYE (Pay As You Earn) and National Insurance Contributions (NIC). We provide technology-driven, AI-enhanced payroll solutions to make processing accurate, efficient, and timely."
      },
      {
        title: "What are Payroll Taxes?",
        content: "Payroll taxes in the UK primarily include:",
        items: [
          "PAYE (Pay As You Earn) – Income tax deducted from employees' salaries",
          "National Insurance Contributions (NIC) – Contributions by employers and employees"
        ]
      },
      {
        title: "Who Needs to Operate PAYE & NIC?",
        content: "PAYE and NIC requirements apply to:",
        items: [
          "All employers with employees earning above the PAYE threshold",
          "Businesses of all sizes, including limited companies, partnerships, and sole traders with staff",
          "Directors and office holders receiving salaries"
        ]
      },
      {
        title: "Timeline for Payroll Taxes",
        content: "Key payroll deadlines:",
        items: [
          "PAYE and NIC reported and paid monthly or quarterly via RTI",
          "Salaries and deductions processed on or before each payday",
          "Annual reporting via P60 and P11D at tax year end",
          "Late payments attract penalties starting at 1% of unpaid amount"
        ]
      },
      {
        title: "Our Payroll Tax Services Include",
        content: "Comprehensive payroll support:",
        items: [
          "Payroll setup and processing for employees, directors, and contractors",
          "PAYE and NIC calculation and submission to HMRC",
          "Real Time Information (RTI) compliance",
          "End-of-year reporting (P60, P11D, P32)",
          "Advice on salary structuring, benefits, and statutory payments"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported payroll systems",
      "Forward-thinking advisory",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/payroll"
    backLabel="Back to Payroll"
  />
);

export const PensionSetup: React.FC = () => (
  <ServicePage
    title="Auto-Enrolment Pension"
    subtitle="Payroll"
    heroDescription="Workplace Pension Setup & Compliance"
    imageVariant="payroll"
    faqs={pensionFAQs}
    sections={[
      {
        title: "Auto-Enrolment Pension Setup & Filing Services",
        content: "Ensure your business is fully compliant with UK workplace pension regulations with our Auto-Enrolment Pension Setup & Filing services. We provide technology-driven, AI-supported solutions to make pension administration simple, accurate, and fully compliant."
      },
      {
        title: "What is Auto-Enrolment Pension?",
        content: "Auto-Enrolment is a UK government initiative requiring employers to enrol eligible employees into a workplace pension scheme and make statutory contributions. Compliance ensures employees save for retirement while avoiding penalties for the company."
      },
      {
        title: "Who Needs to Comply?",
        content: "Auto-enrolment applies to:",
        items: [
          "All UK employers with at least one eligible employee",
          "Eligible employees: aged 22 to state pension age, earning over minimum threshold",
          "Employers of part-time, full-time, and temporary staff"
        ]
      },
      {
        title: "Timeline for Setup & Filing",
        content: "Key pension deadlines:",
        items: [
          "Enrolment duties start when an employee becomes eligible",
          "Declaration of Compliance must be submitted to The Pensions Regulator",
          "Monthly or quarterly contributions processed to pension provider",
          "Re-enrolment required every three years for opted-out staff"
        ]
      },
      {
        title: "Penalties for Non-Compliance",
        content: "The Pensions Regulator can impose:",
        items: [
          "Fixed penalties starting at £400",
          "Escalating daily penalties for continued non-compliance",
          "Criminal prosecution for serious breaches"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported payroll and pension systems",
      "Forward-thinking guidance",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/payroll"
    backLabel="Back to Payroll"
  />
);

export const PayrollFiling: React.FC = () => (
  <ServicePage
    title="P45 / P60 / P11D Filing"
    subtitle="Payroll"
    heroDescription="End-of-Year Payroll Forms & Benefits Reporting"
    imageVariant="payroll"
    faqs={payrollFAQs}
    sections={[
      {
        title: "Professional P45, P60, and P11D Filing Services",
        content: "Ensure your business remains HMRC-compliant with our professional P45, P60, and P11D filing services. We provide technology-driven, AI-supported payroll solutions to make submissions accurate, timely, and stress-free."
      },
      {
        title: "What Are P45, P60, and P11D Forms?",
        content: "Understanding these essential payroll forms:",
        items: [
          "P45: Issued to employees when leaving a job, detailing tax paid and earnings",
          "P60: Annual summary issued to employees showing total earnings and tax deducted",
          "P11D: Reports expenses, benefits, and other non-cash remuneration"
        ]
      },
      {
        title: "Who Needs to File These Forms?",
        content: "Filing requirements:",
        items: [
          "All UK employers must issue P45 when employees leave",
          "P60 must be provided to all employees at tax year end",
          "P11D required for employees receiving benefits not processed through payroll"
        ]
      },
      {
        title: "Timeline for Filing",
        content: "Key deadlines:",
        items: [
          "P45: Issued immediately when an employee leaves",
          "P60: Must be issued by 31 May following tax year end",
          "P11D: Must be filed with HMRC by 6 July following tax year end",
          "Late submissions attract penalties and interest"
        ]
      },
      {
        title: "Our P45 / P60 / P11D Filing Services Include",
        content: "Comprehensive filing support:",
        items: [
          "Preparation and filing of P45, P60, and P11D forms",
          "Accurate calculation of employee earnings, tax, and benefits",
          "Integration with payroll systems for seamless reporting",
          "Advisory on taxable benefits and expense reporting",
          "Full HMRC compliance and minimized penalty risk"
        ]
      }
    ]}
    whyChooseUs={[
      "HMRC Compliance Focused",
      "ACCA/ICAEW-led team",
      "AI-supported payroll systems",
      "Forward-thinking advisory",
      "Scalable solutions",
      "Deadline-driven"
    ]}
    backLink="/services/payroll"
    backLabel="Back to Payroll"
  />
);

// CORPORATE SERVICES
export const CompanyFormation: React.FC = () => (
  <ServicePage
    title="Company Formation"
    subtitle="Corporate Services"
    heroDescription="UK Business Setup Made Simple"
    imageVariant="corporate"
    faqs={companyFormationFAQs}
    sections={[
      {
        title: "Professional Company Formation Services",
        content: "Start your business the right way with our expert Company Formation Services. We help entrepreneurs and businesses register, structure, and establish companies in the UK with full legal compliance and minimal hassle, using technology-driven and AI-enhanced solutions."
      },
      {
        title: "What is Company Formation?",
        content: "Company formation is the process of legally registering a business with Companies House in the UK, creating a limited company, LLP, or other legal entity. Proper formation ensures your business operates legally and enjoys all statutory rights and protections."
      },
      {
        title: "Our Company Formation Services Include",
        content: "Comprehensive formation support:",
        items: [
          "Incorporation of limited companies, LLPs, and subsidiaries",
          "Preparation of statutory documents (Memorandum & Articles of Association)",
          "Registration with Companies House and HMRC for corporation tax and PAYE",
          "Guidance on VAT registration, business banking setup, and compliance",
          "Advisory on shareholder structure, directors, and legal obligations",
          "Support for foreign businesses and international investors"
        ]
      },
      {
        title: "Benefits of Using Our Services",
        content: "Why choose us for company formation:",
        items: [
          "Quick, hassle-free company registration with expert support",
          "Ensure legal and HMRC compliance from day one",
          "Avoid mistakes that may result in fines or legal disputes",
          "Optimise business structure for tax efficiency and growth",
          "Access ongoing advisory for accounting, tax, and corporate compliance"
        ]
      }
    ]}
    whyChooseUs={[
      "Compliance-Focused",
      "ACCA/ICAEW-led team",
      "AI-supported registration",
      "Forward-thinking guidance",
      "Scalable solutions",
      "Fast, efficient registration"
    ]}
    backLink="/services/corporate"
    backLabel="Back to Corporate Services"
  />
);

export const RegisteredOffice: React.FC = () => (
  <ServicePage
    title="Registered Office Address"
    subtitle="Corporate Services"
    heroDescription="Professional Business Address & Mail Handling"
    imageVariant="corporate"
    faqs={generalFAQs}
    sections={[
      {
        title: "Professional Registered Office Services",
        content: "We provide a professional registered office address for your company, handling official correspondence and ensuring your business maintains a prestigious UK business address without the cost of physical premises."
      },
      {
        title: "What Is a Registered Office Address?",
        content: "A registered office address is the official address of your company, recorded at Companies House. It's where all official correspondence from Companies House, HMRC, and other government bodies will be sent."
      },
      {
        title: "Our Registered Office Services Include",
        content: "Comprehensive address services:",
        items: [
          "Prestigious London registered address",
          "Mail forwarding and handling",
          "Companies House filings support",
          "HMRC correspondence handling",
          "Director privacy protection"
        ]
      },
      {
        title: "Benefits of a Professional Registered Office",
        content: "Why use our registered office services:",
        items: [
          "Maintain a professional business image",
          "Protect director privacy and home address",
          "Receive and forward official correspondence",
          "Meet Companies House requirements",
          "Ideal for home-based businesses"
        ]
      }
    ]}
    whyChooseUs={[
      "Professional London address",
      "Reliable mail handling",
      "Privacy protection",
      "Companies House compliant",
      "Affordable fixed pricing",
      "Dedicated support"
    ]}
    backLink="/services/corporate"
    backLabel="Back to Corporate Services"
  />
);

export const CompanySecretarial: React.FC = () => (
  <ServicePage
    title="Company Secretarial Services"
    subtitle="Corporate Services"
    heroDescription="Ongoing Corporate Compliance & Filings"
    imageVariant="corporate"
    faqs={generalFAQs}
    sections={[
      {
        title: "Professional Company Secretarial Services",
        content: "We handle ongoing company secretarial duties, ensuring compliance with Companies House requirements and maintaining your company's statutory records and filings."
      },
      {
        title: "What Is Company Secretarial?",
        content: "Company secretarial services ensure that your company meets all its legal and regulatory obligations. This includes maintaining statutory registers, filing annual returns, and ensuring compliance with the Companies Act."
      },
      {
        title: "Our Company Secretarial Services Include",
        content: "Comprehensive secretarial support:",
        items: [
          "Confirmation statements (annual returns)",
          "Director appointments and resignations",
          "Share transfers and allotments",
          "Registered office changes",
          "Maintenance of statutory registers",
          "Minutes and resolutions"
        ]
      },
      {
        title: "Benefits of Professional Company Secretarial",
        content: "Why outsource company secretarial:",
        items: [
          "Ensure ongoing Companies House compliance",
          "Avoid late filing penalties",
          "Maintain accurate statutory records",
          "Free up time to focus on your business",
          "Expert guidance on corporate changes"
        ]
      }
    ]}
    whyChooseUs={[
      "Companies House compliant",
      "Accurate record keeping",
      "Timely filings",
      "Expert guidance",
      "Fixed pricing",
      "Dedicated support"
    ]}
    backLink="/services/corporate"
    backLabel="Back to Corporate Services"
  />
);

// ADVISORY SERVICES
export const FractionalCFO: React.FC = () => (
  <ServicePage
    title="Fractional CFO Services"
    subtitle="Advisory & Consulting"
    heroDescription="Strategic Financial Leadership Without Full-Time Cost"
    imageVariant="advisory"
    faqs={generalFAQs}
    sections={[
      {
        title: "Professional Fractional CFO Services",
        content: "Get strategic financial leadership without the cost of a full-time CFO. We provide high-level financial guidance to help your business grow, secure funding, and make informed strategic decisions."
      },
      {
        title: "What Is a Fractional CFO?",
        content: "A fractional CFO provides part-time, outsourced CFO services to businesses that need senior financial expertise but don't require or can't afford a full-time CFO. You get the strategic insight without the overhead."
      },
      {
        title: "Our Fractional CFO Services Include",
        content: "Comprehensive CFO support:",
        items: [
          "Strategic financial planning and analysis",
          "Board and investor reporting",
          "Fundraising and investor relations support",
          "Financial modeling and forecasting",
          "Cash flow management and optimization",
          "Growth strategy and business planning"
        ]
      },
      {
        title: "Who Benefits from Fractional CFO Services?",
        content: "Ideal for:",
        items: [
          "Growing SMEs needing strategic financial guidance",
          "Startups preparing for funding rounds",
          "Businesses undergoing significant change or growth",
          "Companies needing interim CFO coverage",
          "Businesses seeking to improve financial performance"
        ]
      }
    ]}
    whyChooseUs={[
      "Senior-level expertise",
      "Cost-effective compared to full-time CFO",
      "Flexible engagement models",
      "Strategic focus",
      "Investor-ready reporting",
      "Growth-oriented advice"
    ]}
    backLink="/services/advisory"
    backLabel="Back to Advisory"
  />
);

export const BudgetingPlanning: React.FC = () => (
  <ServicePage
    title="Budgeting & Financial Planning"
    subtitle="Advisory & Consulting"
    heroDescription="Strategic Budgets & Forecasts for Business Success"
    imageVariant="advisory"
    faqs={generalFAQs}
    sections={[
      {
        title: "Professional Budgeting & Financial Planning Services",
        content: "We help you create budgets and financial plans that drive business success and enable informed decision-making. Our forward-looking approach ensures you're prepared for opportunities and challenges."
      },
      {
        title: "What Is Budgeting & Financial Planning?",
        content: "Budgeting and financial planning involve creating financial forecasts and targets for your business. This includes annual budgets, cash flow projections, and scenario planning to guide strategic decisions."
      },
      {
        title: "Our Budgeting & Planning Services Include",
        content: "Comprehensive planning support:",
        items: [
          "Annual budget preparation",
          "Cash flow forecasting",
          "Scenario and sensitivity analysis",
          "Variance analysis and reporting",
          "Performance tracking and KPIs",
          "Strategic financial planning"
        ]
      },
      {
        title: "Benefits of Professional Budgeting",
        content: "Why invest in budgeting:",
        items: [
          "Set clear financial targets and goals",
          "Anticipate cash flow challenges",
          "Make informed investment decisions",
          "Track performance against benchmarks",
          "Improve financial control and discipline"
        ]
      }
    ]}
    whyChooseUs={[
      "Forward-thinking approach",
      "Technology-driven analysis",
      "Practical, actionable insights",
      "Regular review and updates",
      "Dedicated support",
      "Growth-focused advice"
    ]}
    backLink="/services/advisory"
    backLabel="Back to Advisory"
  />
);

export const CreditControl: React.FC = () => (
  <ServicePage
    title="Credit Control"
    subtitle="Advisory & Consulting"
    heroDescription="Improve Cash Flow & Reduce Bad Debts"
    imageVariant="advisory"
    faqs={generalFAQs}
    sections={[
      {
        title: "Professional Credit Control Services",
        content: "We help you manage customer credit and collections, improving cash flow and reducing bad debts. Our proactive approach ensures you get paid faster while maintaining customer relationships."
      },
      {
        title: "What Is Credit Control?",
        content: "Credit control is the process of managing customer credit terms, monitoring outstanding invoices, and following up on overdue payments. Effective credit control is essential for maintaining healthy cash flow."
      },
      {
        title: "Our Credit Control Services Include",
        content: "Comprehensive credit control support:",
        items: [
          "Credit policy development and implementation",
          "Invoice chasing and payment reminders",
          "Aged debtor reporting and analysis",
          "Debt collection support",
          "Cash flow improvement strategies",
          "Customer credit assessments"
        ]
      },
      {
        title: "Benefits of Professional Credit Control",
        content: "Why invest in credit control:",
        items: [
          "Faster payment collection",
          "Reduced bad debt write-offs",
          "Improved cash flow visibility",
          "Better customer relationships",
          "More time to focus on your business"
        ]
      }
    ]}
    whyChooseUs={[
      "Proactive approach",
      "Technology-driven tracking",
      "Professional debt recovery",
      "Customer relationship focus",
      "Fixed pricing",
      "Dedicated support"
    ]}
    backLink="/services/advisory"
    backLabel="Back to Advisory"
  />
);

export default ServicePage;
