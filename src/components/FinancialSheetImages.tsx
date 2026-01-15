import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Check } from 'lucide-react';

// Import all sheet images
import sheetBalance from '@/assets/sheet-balance.jpg';
import sheetProfitLoss from '@/assets/sheet-profit-loss.jpg';
import sheetBudgeting from '@/assets/sheet-budgeting.jpg';
import sheetEquity from '@/assets/sheet-equity.jpg';
import sheetCashflow from '@/assets/sheet-cashflow.jpg';

interface FinancialSheet {
  src: string;
  label: string;
  number: string;
  desc: string;
  details?: string[];
}

interface FinancialSheetImagesProps {
  variant?: 'accounts' | 'tax' | 'bookkeeping' | 'advisory' | 'payroll' | 'corporate' | 'all';
}

const FinancialSheetImages: React.FC<FinancialSheetImagesProps> = ({ variant = 'accounts' }) => {
  const getImages = (): FinancialSheet[] => {
    switch (variant) {
      case 'accounts':
        return [
          { 
            src: sheetProfitLoss, 
            label: 'Profit & Loss (P&L) Account', 
            number: '01.',
            desc: 'Profit & Loss (P&L) shows the performance over the company\'s financial year. It would typically show a summary of income received and the types of expenses incurred. But, of course, every business is unique.',
            details: [
              'Summary of income, expenses, and profitability',
              'Most companies file a Company Tax Return with HMRC every year',
              'P&L produced for management should be tailor-made for your business'
            ]
          },
          { 
            src: sheetBalance, 
            label: 'Balance Sheet', 
            number: '02.',
            desc: 'A Balance Sheet shows the financial position of a business at any given point in time. A balance sheet should be prepared with notes to help indicate key business ratios.',
            details: [
              'Assets, liabilities and equity overview',
              'Liquidity ratios, debtor and inventory days analysis',
              'Highlights risk areas for cash flow planning'
            ]
          },
          { 
            src: sheetEquity, 
            label: 'Statement of Changes in Equity', 
            number: '03.',
            desc: 'Notes to the accounts shed light on crucial information that would be useful to any stakeholder of the business. Typical examples include fixed asset breakdowns and creditor/debtor details.',
            details: [
              'Breakdown of fixed assets showing amounts purchased, sold and depreciated',
              'Detailed forex transaction during the year',
              'Detail of creditor or debtors e.g. money owed to the bank'
            ]
          },
        ];
      case 'tax':
        return [
          { 
            src: sheetProfitLoss, 
            label: 'Profit & Loss Statement', 
            number: '01.',
            desc: 'Your P&L forms the foundation for accurate tax filing, showing all income and allowable expenses that determine your taxable profit.',
            details: [
              'Financial performance summary for tax computation',
              'Allowable expenses and deductions tracked',
              'Essential for CT600 and SA100 preparation'
            ]
          },
          { 
            src: sheetCashflow, 
            label: 'Cash Flow Statement', 
            number: '02.',
            desc: 'Track operating, investing, and financing activities to understand cash movements and plan for tax payments.',
            details: [
              'Operating, investing & financing activities',
              'Helps plan for corporation tax payments',
              'Identifies timing of cash requirements'
            ]
          },
        ];
      case 'bookkeeping':
        return [
          { 
            src: sheetBalance, 
            label: 'Balance Sheet', 
            number: '01.',
            desc: 'Accurate bookkeeping ensures your balance sheet reflects the true financial position with up-to-date asset, liability, and equity records.',
            details: [
              'Real-time financial position tracking',
              'Reconciled bank and account balances',
              'Supports audit-ready financial records'
            ]
          },
          { 
            src: sheetProfitLoss, 
            label: 'Profit & Loss', 
            number: '02.',
            desc: 'Daily transaction recording flows into your P&L, giving you clear visibility of income versus expenses at any time.',
            details: [
              'Income vs expenses tracking',
              'Categorized expense management',
              'Real-time profitability insights'
            ]
          },
          { 
            src: sheetCashflow, 
            label: 'Cash Flow Statement', 
            number: '03.',
            desc: 'Proper bookkeeping enables accurate cash flow tracking, essential for managing working capital and business operations.',
            details: [
              'Cash movement tracking',
              'Payment and receipt monitoring',
              'Working capital management'
            ]
          },
        ];
      case 'advisory':
        return [
          { 
            src: sheetBudgeting, 
            label: 'Budget & Forecast', 
            number: '01.',
            desc: 'Strategic budgeting and quarterly planning projections help you set targets, allocate resources, and measure performance against goals.',
            details: [
              'Quarterly and annual budgeting',
              'Revenue and cost projections',
              'Variance analysis and KPI tracking'
            ]
          },
          { 
            src: sheetProfitLoss, 
            label: 'Financial Forecast', 
            number: '02.',
            desc: 'Forward-looking financial projections help anticipate revenue, manage expenses, and plan for sustainable growth.',
            details: [
              'Revenue & expense projections',
              'Scenario planning and modeling',
              'Growth trajectory analysis'
            ]
          },
          { 
            src: sheetCashflow, 
            label: 'Cash Flow Planning', 
            number: '03.',
            desc: 'Proactive cash flow management ensures liquidity and helps you make informed decisions about investments and financing.',
            details: [
              'Liquidity & cash management',
              '13-week rolling forecasts',
              'Investment timing optimization'
            ]
          },
        ];
      case 'payroll':
        return [
          { 
            src: sheetProfitLoss, 
            label: 'Payroll Summary', 
            number: '01.',
            desc: 'Comprehensive payroll reporting showing PAYE, National Insurance, and pension costs integrated into your financial statements.',
            details: [
              'PAYE, NIC & pension costs breakdown',
              'RTI submission records',
              'Employee cost analysis'
            ]
          },
          { 
            src: sheetBudgeting, 
            label: 'Payroll Budget', 
            number: '02.',
            desc: 'Plan and forecast staffing costs, including salary increases, new hires, and benefits, for accurate financial planning.',
            details: [
              'Staff costs forecasting',
              'Headcount planning',
              'Benefits and bonus provisions'
            ]
          },
        ];
      case 'corporate':
        return [
          { 
            src: sheetBalance, 
            label: 'Balance Sheet', 
            number: '01.',
            desc: 'A comprehensive view of your company\'s financial position, essential for Companies House filings and stakeholder reporting.',
            details: [
              'Company financial position overview',
              'Asset and liability management',
              'Compliance with Companies House requirements'
            ]
          },
          { 
            src: sheetEquity, 
            label: 'Equity Statement', 
            number: '02.',
            desc: 'Track share capital structure, retained earnings, and changes in ownership to maintain accurate corporate records.',
            details: [
              'Share capital structure tracking',
              'Dividend and distribution records',
              'Ownership change documentation'
            ]
          },
        ];
      case 'all':
        return [
          { 
            src: sheetBalance, 
            label: 'Balance Sheet', 
            number: '01.',
            desc: 'Complete overview of assets, liabilities and equity showing your company\'s financial health at any point in time.',
            details: ['Assets & liabilities overview', 'Equity position', 'Financial health indicator']
          },
          { 
            src: sheetProfitLoss, 
            label: 'Profit & Loss', 
            number: '02.',
            desc: 'Comprehensive income and expense summary showing business profitability over the accounting period.',
            details: ['Income summary', 'Expense breakdown', 'Profitability analysis']
          },
          { 
            src: sheetBudgeting, 
            label: 'Budget & Forecast', 
            number: '03.',
            desc: 'Forward-looking financial planning to set targets and track performance against business goals.',
            details: ['Target setting', 'Performance tracking', 'Strategic planning']
          },
          { 
            src: sheetCashflow, 
            label: 'Cash Flow', 
            number: '04.',
            desc: 'Track cash movements across operating, investing, and financing activities for liquidity management.',
            details: ['Cash movement tracking', 'Liquidity analysis', 'Working capital management']
          },
        ];
      default:
        return [
          { 
            src: sheetBalance, 
            label: 'Balance Sheet', 
            number: '01.',
            desc: 'Financial position overview showing assets, liabilities and shareholder equity.',
            details: ['Assets overview', 'Liabilities tracking', 'Equity position']
          },
          { 
            src: sheetProfitLoss, 
            label: 'Profit & Loss', 
            number: '02.',
            desc: 'Revenue and costs breakdown showing business performance over the period.',
            details: ['Revenue summary', 'Cost breakdown', 'Net profit calculation']
          },
        ];
    }
  };

  const images = getImages();

  return (
    <div className="space-y-12 md:space-y-16">
      <div className="text-center mb-8">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Sample Financial Reports</h3>
        <p className="text-muted-foreground text-sm">Professional reports prepared to UK GAAP standards</p>
      </div>

      {images.map((image, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <ScrollAnimation key={index} direction={isEven ? 'left' : 'right'}>
            <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
              {/* Text Content */}
              <div className={`space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-heading font-bold text-xl">{image.number}</span>
                  <div className="h-px bg-primary/30 flex-1 max-w-[60px]" />
                </div>
                <h4 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  {image.label}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {image.desc}
                </p>
                {image.details && image.details.length > 0 && (
                  <ul className="space-y-2 pt-2">
                    {image.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  {/* Decorative border */}
                  <div className={`absolute -inset-3 border-2 border-primary/20 rounded-[20px] ${isEven ? '-rotate-1' : 'rotate-1'}`} />
                  
                  {/* Main image container */}
                  <div className="relative bg-white rounded-[16px] p-4 shadow-lg border border-border overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="w-full h-auto rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Decorative accent */}
                  <div className={`absolute ${isEven ? '-bottom-3 -right-3' : '-bottom-3 -left-3'} w-16 h-16 border-4 border-accent rounded-[12px] -z-10`} />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
};

export default FinancialSheetImages;
