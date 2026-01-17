import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import PageBanner from '@/components/layout/PageBanner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <PageBanner
  title="Contact Us"
  subtitle="UK-Based Bookkeeping & Accounting Firm"
  description="Providing professional financial services across the UK."
  imageVariant="all"
/>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions? Our team is here to help. Reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  <a href="tel:02081786228" className="flex items-start gap-4 p-4 glass rounded-[20px] hover:border-primary border border-transparent transition-all">
                    <div className="w-12 h-12 rounded-[20px] bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <span className="text-muted-foreground">020 8178 6228</span>
                    </div>
                  </a>

                  <a href="https://wa.me/442081786228" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 glass rounded-[20px] hover:border-primary border border-transparent transition-all">
                    <div className="w-12 h-12 rounded-[20px] bg-green-500/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <span className="text-muted-foreground">020 8178 6228</span>
                    </div>
                  </a>

                  <a href="mailto:info@sonicaccountants.com" className="flex items-start gap-4 p-4 glass rounded-[20px] hover:border-primary border border-transparent transition-all">
                    <div className="w-12 h-12 rounded-[20px] bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <span className="text-muted-foreground">info@sonicaccountants.com</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 glass rounded-[20px]">
                    <div className="w-12 h-12 rounded-[20px] bg-accent/20 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <span className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 glass rounded-[20px]">
                    <div className="w-12 h-12 rounded-[20px] bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <span className="text-muted-foreground">London, United Kingdom</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-[20px] bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-[20px] bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-[20px] bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass rounded-[20px] p-8 border border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-[20px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-[20px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="020 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-[20px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger className="rounded-[20px]">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-[20px]">
                        <SelectItem value="contractors">Contractors LTD</SelectItem>
                        <SelectItem value="business">Business LTD</SelectItem>
                        <SelectItem value="bookkeeping">Bookkeeping Only</SelectItem>
                        <SelectItem value="landlord">Landlord</SelectItem>
                        <SelectItem value="sole-trader">Sole Trader</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-[20px]"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
