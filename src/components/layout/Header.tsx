import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Settings,
  Users,
  Info,
  Mail,
  Calculator,
  BookOpen,
  Receipt,
  Users2,
  Briefcase,
  LineChart,
  Building2,
  Handshake,
  Truck,
  Layers,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import headerLogo from '@/assets/header-logo.png';

interface SubItem {
  label: string;
  href: string;
}

interface SubCategory {
  title: string;
  href?: string;
  icon?: React.ElementType;
  items: SubItem[];
}

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ElementType;
  hasSubmenu: boolean;
  submenu?: {
    categories: SubCategory[];
  };
}

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  /* 🔒 MENU DATA — ALL ROUTES PRESERVED */
  const menuItems: MenuItem[] = [
    { label: 'About Us', href: '/about', icon: Info, hasSubmenu: false },

    {
      label: 'Services',
      href: '/services',
      icon: Settings,
      hasSubmenu: true,
      submenu: {
        categories: [
          {
            title: 'Accounts',
            icon: Calculator,
            href: '/services/accounts',
            items: [
              { label: 'Statutory Accounts', href: '/services/accounts/statutory-accounts' },
              { label: 'Management Accounts', href: '/services/accounts/management-accounts' },
              { label: 'Fixed Asset Register Maintenance', href: '/services/accounts/fixed-asset-register' },
            ],
          },
          {
            title: 'BookKeeping',
            icon: BookOpen,
            href: '/services/bookkeeping',
            items: [
              { label: 'Bookkeeping', href: '/services/bookkeeping/bookkeeping' },
              { label: 'Bank Reconciliations', href: '/services/bookkeeping/bank-reconciliations' },
              { label: 'Accounts Payable Management', href: '/services/bookkeeping/accounts-payable' },
              { label: 'Accounts Receivable Management', href: '/services/bookkeeping/accounts-receivable' },
            ],
          },
          {
            title: 'Tax',
            icon: Receipt,
            href: '/services/tax',
            items: [
              { label: 'Corporation Tax Returns (CT600)', href: '/services/tax/corporation-tax' },
              { label: 'VAT Registration & VAT Returns (MTD)', href: '/services/tax/vat' },
              { label: 'Self Assessment Tax Returns (SA100)', href: '/services/tax/self-assessment' },
              { label: 'Capital Gains Tax (CGT) Support', href: '/services/tax/capital-gains' },
            ],
          },
          {
            title: 'Payroll',
            icon: Users2,
            href: '/services/payroll',
            items: [
              { label: 'Payroll Taxes (PAYE, NIC)', href: '/services/payroll/paye-nic' },
              { label: 'Auto-Enrolment Pension Setup & Filing', href: '/services/payroll/pension' },
              { label: 'P45 / P60 / P11D Filing', href: '/services/payroll/p45-p60-p11d' },
            ],
          },
          {
            title: 'Corporate Services',
            icon: Briefcase,
            href: '/services/corporate',
            items: [
              { label: 'Company Formation', href: '/services/corporate/company-formation' },
              { label: 'Registered Office Address Service', href: '/services/corporate/registered-office' },
              { label: 'Company Secretarial Services', href: '/services/corporate/secretarial' },
            ],
          },
          {
            title: 'Advisory & Consulting',
            icon: LineChart,
            href: '/services/advisory',
            items: [
              { label: 'Fractional CFO Services', href: '/services/advisory/fractional-cfo' },
              { label: 'Budgeting & Financial Planning', href: '/services/advisory/budgeting' },
              { label: 'Credit Control', href: '/services/advisory/credit-control' },
            ],
          },
        ],
      },
    },

    {
      label: 'Our Client Base',
      href: '/who-we-help',
      icon: Users,
      hasSubmenu: true,
      submenu: {
        categories: [
          {
            title: 'Companies',
            icon: Building2,
            href: '/who-we-help/companies',
            items: [
              { label: 'Limited Liability Companies', href: '/who-we-help/companies/limited-liability' },
              { label: 'Small Business', href: '/who-we-help/companies/small-business' },
              { label: 'StartUps', href: '/who-we-help/companies/startups' },
              { label: 'Holding Companies', href: '/who-we-help/companies/holding' },
            ],
          },
          {
            title: 'Sole Traders & Partnerships',
            icon: Handshake,
            href: '/who-we-help/sole-traders-partnerships',
            items: [
              { label: 'Sole Traders', href: '/who-we-help/sole-traders' },
              { label: 'Partnerships', href: '/who-we-help/partnerships' },
            ],
          },
          {
            title: 'Contractors',
            icon: Truck,
            href: '/who-we-help/contractors',
            items: [
              { label: 'Contractors', href: '/who-we-help/contractors/contractors' },
              { label: 'Construction Trades (under CIS)', href: '/who-we-help/contractors/cis' },
            ],
          },
          {
            title: 'Specialities',
            icon: Layers,
            href: '/who-we-help/specialities',
            items: [
              { label: 'E-commerce', href: '/who-we-help/specialities/ecommerce' },
              { label: 'Retail Stores', href: '/who-we-help/specialities/retail' },
              { label: 'Restaurants, Cafés', href: '/who-we-help/specialities/restaurants' },
            ],
          },
        ],
      },
    },

    { label: 'Blogs', href: '/blogs', icon: FileText, hasSubmenu: false },
    { label: 'Contact Us', href: '/contact', icon: Mail, hasSubmenu: false },
    { label: 'Prices', href: '/pricing', icon: FileText, hasSubmenu: false },
  ];

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label);
  };

  return (
    <header className="w-full bg-background sticky top-0 z-50 shadow-md">

      {/* TOP PILL BAR */}
      <div className="container mx-auto px-6 flex justify-end">
        <div className="mt-2 flex items-center gap-5 bg-primary text-white rounded-full px-6 py-2 shadow-md">
          <a href="tel:02081786228" className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4" />
            020 8178 6228
          </a>
          <span className="h-5 w-px bg-white/40" />
          <Link to="/book-meeting" className="flex items-center gap-2 text-sm font-semibold">
            <Calendar className="w-4 h-4" />
            Schedule A Meeting
          </Link>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={headerLogo} className="h-10 sm:h-12 md:h-20 lg:h-28" />
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasSubmenu) {
                    setActiveMenu(item.label);
                    setActiveCategory(item.submenu?.categories[0].title || null);
                  }
                }}
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setActiveCategory(null);
                }}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-[20px] font-medium hover:bg-muted"
                >
                  {item.icon && <item.icon className="w-4 h-4 text-secondary" />}
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.hasSubmenu && activeMenu === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-background rounded-[20px] shadow-xl min-w-[600px] overflow-hidden">
                      <div className="flex">
                        <div className="w-56 bg-primary/5 py-4">
                          {item.submenu!.categories.map(cat => (
                            <div
                              key={cat.title}
                              onMouseEnter={() => setActiveCategory(cat.title)}
                              className={`px-4 py-3 cursor-pointer ${
                                activeCategory === cat.title ? 'bg-background text-primary' : ''
                              }`}
                            >
                              {cat.title}
                            </div>
                          ))}
                        </div>
                        <div className="p-6 flex-1">
                          {item.submenu!.categories
                            .filter(c => c.title === activeCategory)
                            .map(c => (
                              <div key={c.title}>
                                <Link to={c.href!} className="font-semibold text-primary block mb-4">
                                  View All {c.title} →
                                </Link>
                                {c.items.map(sub => (
                                  <Link
                                    key={sub.label}
                                    to={sub.href}
                                    className="block py-2 px-3 rounded-lg hover:bg-primary/5"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden p-2 rounded-[20px]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* MOBILE MENU */}
{mobileMenuOpen && (
  <div className="lg:hidden fixed inset-x-0 top-[var(--header-height,96px)] bottom-0 bg-background border-t shadow-md overflow-y-auto z-40">
    <div className="px-4 py-4 space-y-2">

      {menuItems.map(item => (
        <div key={item.label} className="border-b last:border-b-0">

          {/* MAIN ITEM */}
          <div className="flex items-center justify-between py-3">
            <Link
              to={item.href}
              className="flex items-center gap-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.icon && <item.icon className="w-4 h-4 text-secondary" />}
              {item.label}
            </Link>

            {item.hasSubmenu && (
              <button
                onClick={() => toggleMobileSubmenu(item.label)}
                className="p-1"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expandedMobileMenu === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )}
          </div>

          {/* SUBMENU */}
          {item.hasSubmenu && expandedMobileMenu === item.label && (
            <div className="pl-4 pb-3 space-y-3">
              {item.submenu!.categories.map(category => (
                <div key={category.title}>
                  <Link
                    to={category.href!}
                    className="block font-semibold text-primary py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.title}
                  </Link>

                  {category.items.map(sub => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="block text-sm py-1 pl-3 text-muted-foreground hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  </div>
)}

    </header>
  );
};

export default Header;
