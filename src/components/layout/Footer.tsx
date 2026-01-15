import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import footerLogo from '@/assets/footer-logo.png';

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-sonic-navy text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-[hsl(7_70%_56%)] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Let us handle your accounting so you can focus on what you do best – growing your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book-meeting">
              <Button variant="heroOutline" size="lg">
                Schedule A Meeting
              </Button>
            </Link>
            <Link to="/pricing">
  <Button
    variant="outline"
    size="lg"
    className="
      border-primary-foreground
      bg-white
      text-primary
      hover:bg-primary
      hover:text-white
      rounded-[20px]
    "
  >
    View Our Prices
  </Button>
</Link>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={footerLogo} alt="Sonic Accountants" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm mb-6">
              UK-based bookkeeping and accounting firm providing accurate and professional financial services to businesses across the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/who-we-help" className="text-primary-foreground/80 hover:text-primary transition-colors">Who We Help</Link></li>
              <li><Link to="/blogs" className="text-primary-foreground/80 hover:text-primary transition-colors">Blogs</Link></li>
              <li><Link to="/pricing" className="text-primary-foreground/80 hover:text-primary transition-colors">Our Prices</Link></li>
              <li><Link to="/book-meeting" className="text-primary-foreground/80 hover:text-primary transition-colors">Book a Meeting</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Accounts</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Bookkeeping</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Tax Services</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Payroll</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">Advisory</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:02081786228" className="text-primary-foreground/80 hover:text-primary transition-colors block">020 8178 6228</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <a href="https://wa.me/442081786228" className="text-primary-foreground/80 hover:text-green-400 transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@sonicaccountants.com" className="text-primary-foreground/80 hover:text-primary transition-colors">info@sonicaccountants.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Sonic Accountants Powered by The Vertex Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;