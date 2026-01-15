import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';


interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Get in Touch", 
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  compact = false 
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your enquiry. We'll be in touch soon.",
    });
    
    setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`glass rounded-[20px] ${compact ? 'p-6' : 'p-8'} border border-border`}>
      {!compact && (
        <div className="mb-6">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className="rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.co.uk"
              required
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 20 1234 5678"
              className="rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type *</Label>
            <Select 
              value={formData.businessType} 
              onValueChange={(value) => setFormData({ ...formData, businessType: value })}
            >
              <SelectTrigger className="rounded-lg">
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="limited-company">Limited Company</SelectItem>
                <SelectItem value="sole-trader">Sole Trader</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Your Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your accounting needs..."
            required
            rows={compact ? 3 : 5}
            className="rounded-lg resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          variant="hero" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
