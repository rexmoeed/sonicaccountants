import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, Award, Target, Eye, Shield, Cpu, Users, Cloud, Briefcase } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const whyChooseUs = [
  {
    icon: Shield,
    title: 'ICAEW-Registered Expertise',
    description: 'Our team is composed of highly skilled ACCA and ICAEW-qualified professionals with extensive knowledge in UK accounting, tax, payroll, and corporate compliance.',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Solutions',
    description: 'We leverage advanced technology and AI-driven solutions to deliver accurate, efficient, and timely compliance services, reducing errors and improving efficiency.',
  },
  {
    icon: Award,
    title: 'Comprehensive Services',
    description: 'Our end-to-end services cover bookkeeping, tax, VAT, PAYE, corporate tax filings, and advisory services tailored to your business needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Accounting Specialists',
    description: 'We help businesses take control of their finances with smart, cloud-based accounting using platforms like Xero, QuickBooks, and FreeAgent.',
  },
  {
    icon: Users,
    title: 'Personalized Support',
    description: 'We provide each client with a dedicated point of contact, offering personalized advice and working closely with you to understand your goals.',
  },
  {
    icon: Briefcase,
    title: 'Long-Term Partnership',
    description: 'We act as your financial partner, providing insights into cash flow, growth strategies, and performance to help you make well-informed decisions.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="decorative-circle-yellow w-20 h-20 top-10 right-[10%] opacity-30" />
          <div className="decorative-circle-red w-16 h-16 bottom-10 left-[15%] opacity-30" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                About <span className="text-accent">Sonic Accountants</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                UK-Based Bookkeeping & Accounting Firm providing professional financial services across the UK.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollAnimation direction="left">
                <div>
                  <div className="relative">
                    <div className="absolute -inset-4 border-2 border-secondary rounded-[20px] opacity-50" />
                    <img
                      src={aboutTeam}
                      alt="Sonic Accountants Team"
                      className="relative rounded-[20px] shadow-xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-accent rounded-[20px] -z-10" />
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-[20px] shadow-xl border border-border glass">
                    <div className="text-center">
                      <span className="block font-heading font-bold text-2xl text-primary">ICAEW</span>
                      <span className="text-sm text-muted-foreground">Registered</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                    UK-Based Bookkeeping & Accounting Firm
                  </h2>
                  <div className="section-divider mb-6" />

                  <p className="text-muted-foreground mb-6">
                    We're a UK-based bookkeeping and accounting team, here to help you keep your finances straight and your accounting simple. Staying on top of all those UK tax rules can be a headache, but we make sure you stay compliant, so you can relax.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Our crew is packed with ACCA and ICAEW pros who know their stuff. We mix years of real experience with the latest AI-driven tools to get your accounting done efficiently and on time—no fuss, no surprises.
                  </p>

                  <p className="text-muted-foreground">
                    Need help with VAT or payroll? Looking for solid advice on financial reports, budgeting, or corporate compliance? We've got you covered. We work with startups, SMEs, and growing businesses, tailoring our support to fit what you need. You grow your business; we'll handle the numbers. Simple as that.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* UK Compliance Expertise */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <ScrollAnimation direction="left">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                    UK Compliance Expertise
                  </h2>
                  <div className="section-divider mb-6" />

                  <p className="text-muted-foreground mb-6">
                    Our team, composed of highly skilled ACCA and ICAEW-qualified professionals, offers extensive knowledge in UK accounting, tax, payroll, and corporate compliance. We focus on helping businesses of all sizes—including startups, SMEs, and large multinational corporations—stay fully compliant with essential UK regulations.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {['HMRC standards', 'Companies House filings', 'VAT rules', 'Payroll obligations'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted-foreground">
                    By utilizing advanced technology and AI-driven solutions, we deliver accurate, efficient, and timely compliance services. Our goal is to help you avoid penalties, minimize risks, and build a robust professional reputation in the UK business landscape.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <div className="bg-background rounded-[20px] p-8 shadow-lg border border-border">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Cloud className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Cloud Accounting Specialists</h3>
                  <p className="text-muted-foreground mb-4">
                    We help businesses take control of their finances with smart, cloud-based accounting. Our team knows the top accounting platforms inside out, so you get accurate numbers, real-time updates, and a smoother way to manage your money.
                  </p>
                  <p className="text-muted-foreground">
                    With us, you stay in the loop, your data stays secure, and you get more transparency and control—without all the hassle.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20" id="mission">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Mission & Vision
              </h2>
              <div className="section-divider mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollAnimation direction="left">
                <div className="bg-background rounded-[20px] p-8 shadow-lg border-l-4 border-primary h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to provide precise, reliable, and cutting-edge accounting and financial services that empower businesses to grow, stay compliant, and make well-informed decisions. We combine the professional expertise of our ACCA and ICAEW-qualified team with innovative AI-driven solutions, offering efficient, cost-effective, and fully HMRC-compliant bookkeeping, tax, and advisory services. With a strong focus on transparency, trust, and strategic insights, we aim to be a trusted partner for businesses of all sizes throughout the UK.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right">
                <div className="bg-background rounded-[20px] p-8 shadow-lg border-l-4 border-secondary h-full" id="vision">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Our vision is to become a leading UK-based accounting and financial services firm, renowned for excellence, innovation, and trusted advisory. We strive to harness cutting-edge technology and AI-driven solutions, combined with the expertise of our ACCA and ICAEW-qualified professionals, to provide seamless, compliant, and strategic financial services. Our goal is to empower businesses of all sizes to achieve sustainable growth, optimize their financial performance, and confidently navigate the UK regulatory landscape.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30" id="why-choose-us">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Sets Us Apart
              </h2>
              <div className="section-divider mx-auto mb-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                  <div className="bg-background border border-border rounded-[20px] p-6 hover-lift h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="decorative-circle-yellow w-24 h-24 top-10 right-[5%] opacity-20" />
          <div className="decorative-circle-red w-16 h-16 bottom-10 left-[10%] opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            <ScrollAnimation direction="up">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Let's discuss how we can help your business thrive with our expert accounting and bookkeeping services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/book-meeting">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      Book a Free Consultation
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
