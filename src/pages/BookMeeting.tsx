import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, Clock, Calendar, MapPin } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';
import PageBanner from '@/components/layout/PageBanner';


const CALENDLY_URL = "https://calendly.com/sonicaccountants-info/30min?back=1&month=2026-01";

const BookMeeting: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <PageBanner
  title="Book Meeting with Us"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>

        {/* Calendly Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="glass rounded-[20px] p-6 border border-border">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">Phone / WhatsApp</h3>
                        <a href="tel:02081786228" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          020 8178 6228
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                        <a href="mailto:info@sonicaccountants.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                          info@sonicaccountants.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">Business Hours</h3>
                        <p className="text-muted-foreground text-sm">
                          Mon - Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">Free Consultation</h3>
                        <p className="text-muted-foreground text-sm">
                          30-minute call to discuss your needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">Location</h3>
                        <p className="text-muted-foreground text-sm">
                          London, United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Book */}
                <div className="glass rounded-[20px] p-6 border border-border bg-primary/5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Why Book With Us?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      Free 30-minute consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      ICAEW Registered Accountants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      No obligation, no pressure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      Tailored advice for your business
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      Fixed-fee pricing discussed upfront
                    </li>
                  </ul>
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="lg:col-span-2">
                <div className="glass rounded-[20px] p-4 md:p-6 border border-border overflow-hidden">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 text-center">
                    Choose a Date & Time
                  </h3>
                  <div 
                    className="calendly-inline-widget" 
                    data-url={CALENDLY_URL}
                    style={{ minWidth: '280px', height: '700px' }}
                  />
                </div>
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

export default BookMeeting;
