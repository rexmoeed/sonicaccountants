import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import BookMeeting from "./pages/BookMeeting";
import Services from "./pages/Services";
import WhoWeHelp from "./pages/WhoWeHelp";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

// Service Pages
import { StatutoryAccounts, ManagementAccounts, FixedAssets, Bookkeeping, BankReconciliations, AccountsPayable, AccountsReceivable, CorporationTax, VATServices, SelfAssessment, CapitalGainsTax, PAYEServices, PensionSetup, PayrollFiling, CompanyFormation, RegisteredOffice, CompanySecretarial, FractionalCFO, BudgetingPlanning, CreditControl } from "./pages/ServicePages";

// Service Category Pages
import { AccountsCategory, BookkeepingCategory, TaxCategory, PayrollCategory, CorporateServicesCategory, AdvisoryCategory } from "./pages/ServiceCategoryPages";

// Client Pages
import { LimitedCompanies, SmallBusiness, StartUps, HoldingCompanies, SoleTraders, Partnerships, Contractors, ConstructionCIS, Ecommerce, Retail, Restaurants } from "./pages/ClientPages";

// Client Category Pages
import { CompaniesCategory, SoleTradersCategory, ContractorsCategory, SpecialitiesCategory } from "./pages/ClientCategoryPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-meeting" element={<BookMeeting />} />
          <Route path="/services" element={<Services />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blogs" element={<Blogs />} />
          
          {/* Service Category Pages */}
          <Route path="/services/accounts" element={<AccountsCategory />} />
          <Route path="/services/bookkeeping" element={<BookkeepingCategory />} />
          <Route path="/services/tax" element={<TaxCategory />} />
          <Route path="/services/payroll" element={<PayrollCategory />} />
          <Route path="/services/corporate" element={<CorporateServicesCategory />} />
          <Route path="/services/advisory" element={<AdvisoryCategory />} />
          
          {/* Service Pages - Accounts */}
          <Route path="/services/accounts/statutory-accounts" element={<StatutoryAccounts />} />
          <Route path="/services/accounts/management-accounts" element={<ManagementAccounts />} />
          <Route path="/services/accounts/fixed-asset-register" element={<FixedAssets />} />
          
          {/* Service Pages - Bookkeeping */}
          <Route path="/services/bookkeeping/bookkeeping" element={<Bookkeeping />} />
          <Route path="/services/bookkeeping/bank-reconciliations" element={<BankReconciliations />} />
          <Route path="/services/bookkeeping/accounts-payable" element={<AccountsPayable />} />
          <Route path="/services/bookkeeping/accounts-receivable" element={<AccountsReceivable />} />
          
          {/* Service Pages - Tax */}
          <Route path="/services/tax/corporation-tax" element={<CorporationTax />} />
          <Route path="/services/tax/vat" element={<VATServices />} />
          <Route path="/services/tax/self-assessment" element={<SelfAssessment />} />
          <Route path="/services/tax/capital-gains" element={<CapitalGainsTax />} />
          
          {/* Service Pages - Payroll */}
          <Route path="/services/payroll/paye-nic" element={<PAYEServices />} />
          <Route path="/services/payroll/pension" element={<PensionSetup />} />
          <Route path="/services/payroll/p45-p60-p11d" element={<PayrollFiling />} />
          
          {/* Service Pages - Corporate */}
          <Route path="/services/corporate/company-formation" element={<CompanyFormation />} />
          <Route path="/services/corporate/registered-office" element={<RegisteredOffice />} />
          <Route path="/services/corporate/secretarial" element={<CompanySecretarial />} />
          
          {/* Service Pages - Advisory */}
          <Route path="/services/advisory/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/services/advisory/budgeting" element={<BudgetingPlanning />} />
          <Route path="/services/advisory/credit-control" element={<CreditControl />} />
          
          {/* Client Category Pages */}
          <Route path="/who-we-help/companies" element={<CompaniesCategory />} />
          <Route path="/who-we-help/sole-traders-partnerships" element={<SoleTradersCategory />} />
          <Route path="/who-we-help/contractors" element={<ContractorsCategory />} />
          <Route path="/who-we-help/specialities" element={<SpecialitiesCategory />} />
          
          {/* Client Pages - Companies */}
          <Route path="/who-we-help/companies/limited-liability" element={<LimitedCompanies />} />
          <Route path="/who-we-help/companies/small-business" element={<SmallBusiness />} />
          <Route path="/who-we-help/companies/startups" element={<StartUps />} />
          <Route path="/who-we-help/companies/holding" element={<HoldingCompanies />} />
          
          {/* Client Pages - Sole Traders & Partnerships */}
          <Route path="/who-we-help/sole-traders" element={<SoleTraders />} />
          <Route path="/who-we-help/partnerships" element={<Partnerships />} />
          
          {/* Client Pages - Contractors */}
          <Route path="/who-we-help/contractors/contractors" element={<Contractors />} />
          <Route path="/who-we-help/contractors/cis" element={<ConstructionCIS />} />
          
          {/* Client Pages - Specialities */}
          <Route path="/who-we-help/specialities/ecommerce" element={<Ecommerce />} />
          <Route path="/who-we-help/specialities/retail" element={<Retail />} />
          <Route path="/who-we-help/specialities/restaurants" element={<Restaurants />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
